import { ILoginComCodigoSchema, ILoginSchema, IRefreshToken, IRegister, ISolicitarCodigoSchema } from "../../controllers/AuthController/AuthSchema";
export interface IAuthService {
    login(data: ILoginSchema): Promise<any>;
    loginComCodigo(data: ILoginComCodigoSchema): Promise<any>;
    solicitarCodigo(data: ISolicitarCodigoSchema): Promise<string>;
    refreshTokens(data: IRefreshToken): Promise<any>;
    register(data: IRegister): Promise<void>;
}
//# sourceMappingURL=IAuthService.d.ts.map