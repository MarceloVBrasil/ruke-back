import { User } from "../../models/User/User";
export interface IUserService {
    getAll(tenant_id: string): Promise<User[]>;
    getByEmail(email: string): Promise<User | undefined>;
    getByTenantId(tenantId: string): Promise<User | undefined>;
    getById(id: string): Promise<User>;
    add(tenantId: string, data: Partial<Omit<User, 'id'>>): Promise<void>;
    update(id: string, data: Partial<User>): Promise<void>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=IUserService.d.ts.map