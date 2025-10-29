import { User } from "../../models/User/User";
import { AuthHelper } from "../../services/AuthService/AuthHelper";
import { USER_GROUP_IDS } from "../userGroupRepository/inMemoryUserGroupRepository";
import { IUserRepository } from "./IUserRepository";

const authHelper = new AuthHelper()

export class InMemoryUserRepository implements IUserRepository {

    private _users: User[] = [
        {
            id: '2184b163-8f3c-484e-ba61-c25e2b21a28c',
            user_group_id: USER_GROUP_IDS.admin,
            email: 'marcelo.vital.brasil@gmail.com',
            senha: authHelper.hashPasssword('123'),
            tenantId: 'faefe160-0c9b-4634-95ab-007c9286bbba',
            nome: "Marcelo Brasil",
            telefone: "(28) 99969-9611",
            nivel: "admin",
            numero_documento: "101.170.617-27",
            oab: "76523476523-ES",
            oab_estado: "ES"
        }
    ]

    async getByEmail(email: string): Promise<User | undefined> {
        return this._users.find(u => u.email === email)
    }

    async getByTenantId(tenantId: string): Promise<User | undefined> {
        return this._users.find(u => u.tenantId === tenantId)
    }


    async getAll(tenant_id: string): Promise<User[]> {
        return this._users.filter(u => u.tenantId === tenant_id)
    }

    async getById(id: string): Promise<User> {
        return this._users.find(u => u.id === id)!
    }

    async add(data: User): Promise<void> {
        this._users.push(data)
    }

    async update(id: string, data: User): Promise<void> {
        const user_index = this._users.findIndex(u => u.id === id)
        const user = this._users.find(u => u.id === id)
        this._users[user_index] = { ...user, ...data }
    }

    async delete(id: string): Promise<void> {
        this._users = this._users.filter(u => u.id !== id)
    }
}