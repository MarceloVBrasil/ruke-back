import { InMemoryTenantsRepository } from "../../repositories/tenantRepository/inMemoryTenantsRepository";
import { TenantsService } from "./TenantService";

let tenantService: TenantsService | null = null

export function TenantFactory() {
    if (!tenantService) {
        tenantService = new TenantsService(new InMemoryTenantsRepository())
    }

    return tenantService
}