import {
    ILoginComCodigoSchema,
    ILoginSchema,
    IRefreshToken,
    IRegister,
    ISolicitarCodigoSchema,
    ITrocarSenha
} from "../../controllers/AuthController/AuthSchema";

export interface IAuthService {
    login(data: ILoginSchema): Promise<any>
    loginComCodigo(data: ILoginComCodigoSchema): Promise<any>
    solicitarCodigoLogin(data: ISolicitarCodigoSchema): Promise<string>
    solicitarCodigoEsqueciMinhaSenha(data: ISolicitarCodigoSchema): Promise<void>
    trocarMinhaSenha(data: ITrocarSenha): Promise<void>
    refreshTokens(data: IRefreshToken): Promise<any>
    register(data: IRegister): Promise<void>
}