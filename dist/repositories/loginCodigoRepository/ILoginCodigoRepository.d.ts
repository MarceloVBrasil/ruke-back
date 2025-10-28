import { LoginCodigo } from "../../models/LoginCodigo/LoginCodigo";
export interface ILoginCodigoRepository {
    getByEmail(email: string): Promise<LoginCodigo | undefined>;
    add(data: LoginCodigo): Promise<LoginCodigo>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=ILoginCodigoRepository.d.ts.map