import { PlanoContratado } from "../../models/Plano/PlanoContratado";

export interface IPlanoContratadoRepository {
    getAll(tenant_id: string): Promise<PlanoContratado[]>
    add(plano_id: string, tenant_id: string): Promise<PlanoContratado>
}