import { IPermissionRepository } from "./IPermissionRepository";
export declare class InMemoryPermissionRepository implements IPermissionRepository {
    private _permissions;
    getByUserGroupId(user_group_id: string): Promise<Permission[]>;
}
//# sourceMappingURL=inMemoryPermissionRepository.d.ts.map