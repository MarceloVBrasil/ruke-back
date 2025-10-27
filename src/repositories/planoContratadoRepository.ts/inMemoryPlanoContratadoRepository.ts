import { PlanoContratado } from "../../models/Plano/PlanoContratado";
import { IN_MEMORY_PLANO_IDS } from "../planoRepository/inMemoryPlanoRepository";
import { IN_MEMORY_TENANT_IDS } from "../tenantRepository/inMemoryTenantsRepository";
import { IPlanoContratadoRepository } from "./IPlanoContratadoRepository";

export class InMemoryPlanoContratadoRepository implements IPlanoContratadoRepository {
    private planos_contratados: PlanoContratado[] = [
        {
            id: "3c9a6ab5-20ed-4548-bc17-b5b46f9d9b9a",
            plano_id: IN_MEMORY_PLANO_IDS.BASICO,
            tenant_id: IN_MEMORY_TENANT_IDS.MARCELO_BRASIL,
            ativo: false
        },

        {
            id: "0da84839-ac97-4597-b49e-e00c96a6b643",
            plano_id: IN_MEMORY_PLANO_IDS.PREMIUM,
            tenant_id: IN_MEMORY_TENANT_IDS.MARCELO_BRASIL,
            ativo: true
        }
    ]

    async getAll(tenant_id: string): Promise<PlanoContratado[]> {
        return this.planos_contratados.filter(p => p.tenant_id === tenant_id)
    }

    async add(plano_id: string, tenant_id: string): Promise<PlanoContratado> {
        const plano_contratado: PlanoContratado = { id: crypto.randomUUID(), plano_id, tenant_id, ativo: true }
        this.planos_contratados.push(plano_contratado)

        return plano_contratado
    }

}