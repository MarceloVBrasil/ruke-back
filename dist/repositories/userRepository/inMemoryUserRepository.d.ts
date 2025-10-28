import { User } from "../../models/User/User";
import { IUserRepository } from "./IUserRepository";
export declare class InMemoryUserRepository implements IUserRepository {
    private _users;
    getByEmail(email: string): Promise<User | undefined>;
    getByTenantId(tenantId: string): Promise<User | undefined>;
    getAll(tenant_id: string): Promise<User[]>;
    getById(id: string): Promise<User>;
    add(data: User): Promise<void>;
    update(id: string, data: User): Promise<void>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=inMemoryUserRepository.d.ts.map