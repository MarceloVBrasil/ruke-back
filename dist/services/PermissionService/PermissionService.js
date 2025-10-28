"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionService = void 0;
class PermissionService {
    constructor(permissionRepository) {
        this.permissionRepository = permissionRepository;
    }
    async getPermissionsByUserGroupId(user_group_id) {
        const data = await this.permissionRepository.getByUserGroupId(user_group_id);
        const permissions = data.map(p => { return { dominio: p.dominio, permissoes: p.permissoes }; });
        return permissions;
    }
}
exports.PermissionService = PermissionService;
