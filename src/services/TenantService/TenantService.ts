import { Tenant } from "../../models/Tenant/Tenant";
import { ITenantRepository } from "../../repositories/tenantRepository/ITenantRepository";
import { ITenantService } from "./ITenantService";

export class TenantsService implements ITenantService {
    constructor(private tenantsRepository: ITenantRepository) { }

    async getAll(): Promise<Tenant[]> {
        return this.tenantsRepository.getAll()
    }

    async getById(tenantId: string): Promise<Tenant> {
        return this.tenantsRepository.getById(tenantId)
    }

    async add(): Promise<Tenant> {
        const tenant: Tenant = { id: crypto.randomUUID() } as Tenant
        return this.tenantsRepository.add(tenant)
    }

    async update(tenantId: string, data: Partial<Tenant>): Promise<Tenant> {
        return this.tenantsRepository.update(tenantId, data)
    }

    async delete(tenantId: string): Promise<void> {
        return this.tenantsRepository.delete(tenantId)
    }

    async cancelarTodasAssinaturas(): Promise<void> {
        return this.tenantsRepository.cancelarTodasAssinaturas()
    }

    async cancelarAssinaturaProduto(produto_id: string): Promise<void> {
        return this.tenantsRepository.cancelarAssinaturaProduto(produto_id)
    }

}