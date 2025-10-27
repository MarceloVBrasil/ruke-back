import { Request, Response, NextFunction } from "express"
import { PermissionFactory } from "../services/PermissionService/PermissionFactory"
import { UserFactory } from "../services/UserService/UserFactory"
import { server_error } from "../types/server_error"


export function authorizationMiddleware(dominio: string, permissoes: string[]) {
    return async (req: Request, res: Response, next: NextFunction) => {
        const tenantId: string = req.body.tenantId
        const userService = UserFactory()
        const permissionService = PermissionFactory()

        const user = await userService.getByTenantId(tenantId)
        if (!user) {
            const err: server_error = { errror: true, message: 'usuário não encontrado' }
            return res.status(404).json(err)
        }

        const userPermissions = await permissionService.getPermissionsByUserGroupId(user?.user_group_id as string)
        const userDomainPermissions = userPermissions.find(p => p.dominio === dominio)?.permissoes!

        const is_user_authorized = permissoes.every(p => userDomainPermissions.includes(p))

        if (is_user_authorized) {
            next()
        } else {
            const err: server_error = { errror: true, message: 'usuário não autorizado' }
            res.status(401).json(err)
        }
    }
}