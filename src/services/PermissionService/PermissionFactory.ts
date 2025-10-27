import { InMemoryPermissionRepository } from "../../repositories/permissionRepository/inMemoryPermissionRepository"
import { PermissionService } from "./PermissionService"

let permissionService: PermissionService | null = null

export function PermissionFactory() {
    if (!permissionService) {
        permissionService = new PermissionService(new InMemoryPermissionRepository())
    }

    return permissionService
}