import { ILoginComCodigoSchema, ILoginSchema, IRefreshToken, IRegister, ISolicitarCodigoSchema } from "../../controllers/AuthController/AuthSchema";
import { IAuthService } from "./IAuthService";
import { EmailService } from "../EmailService/EmailService";
import { ILoginCodigoRepository } from "../../repositories/loginCodigoRepository/ILoginCodigoRepository";
import { IUserRepository } from "../../repositories/userRepository/IUserRepository";
export declare class AuthService implements IAuthService {
    private userRepository;
    private emailService;
    private loginCodigo;
    constructor(userRepository: IUserRepository, emailService: EmailService, loginCodigo: ILoginCodigoRepository);
    login(data: ILoginSchema): Promise<{
        token: any;
        refreshToken: any;
        regras: any;
        menusPermitidos: any;
        quantidade_usuarios_agenda: any;
        cadastroPendente: boolean;
        tenantId: any;
    }>;
    loginComCodigo(data: ILoginComCodigoSchema): Promise<{
        token: any;
        refreshToken: any;
        regras: any;
        menusPermitidos: any;
        quantidade_usuarios_agenda: any;
        cadastroPendente: boolean;
        tenantId: any;
    }>;
    solicitarCodigo(data: ISolicitarCodigoSchema): Promise<string>;
    refreshTokens(data: IRefreshToken): Promise<{
        token: any;
        refresh_token: any;
        regras: any;
        menusPermitidos: any;
    }>;
    register(data: IRegister): Promise<any>;
}
//# sourceMappingURL=AuthService.d.ts.map