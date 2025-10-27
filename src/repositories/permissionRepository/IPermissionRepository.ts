import { Permission } from "../../models/Permission/Permission";

export interface IPermissionRepository {
    getByUserGroupId(user_group_id: string): Promise<Permission[]>
}