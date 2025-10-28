import { AuthHelper } from "../../services/AuthService/AuthHelper";
import { USER_GROUP_IDS } from "../userGroupRepository/inMemoryUserGroupRepository";
const authHelper = new AuthHelper();
export class InMemoryUserRepository {
    _users = [
        {
            id: '2184b163-8f3c-484e-ba61-c25e2b21a28c',
            user_group_id: USER_GROUP_IDS.admin,
            email: 'rukeruke@gmail.com',
            senha: authHelper.hashPasssword('123'),
            tenantId: 'faefe160-0c9b-4634-95ab-007c9286bbba',
            nome: "Marcelo Brasil",
            telefone: "(28) 99969-9611",
            nivel: "admin",
            numero_documento: "101.170.617-27",
            oab: "76523476523-ES",
            oab_estado: "ES"
        }
    ];
    async getByEmail(email) {
        return this._users.find(u => u.email === email);
    }
    async getByTenantId(tenantId) {
        return this._users.find(u => u.tenantId === tenantId);
    }
    async getAll(tenant_id) {
        return this._users.filter(u => u.tenantId === tenant_id);
    }
    async getById(id) {
        return this._users.find(u => u.id === id);
    }
    async add(data) {
        this._users.push(data);
    }
    async update(id, data) {
        const user_index = this._users.findIndex(u => u.id === id);
        const user = this._users.find(u => u.id === id);
        this._users[user_index] = { ...user, ...data };
    }
    async delete(id) {
        this._users = this._users.filter(u => u.id !== id);
    }
}
