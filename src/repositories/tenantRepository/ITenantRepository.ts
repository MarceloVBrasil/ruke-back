import { Tenant } from "../../models/Tenant/Tenant";

export interface ITenantRepository {
    getAll(): Promise<Tenant[]>
    getById(tenantId: string): Promise<Tenant>
    add(tenant: Tenant): Promise<Tenant>
    update(tenantId: string, data: Partial<Tenant>): Promise<Tenant>
    delete(tenantId: string): Promise<void>
    cancelarTodasAssinaturas(): Promise<void>
    cancelarAssinaturaProduto(produto_id: string): Promise<void>
}