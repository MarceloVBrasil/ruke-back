import { User } from "../../models/User/User";
export interface IUserRepository {
    getAll(tenant_id: string): Promise<User[]>;
    getByEmail(email: string): Promise<User | undefined>;
    getByTenantId(tenantId: string): Promise<User | undefined>;
    getById(id: string): Promise<User>;
    add(data: User): Promise<void>;
    update(id: string, data: User): Promise<void>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=IUserRepository.d.ts.map