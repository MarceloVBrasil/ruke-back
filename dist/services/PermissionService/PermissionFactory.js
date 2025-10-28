import { InMemoryPermissionRepository } from "../../repositories/permissionRepository/inMemoryPermissionRepository";
import { PermissionService } from "./PermissionService";
let permissionService = null;
export function PermissionFactory() {
    if (!permissionService) {
        permissionService = new PermissionService(new InMemoryPermissionRepository());
    }
    return permissionService;
}
