import dotenv from "dotenv"
import { AuthHelper } from "./AuthHelper"
import { ILoginComCodigoSchema, ILoginSchema, IRefreshToken, IRegister, ISolicitarCodigoSchema } from "../../controllers/AuthController/AuthSchema"
import { PermissionFactory } from "../PermissionService/PermissionFactory"
import { User } from "../../models/User/User"
import { TenantFactory } from "../TenantService/TenantFactory"
import { PlanoContratadoFactory } from "../PlanoContratadoService/PlanoContratadoFactory"
import { USER_GROUP_IDS } from "../../repositories/userGroupRepository/inMemoryUserGroupRepository"
import { IAuthService } from "./IAuthService"
import { EmailService } from "../EmailService/EmailService"
import { UserService } from "../UserService/UserService"
import { gerarNumero6Digitos } from "../../utils/gerarNumero"
import { ILoginCodigoRepository } from "../../repositories/loginCodigoRepository/ILoginCodigoRepository"
import { LoginCodigo } from "../../models/LoginCodigo/LoginCodigo"
import { getTimeDiff } from "../../utils/getTimeDiff"
import { IUserRepository } from "../../repositories/userRepository/IUserRepository"

dotenv.config()

const authHelper = new AuthHelper()
const { JWT_TOKEN_EXPIRES_IN, JWT_REFRESH_TOKEN_EXPIRES_IN } = process.env

export class AuthService implements IAuthService {
    constructor(
        private userRepository: IUserRepository,
        private emailService: EmailService,
        private loginCodigo: ILoginCodigoRepository
    ) { }

    async login(data: ILoginSchema) {
        const tenantService = TenantFactory()
        const user = await this.userRepository.getByEmail(data.email)

        if (!user) throw new Error('Email e/ou senha inválido')
        if (!authHelper.verifyPassword(data.senha, user.senha)) throw new Error('Email e/ou senha inválido')

        const payload = { tenantId: user.tenantId as string }

        const token = authHelper.generateJWT(payload, JWT_TOKEN_EXPIRES_IN as string)
        const refreshToken = authHelper.generateJWT(payload, JWT_REFRESH_TOKEN_EXPIRES_IN as string)

        const permissionService = PermissionFactory()
        const permissions = await permissionService.getPermissionsByUserGroupId(user.user_group_id)

        const menusPermitidos = permissions.map(p => { return { nome: p.dominio } })

        const tenant = await tenantService.getById(user.tenantId as string)
        const quantidade_usuarios_agenda = tenant.quantidade_usuarios_agenda || 0

        let cadastroPendente = false
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
            || !tenant.termo_uso_sistema
        ) cadastroPendente = true

        return { token, refreshToken, regras: permissions, menusPermitidos, quantidade_usuarios_agenda, cadastroPendente, tenantId: tenant.id }
    }

    async loginComCodigo(data: ILoginComCodigoSchema) {
        const tenantService = TenantFactory()
        const user = await this.userRepository.getByEmail(data.email)

        if (!user) throw new Error('Email e/ou código inválido')

        const loginCodigo = await this.loginCodigo.getByEmail(data.email)
        if (!loginCodigo) throw new Error('Email e/ou código inválido')
        if (data.codigo !== loginCodigo.codigo) throw new Error('Email e/ou código inválido')

        const hora_agora = new Date()
        if (getTimeDiff(hora_agora, loginCodigo.hora_envio) > 5 * 60_000) {
            throw new Error('Email e/ou código inválido')
        }

        await this.loginCodigo.delete(loginCodigo.id)

        const payload = { tenantId: user.tenantId as string }

        const token = authHelper.generateJWT(payload, JWT_TOKEN_EXPIRES_IN as string)
        const refreshToken = authHelper.generateJWT(payload, JWT_REFRESH_TOKEN_EXPIRES_IN as string)

        const permissionService = PermissionFactory()
        const permissions = await permissionService.getPermissionsByUserGroupId(user.user_group_id)

        const menusPermitidos = permissions.map(p => { return { nome: p.dominio } })

        const tenant = await tenantService.getById(user.tenantId as string)
        const quantidade_usuarios_agenda = tenant.quantidade_usuarios_agenda || 0

        let cadastroPendente = false
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
            || !tenant.termo_uso_sistema
        ) cadastroPendente = true

        return { token, refreshToken, regras: permissions, menusPermitidos, quantidade_usuarios_agenda, cadastroPendente, tenantId: tenant.id }
    }

    async solicitarCodigo(data: ISolicitarCodigoSchema): Promise<string> {
        const user = await this.userRepository.getByEmail(data.email)
        if (!user) throw new Error('Email e/ou senha inválido')

        const codigo = gerarNumero6Digitos()
        const novo_login_codigo: LoginCodigo = { id: crypto.randomUUID(), codigo, email: user.email, hora_envio: new Date() }

        const existe_login_codigo_com_este_email = await this.loginCodigo.getByEmail(data.email)
        if (!!existe_login_codigo_com_este_email) {
            await this.loginCodigo.delete(existe_login_codigo_com_este_email.id)
        }

        await this.loginCodigo.add(novo_login_codigo)

        await this.emailService.sendCodigoParaLogin(user.email, codigo)

        return codigo
    }

    async refreshTokens(data: IRefreshToken) {
        const verified_token = authHelper.verifyJWT(data.token)

        if (!verified_token) throw new Error('Token inválido')
        const { tenantId } = authHelper.decodeJWT(data.token)
        const payload = { tenantId }

        const token = authHelper.generateJWT(payload, JWT_TOKEN_EXPIRES_IN)
        const refresh_token = authHelper.generateJWT(payload, JWT_REFRESH_TOKEN_EXPIRES_IN)

        const user = await this.userRepository.getByTenantId(tenantId)

        const permissionService = PermissionFactory()
        const permissions = await permissionService.getPermissionsByUserGroupId(user?.user_group_id as string)

        const menusPermitidos = permissions.map(p => { return { nome: p.dominio } })

        return { token, refresh_token, regras: permissions, menusPermitidos }
    }

    async register(data: IRegister) {
        const { id_plano, cupom, tipo, partner, ...userData } = data

        const se_email_existe = await this.userRepository.getByEmail(data.email)
        if (se_email_existe) throw new Error('e-mail já cadastrado')

        userData.senha = authHelper.hashPasssword(data.senha)

        const tenantService = TenantFactory()
        const tenant = await tenantService.add()

        const planoContratadoService = PlanoContratadoFactory()
        await planoContratadoService.add(id_plano, tenant.id)

        const user: User = { id: crypto.randomUUID(), user_group_id: USER_GROUP_IDS.limited, tenantId: tenant.id, nivel: 'limited', ...userData }
        return this.userRepository.add(user)
    }
}