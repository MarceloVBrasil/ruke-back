import { InferType } from "yup";
declare const loginSchema: import("yup").ObjectSchema<{
    email: string;
    senha: string;
}, import("yup").AnyObject, {
    email: undefined;
    senha: undefined;
}, "">;
declare const loginComCodigoSchema: import("yup").ObjectSchema<{
    email: string;
    codigo: string;
}, import("yup").AnyObject, {
    email: undefined;
    codigo: undefined;
}, "">;
declare const solicitarCodigoSchema: import("yup").ObjectSchema<{
    email: string;
}, import("yup").AnyObject, {
    email: undefined;
}, "">;
declare const refreshTokenSchema: import("yup").ObjectSchema<{
    token: string;
}, import("yup").AnyObject, {
    token: undefined;
}, "">;
declare const registerSchema: import("yup").ObjectSchema<{
    id_plano: string;
    nome: string;
    oab: string;
    oab_estado: string;
    numero_documento: string;
    email: string;
    telefone: string;
    senha: string;
    tipo: string | undefined;
    cupom: string | undefined;
    partner: string | undefined;
}, import("yup").AnyObject, {
    id_plano: undefined;
    nome: undefined;
    oab: undefined;
    oab_estado: undefined;
    numero_documento: undefined;
    email: undefined;
    telefone: undefined;
    senha: undefined;
    tipo: undefined;
    cupom: undefined;
    partner: undefined;
}, "">;
export declare class AuthSchema {
    static login(): import("yup").ObjectSchema<{
        email: string;
        senha: string;
    }, import("yup").AnyObject, {
        email: undefined;
        senha: undefined;
    }, "">;
    static loginComCodigo(): import("yup").ObjectSchema<{
        email: string;
        codigo: string;
    }, import("yup").AnyObject, {
        email: undefined;
        codigo: undefined;
    }, "">;
    static solicitarCodigo(): import("yup").ObjectSchema<{
        email: string;
    }, import("yup").AnyObject, {
        email: undefined;
    }, "">;
    static refreshToken(): import("yup").ObjectSchema<{
        token: string;
    }, import("yup").AnyObject, {
        token: undefined;
    }, "">;
    static register(): import("yup").ObjectSchema<{
        id_plano: string;
        nome: string;
        oab: string;
        oab_estado: string;
        numero_documento: string;
        email: string;
        telefone: string;
        senha: string;
        tipo: string | undefined;
        cupom: string | undefined;
        partner: string | undefined;
    }, import("yup").AnyObject, {
        id_plano: undefined;
        nome: undefined;
        oab: undefined;
        oab_estado: undefined;
        numero_documento: undefined;
        email: undefined;
        telefone: undefined;
        senha: undefined;
        tipo: undefined;
        cupom: undefined;
        partner: undefined;
    }, "">;
}
export type ILoginSchema = InferType<typeof loginSchema>;
export type ILoginComCodigoSchema = InferType<typeof loginComCodigoSchema>;
export type ISolicitarCodigoSchema = InferType<typeof solicitarCodigoSchema>;
export type IRefreshToken = InferType<typeof refreshTokenSchema>;
export type IRegister = InferType<typeof registerSchema>;
export {};
//# sourceMappingURL=AuthSchema.d.ts.map