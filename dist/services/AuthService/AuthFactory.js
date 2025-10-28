"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthFactory = AuthFactory;
const inMemoryLoginCodigoRepository_1 = require("../../repositories/loginCodigoRepository/inMemoryLoginCodigoRepository");
const inMemoryUserRepository_1 = require("../../repositories/userRepository/inMemoryUserRepository");
const EmailService_1 = require("../EmailService/EmailService");
const AuthService_1 = require("./AuthService");
let authService = null;
function AuthFactory() {
    if (!authService) {
        authService = new AuthService_1.AuthService(new inMemoryUserRepository_1.InMemoryUserRepository(), new EmailService_1.EmailService(), new inMemoryLoginCodigoRepository_1.InMemoryLoginCodigoRepository());
    }
    return authService;
}
