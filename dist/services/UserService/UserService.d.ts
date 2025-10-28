import { User } from "../../models/User/User";
import { IUserRepository } from "../../repositories/userRepository/IUserRepository";
import { IUserService } from "./IUserService";
export declare class UserService implements IUserService {
    private userRepository;
    constructor(userRepository: IUserRepository);
    getAll(tenant_id: string): Promise<User[]>;
    getById(id: string): Promise<User>;
    getByEmail(email: string): Promise<User | undefined>;
    getByTenantId(tenantId: string): Promise<User | undefined>;
    add(tenantId: string, data: Partial<Omit<User, "id">>): Promise<void>;
    update(id: string, data: User): Promise<void>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=UserService.d.ts.map