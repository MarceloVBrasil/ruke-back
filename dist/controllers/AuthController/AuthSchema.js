"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSchema = void 0;
const yup_1 = require("yup");
const loginSchema = (0, yup_1.object)().shape({
    email: (0, yup_1.string)().email('email inválido').required('email é obrigatório'),
    senha: (0, yup_1.string)().required('senha é obrigatória')
});
const loginComCodigoSchema = (0, yup_1.object)().shape({
    email: (0, yup_1.string)().email('email inválido').required('email é obrigatório'),
    codigo: (0, yup_1.string)().required('código é obrigatória')
});
const solicitarCodigoSchema = (0, yup_1.object)().shape({
    email: (0, yup_1.string)().email('email inválido').required('email é obrigatório')
});
const refreshTokenSchema = (0, yup_1.object)().shape({
    token: (0, yup_1.string)().required("token é obrigatório"),
});
const trocarSenhaSchema = (0, yup_1.object)().shape({
    senha: (0, yup_1.string)().required('senha é obrigatória'),
    codigo: (0, yup_1.string)().required('código é obrigatória')
});
const registerSchema = (0, yup_1.object)().shape({
    id_plano: (0, yup_1.string)().required('id_plano é obrigatório'),
    nome: (0, yup_1.string)().required('nome é obrigatório'),
    oab: (0, yup_1.string)().required('oab é obrigatória'),
    oab_estado: (0, yup_1.string)().required('oab_estado é obrigatória'),
    numero_documento: (0, yup_1.string)().required().test(v => { return v.replaceAll('.', '').replaceAll('-', '').replaceAll('/', '').length === 11 || v.replaceAll('.', '').replaceAll('-', '').replaceAll('/', '').length === 14; }),
    email: (0, yup_1.string)().email('email inválido').required('email é obrigatório'),
    telefone: (0, yup_1.string)().required('telefone é obrigatório'),
    senha: (0, yup_1.string)().required('senha é obrigatória'),
    tipo: (0, yup_1.string)(),
    cupom: (0, yup_1.string)(),
    partner: (0, yup_1.string)()
});
class AuthSchema {
    static login() {
        return loginSchema;
    }
    static loginComCodigo() {
        return loginComCodigoSchema;
    }
    static solicitarCodigo() {
        return solicitarCodigoSchema;
    }
    static refreshToken() {
        return refreshTokenSchema;
    }
    static register() {
        return registerSchema;
    }
    static trocarSenha() {
        return trocarSenhaSchema;
    }
}
exports.AuthSchema = AuthSchema;
