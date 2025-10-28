"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const AuthHelper_1 = require("./AuthHelper");
const PermissionFactory_1 = require("../PermissionService/PermissionFactory");
const TenantFactory_1 = require("../TenantService/TenantFactory");
const PlanoContratadoFactory_1 = require("../PlanoContratadoService/PlanoContratadoFactory");
const inMemoryUserGroupRepository_1 = require("../../repositories/userGroupRepository/inMemoryUserGroupRepository");
const gerarNumero_1 = require("../../utils/gerarNumero");
const getTimeDiff_1 = require("../../utils/getTimeDiff");
dotenv_1.default.config();
const authHelper = new AuthHelper_1.AuthHelper();
const { JWT_TOKEN_EXPIRES_IN, JWT_REFRESH_TOKEN_EXPIRES_IN } = process.env;
class AuthService {
    constructor(userRepository, emailService, loginCodigo) {
        this.userRepository = userRepository;
        this.emailService = emailService;
        this.loginCodigo = loginCodigo;
    }
    async login(data) {
        const tenantService = (0, TenantFactory_1.TenantFactory)();
        const user = await this.userRepository.getByEmail(data.email);
        if (!user)
            throw new Error('Email e/ou senha inválido');
        if (!authHelper.verifyPassword(data.senha, user.senha))
            throw new Error('Email e/ou senha inválido');
        const payload = { tenantId: user.tenantId };
        const token = authHelper.generateJWT(payload, JWT_TOKEN_EXPIRES_IN);
        const refreshToken = authHelper.generateJWT(payload, JWT_REFRESH_TOKEN_EXPIRES_IN);
        const permissionService = (0, PermissionFactory_1.PermissionFactory)();
        const permissions = await permissionService.getPermissionsByUserGroupId(user.user_group_id);
        const menusPermitidos = permissions.map(p => { return { nome: p.dominio }; });
        const tenant = await tenantService.getById(user.tenantId);
        const quantidade_usuarios_agenda = tenant.quantidade_usuarios_agenda || 0;
        let cadastroPendente = false;
        if (false
            || !tenant.bairro
            || !tenant.cep
            || !tenant.cidade
            || (!tenant.cnpj && !tenant.cpf)
            || !tenant.dados_contratado_contrato_honorarios_rmc
            || !tenant.dados_ourtorgado_procuracao_rmc
            || !tenant.estado
            || !tenant.nome
            || !tenant.numero
            || !tenant.rua
            || !tenant.termo_uso_sistema)
            cadastroPendente = true;
        return { token, refreshToken, regras: permissions, menusPermitidos, quantidade_usuarios_agenda, cadastroPendente, tenantId: tenant.id };
    }
    async loginComCodigo(data) {
        const tenantService = (0, TenantFactory_1.TenantFactory)();
        const user = await this.userRepository.getByEmail(data.email);
        if (!user)
            throw new Error('Email e/ou código inválido');
        const loginCodigo = await this.loginCodigo.getByEmail(data.email);
        if (!loginCodigo)
            throw new Error('Email e/ou código inválido');
        if (data.codigo !== loginCodigo.codigo)
            throw new Error('Email e/ou código inválido');
        const hora_agora = new Date();
        if ((0, getTimeDiff_1.getTimeDiff)(hora_agora, loginCodigo.hora_envio) > 5 * 60_000) {
            throw new Error('Email e/ou código inválido');
        }
        await this.loginCodigo.delete(loginCodigo.id);
        const payload = { tenantId: user.tenantId };
        const token = authHelper.generateJWT(payload, JWT_TOKEN_EXPIRES_IN);
        const refreshToken = authHelper.generateJWT(payload, JWT_REFRESH_TOKEN_EXPIRES_IN);
        const permissionService = (0, PermissionFactory_1.PermissionFactory)();
        const permissions = await permissionService.getPermissionsByUserGroupId(user.user_group_id);
        const menusPermitidos = permissions.map(p => { return { nome: p.dominio }; });
        const tenant = await tenantService.getById(user.tenantId);
        const quantidade_usuarios_agenda = tenant.quantidade_usuarios_agenda || 0;
        let cadastroPendente = false;
        if (false
            || !tenant.bairro
            || !tenant.cep
            || !tenant.cidade
            || (!tenant.cnpj && !tenant.cpf)
            || !tenant.dados_contratado_contrato_honorarios_rmc
            || !tenant.dados_ourtorgado_procuracao_rmc
            || !tenant.estado
            || !tenant.nome
            || !tenant.numero
            || !tenant.rua
            || !tenant.termo_uso_sistema)
            cadastroPendente = true;
        return { token, refreshToken, regras: permissions, menusPermitidos, quantidade_usuarios_agenda, cadastroPendente, tenantId: tenant.id };
    }
    async solicitarCodigo(data) {
        const user = await this.userRepository.getByEmail(data.email);
        if (!user)
            throw new Error('Email e/ou senha inválido');
        const codigo = (0, gerarNumero_1.gerarNumero6Digitos)();
        const novo_login_codigo = { id: crypto.randomUUID(), codigo, email: user.email, hora_envio: new Date() };
        const existe_login_codigo_com_este_email = await this.loginCodigo.getByEmail(data.email);
        if (!!existe_login_codigo_com_este_email) {
            await this.loginCodigo.delete(existe_login_codigo_com_este_email.id);
        }
        await this.loginCodigo.add(novo_login_codigo);
        await this.emailService.sendCodigoParaLogin(user.email, codigo);
        return codigo;
    }
    async refreshTokens(data) {
        const verified_token = authHelper.verifyJWT(data.token);
        if (!verified_token)
            throw new Error('Token inválido');
        const { tenantId } = authHelper.decodeJWT(data.token);
        const payload = { tenantId };
        const token = authHelper.generateJWT(payload, JWT_TOKEN_EXPIRES_IN);
        const refresh_token = authHelper.generateJWT(payload, JWT_REFRESH_TOKEN_EXPIRES_IN);
        const user = await this.userRepository.getByTenantId(tenantId);
        const permissionService = (0, PermissionFactory_1.PermissionFactory)();
        const permissions = await permissionService.getPermissionsByUserGroupId(user?.user_group_id);
        const menusPermitidos = permissions.map(p => { return { nome: p.dominio }; });
        return { token, refresh_token, regras: permissions, menusPermitidos };
    }
    async register(data) {
        const { id_plano, cupom, tipo, partner, ...userData } = data;
        const se_email_existe = await this.userRepository.getByEmail(data.email);
        if (se_email_existe)
            throw new Error('e-mail já cadastrado');
        userData.senha = authHelper.hashPasssword(data.senha);
        const tenantService = (0, TenantFactory_1.TenantFactory)();
        const tenant = await tenantService.add();
        const planoContratadoService = (0, PlanoContratadoFactory_1.PlanoContratadoFactory)();
        await planoContratadoService.add(id_plano, tenant.id);
        const user = { id: crypto.randomUUID(), user_group_id: inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited, tenantId: tenant.id, nivel: 'limited', ...userData };
        return this.userRepository.add(user);
    }
}
exports.AuthService = AuthService;
