import { LoginCodigo } from "../../models/LoginCodigo/LoginCodigo";
import { ILoginCodigoRepository } from "./ILoginCodigoRepository";

export class InMemoryLoginCodigoRepository implements ILoginCodigoRepository {
    private login_codigo: LoginCodigo[] = []

    async getByEmail(email: string): Promise<LoginCodigo | undefined> {
        return this.login_codigo.find(l => l.email === email)
    }

    async getByCodigo(codigo: string): Promise<LoginCodigo | undefined> {
        return this.login_codigo.find(l => l.codigo === codigo)
    }

    async add(data: LoginCodigo): Promise<LoginCodigo> {
        this.login_codigo.push(data)
        return data
    }

    async delete(id: string): Promise<string> {
        this.login_codigo = this.login_codigo.filter(l => l.id !== id)
        return id
    }

}