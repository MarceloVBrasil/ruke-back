import { InferType, object, string } from "yup"

const loginSchema = object().shape({
    email: string().email('email inválido').required('email é obrigatório'),
    senha: string().required('senha é obrigatória')
})

const loginComCodigoSchema = object().shape({
    email: string().email('email inválido').required('email é obrigatório'),
    codigo: string().required('código é obrigatória')
})

const solicitarCodigoSchema = object().shape({
    email: string().email('email inválido').required('email é obrigatório')
})

const refreshTokenSchema = object().shape({
    token: string().required("token é obrigatório"),
})

const registerSchema = object().shape({
    id_plano: string().required('id_plano é obrigatório'),
    nome: string().required('nome é obrigatório'),
    oab: string().required('oab é obrigatória'),
    oab_estado: string().required('oab_estado é obrigatória'),
    numero_documento: string().required().test(v => { return v.replaceAll('.', '').replaceAll('-', '').replaceAll('/', '').length === 11 || v.replaceAll('.', '').replaceAll('-', '').replaceAll('/', '').length === 14 }),
    email: string().email('email inválido').required('email é obrigatório'),
    telefone: string().required('telefone é obrigatório'),
    senha: string().required('senha é obrigatória'),
    tipo: string(),
    cupom: string(),
    partner: string()
})

export class AuthSchema {
    static login() {
        return loginSchema
    }

    static loginComCodigo() {
        return loginComCodigoSchema
    }

    static solicitarCodigo() {
        return solicitarCodigoSchema
    }

    static refreshToken() {
        return refreshTokenSchema
    }

    static register() {
        return registerSchema
    }
}

export type ILoginSchema = InferType<typeof loginSchema>
export type ILoginComCodigoSchema = InferType<typeof loginComCodigoSchema>
export type ISolicitarCodigoSchema = InferType<typeof solicitarCodigoSchema>
export type IRefreshToken = InferType<typeof refreshTokenSchema>
export type IRegister = InferType<typeof registerSchema>