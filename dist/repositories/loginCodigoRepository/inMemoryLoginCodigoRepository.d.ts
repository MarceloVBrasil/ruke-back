import { LoginCodigo } from "../../models/LoginCodigo/LoginCodigo";
import { ILoginCodigoRepository } from "./ILoginCodigoRepository";
export declare class InMemoryLoginCodigoRepository implements ILoginCodigoRepository {
    private login_codigo;
    getByEmail(email: string): Promise<LoginCodigo | undefined>;
    add(data: LoginCodigo): Promise<LoginCodigo>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=inMemoryLoginCodigoRepository.d.ts.map