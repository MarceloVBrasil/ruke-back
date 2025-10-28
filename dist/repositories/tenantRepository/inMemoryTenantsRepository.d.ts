import { Tenant } from "../../models/Tenant/Tenant";
import { ITenantRepository } from "./ITenantRepository";
export declare enum IN_MEMORY_TENANT_IDS {
    MARCELO_BRASIL = "faefe160-0c9b-4634-95ab-007c9286bbba"
}
export declare class InMemoryTenantsRepository implements ITenantRepository {
    private _tenants;
    getAll(): Promise<Tenant[]>;
    getById(tenantId: string): Promise<Tenant>;
    add(tenant: Tenant): Promise<Tenant>;
    update(tenantId: string, data: Partial<Tenant>): Promise<Tenant>;
    delete(tenantId: string): Promise<void>;
    cancelarTodasAssinaturas(): Promise<void>;
    cancelarAssinaturaProduto(produto_id: string): Promise<void>;
}
//# sourceMappingURL=inMemoryTenantsRepository.d.ts.map