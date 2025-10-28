"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const inMemoryUserGroupRepository_1 = require("../../repositories/userGroupRepository/inMemoryUserGroupRepository");
class UserService {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async getAll(tenant_id) {
        return this.userRepository.getAll(tenant_id);
    }
    async getById(id) {
        return this.userRepository.getById(id);
    }
    async getByEmail(email) {
        return this.userRepository.getByEmail(email);
    }
    async getByTenantId(tenantId) {
        return this.userRepository.getByTenantId(tenantId);
    }
    async add(tenantId, data) {
        const user = {
            id: crypto.randomUUID(),
            nome: data.nome || "Thomas Brasil",
            email: data.email || "",
            senha: data.senha || "123",
            telefone: data.telefone || "(28) 99969-9611",
            nivel: data.nivel || "limited",
            numero_documento: data.numero_documento || "",
            oab: data.oab || "743765746356-ES",
            oab_estado: data.oab_estado || "ES",
            user_group_id: data.user_group_id || inMemoryUserGroupRepository_1.USER_GROUP_IDS.limited,
            tenantId
        };
        return this.userRepository.add(user);
    }
    async update(id, data) {
        return this.userRepository.update(id, data);
    }
    async delete(id) {
        return this.userRepository.delete(id);
    }
}
exports.UserService = UserService;
