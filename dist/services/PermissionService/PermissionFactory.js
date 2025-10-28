"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PermissionFactory = PermissionFactory;
const inMemoryPermissionRepository_1 = require("../../repositories/permissionRepository/inMemoryPermissionRepository");
const PermissionService_1 = require("./PermissionService");
let permissionService = null;
function PermissionFactory() {
    if (!permissionService) {
        permissionService = new PermissionService_1.PermissionService(new inMemoryPermissionRepository_1.InMemoryPermissionRepository());
    }
    return permissionService;
}
