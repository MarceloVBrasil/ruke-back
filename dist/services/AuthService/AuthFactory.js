"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFactory = AuthFactory;
const UserService_1 = require("@services/UserService/UserService");
const inMemoryLoginCodigoRepository_1 = require("../../repositories/loginCodigoRepository/inMemoryLoginCodigoRepository");
const inMemoryUserRepository_1 = require("../../repositories/userRepository/inMemoryUserRepository");
const EmailService_1 = require("../EmailService/EmailService");
const AuthService_1 = require("./AuthService");
const LoginCodigoService_1 = require("@services/LoginCodigoService/LoginCodigoService");
let authService = null;
function AuthFactory() {
    if (!authService) {
        authService = new AuthService_1.AuthService(new UserService_1.UserService(new inMemoryUserRepository_1.InMemoryUserRepository()), new EmailService_1.EmailService(), new LoginCodigoService_1.LoginCodigoService(new inMemoryLoginCodigoRepository_1.InMemoryLoginCodigoRepository()));
    }
    return authService;
}
