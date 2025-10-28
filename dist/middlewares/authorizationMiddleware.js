"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorizationMiddleware = authorizationMiddleware;
const PermissionFactory_1 = require("../services/PermissionService/PermissionFactory");
const UserFactory_1 = require("../services/UserService/UserFactory");
function authorizationMiddleware(dominio, permissoes) {
    return async (req, res, next) => {
        const tenantId = req.body.tenantId;
        const userService = (0, UserFactory_1.UserFactory)();
        const permissionService = (0, PermissionFactory_1.PermissionFactory)();
        const user = await userService.getByTenantId(tenantId);
        if (!user) {
            const err = { errror: true, message: 'usuário não encontrado' };
            return res.status(404).json(err);
        }
        const userPermissions = await permissionService.getPermissionsByUserGroupId(user?.user_group_id);
        const userDomainPermissions = userPermissions.find(p => p.dominio === dominio)?.permissoes;
        const is_user_authorized = permissoes.every(p => userDomainPermissions.includes(p));
        if (is_user_authorized) {
            next();
        }
        else {
            const err = { errror: true, message: 'usuário não autorizado' };
            res.status(401).json(err);
        }
    };
}
