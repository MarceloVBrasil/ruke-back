"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantFactory = TenantFactory;
const inMemoryTenantsRepository_1 = require("../../repositories/tenantRepository/inMemoryTenantsRepository");
const TenantService_1 = require("./TenantService");
let tenantService = null;
function TenantFactory() {
    if (!tenantService) {
        tenantService = new TenantService_1.TenantsService(new inMemoryTenantsRepository_1.InMemoryTenantsRepository());
    }
    return tenantService;
}
