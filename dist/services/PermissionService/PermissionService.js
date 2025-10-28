export class PermissionService {
    permissionRepository;
    constructor(permissionRepository) {
        this.permissionRepository = permissionRepository;
    }
    async getPermissionsByUserGroupId(user_group_id) {
        const data = await this.permissionRepository.getByUserGroupId(user_group_id);
        const permissions = data.map(p => { return { dominio: p.dominio, permissoes: p.permissoes }; });
        return permissions;
    }
}
