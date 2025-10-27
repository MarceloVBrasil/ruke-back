import { User } from "../../models/User/User";
import { USER_GROUP_IDS } from "../../repositories/userGroupRepository/inMemoryUserGroupRepository";
import { IUserRepository } from "../../repositories/userRepository/IUserRepository";
import { IUserService } from "./IUserService";

export class UserService implements IUserService {
    constructor(private userRepository: IUserRepository) { }

    async getAll(tenant_id: string): Promise<User[]> {
        return this.userRepository.getAll(tenant_id)
    }

    async getById(id: string): Promise<User> {
        return this.userRepository.getById(id)
    }

    async getByEmail(email: string): Promise<User | undefined> {
        return this.userRepository.getByEmail(email)
    }

    async getByTenantId(tenantId: string): Promise<User | undefined> {
        return this.userRepository.getByTenantId(tenantId)
    }

    async add(tenantId: string, data: Partial<Omit<User, "id">>): Promise<void> {
        const user: User = {
            id: crypto.randomUUID(),
            nome: data.nome || "Thomas Brasil",
            email: data.email || "",
            senha: data.senha || "123",
            telefone: data.telefone || "(28) 99969-9611",
            nivel: data.nivel || "limited",
            numero_documento: data.numero_documento || "",
            oab: data.oab || "743765746356-ES",
            oab_estado: data.oab_estado || "ES",
            user_group_id: data.user_group_id || USER_GROUP_IDS.limited,
            tenantId
        }

        return this.userRepository.add(user)
    }

    async update(id: string, data: User): Promise<void> {
        return this.userRepository.update(id, data)
    }

    async delete(id: string): Promise<void> {
        return this.userRepository.delete(id)
    }
}