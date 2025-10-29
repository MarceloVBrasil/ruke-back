"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginCodigoService = void 0;
class LoginCodigoService {
    constructor(loginCodigoRepository) {
        this.loginCodigoRepository = loginCodigoRepository;
    }
    async getByEmail(email) {
        return this.loginCodigoRepository.getByEmail(email);
    }
    async getByCodigo(codigo) {
        return this.loginCodigoRepository.getByCodigo(codigo);
    }
    async add(data) {
        return this.loginCodigoRepository.add(data);
    }
    async delete(id) {
        return this.loginCodigoRepository.delete(id);
    }
}
exports.LoginCodigoService = LoginCodigoService;
