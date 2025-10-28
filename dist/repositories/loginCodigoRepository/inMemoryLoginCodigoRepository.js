"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryLoginCodigoRepository = void 0;
class InMemoryLoginCodigoRepository {
    constructor() {
        this.login_codigo = [];
    }
    async getByEmail(email) {
        return this.login_codigo.find(l => l.email === email);
    }
    async add(data) {
        this.login_codigo.push(data);
        return data;
    }
    async delete(id) {
        this.login_codigo = this.login_codigo.filter(l => l.id !== id);
        return id;
    }
}
exports.InMemoryLoginCodigoRepository = InMemoryLoginCodigoRepository;
