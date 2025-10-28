import { Tenant } from "../../models/Tenant/Tenant";
import { ITenantRepository } from "../../repositories/tenantRepository/ITenantRepository";
import { ITenantService } from "./ITenantService";
export declare class TenantsService implements ITenantService {
    private tenantsRepository;
    constructor(tenantsRepository: ITenantRepository);
    getAll(): Promise<Tenant[]>;
    getById(tenantId: string): Promise<Tenant>;
    add(): Promise<Tenant>;
    update(tenantId: string, data: Partial<Tenant>): Promise<Tenant>;
    delete(tenantId: string): Promise<void>;
    cancelarTodasAssinaturas(): Promise<void>;
    cancelarAssinaturaProduto(produto_id: string): Promise<void>;
}
//# sourceMappingURL=TenantService.d.ts.map