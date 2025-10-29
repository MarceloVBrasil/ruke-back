import { LoginCodigo } from "@models/LoginCodigo/LoginCodigo";
import { ILoginCodigo } from "./ILoginCodigo";
import { ILoginCodigoRepository } from "@repositories/loginCodigoRepository/ILoginCodigoRepository";

export class LoginCodigoService implements ILoginCodigo {
    constructor(private loginCodigoRepository: ILoginCodigoRepository) { }

    async getByEmail(email: string): Promise<LoginCodigo | undefined> {
        return this.loginCodigoRepository.getByEmail(email)
    }

    async getByCodigo(codigo: string): Promise<LoginCodigo | undefined> {
        return this.loginCodigoRepository.getByCodigo(codigo)
    }

    async add(data: LoginCodigo): Promise<LoginCodigo> {
        return this.loginCodigoRepository.add(data)
    }

    async delete(id: string): Promise<string> {
        return this.loginCodigoRepository.delete(id)
    }

}