import { InMemoryLoginCodigoRepository } from "../../repositories/loginCodigoRepository/inMemoryLoginCodigoRepository";
import { InMemoryUserRepository } from "../../repositories/userRepository/inMemoryUserRepository";
import { EmailService } from "../EmailService/EmailService";
import { AuthService } from "./AuthService";
let authService = null;
export function AuthFactory() {
    if (!authService) {
        authService = new AuthService(new InMemoryUserRepository(), new EmailService(), new InMemoryLoginCodigoRepository());
    }
    return authService;
}
