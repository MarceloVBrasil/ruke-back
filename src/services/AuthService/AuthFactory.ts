import { UserService } from "@services/UserService/UserService";
import { InMemoryLoginCodigoRepository } from "../../repositories/loginCodigoRepository/inMemoryLoginCodigoRepository";
import { InMemoryTenantsRepository } from "../../repositories/tenantRepository/inMemoryTenantsRepository";
import { InMemoryUserRepository } from "../../repositories/userRepository/inMemoryUserRepository";
import { EmailService } from "../EmailService/EmailService";
import { AuthService } from "./AuthService";
import { LoginCodigoService } from "@services/LoginCodigoService/LoginCodigoService";

let authService: AuthService | null = null

export function AuthFactory() {
    if (!authService) {
        authService = new AuthService(
            new UserService(new InMemoryUserRepository()),
            new EmailService(),
            new LoginCodigoService(new InMemoryLoginCodigoRepository())
        )
    }

    return authService
}