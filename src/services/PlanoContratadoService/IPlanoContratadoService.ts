import { PlanoContratado } from "../../models/Plano/PlanoContratado";

export interface IPlanoContratadoGetAll {
    produtos_inativos: { produto: { nome: string } }[]
    produtos_ativos: { produto: { nome: string } }[]
}


export interface IPlanoContratadoService {
    getAll(tenant_id: string): Promise<IPlanoContratadoGetAll>
    add(plano_id: string, tenant_id: string): Promise<PlanoContratado>
}