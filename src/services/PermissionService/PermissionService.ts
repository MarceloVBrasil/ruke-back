import { IPermissionRepository } from "../../repositories/permissionRepository/IPermissionRepository";

export class PermissionService {
    constructor(private permissionRepository: IPermissionRepository) { }

    async getPermissionsByUserGroupId(user_group_id: string) {
        const data = await this.permissionRepository.getByUserGroupId(user_group_id)
        const permissions = data.map(p => { return { dominio: p.dominio, permissoes: p.permissoes } })
        return permissions
    }
}