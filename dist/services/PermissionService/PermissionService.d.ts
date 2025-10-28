import { IPermissionRepository } from "../../repositories/permissionRepository/IPermissionRepository";
export declare class PermissionService {
    private permissionRepository;
    constructor(permissionRepository: IPermissionRepository);
    getPermissionsByUserGroupId(user_group_id: string): Promise<any>;
}
//# sourceMappingURL=PermissionService.d.ts.map