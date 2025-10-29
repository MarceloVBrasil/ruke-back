import { LoginCodigo } from "@models/LoginCodigo/LoginCodigo"

export interface ILoginCodigo {
    getByEmail(email: string): Promise<LoginCodigo | undefined>
    getByCodigo(codigo: string): Promise<LoginCodigo | undefined>
    add(data: LoginCodigo): Promise<LoginCodigo>
    delete(id: string): Promise<string>
}