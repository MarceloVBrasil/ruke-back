import { PlanoContratado } from "../../models/Plano/PlanoContratado";
import { IPlanoContratadoRepository } from "../../repositories/planoContratadoRepository.ts/IPlanoContratadoRepository";
import { PlanoFactory } from "../PlanoService/PlanoFactory";
import { IPlanoContratadoGetAll, IPlanoContratadoService } from "./IPlanoContratadoService";

export class PlanoContratadoService implements IPlanoContratadoService {
    constructor(
        private planoContratadoRepository: IPlanoContratadoRepository) { }
    async getAll(tenant_id: string): Promise<IPlanoContratadoGetAll> {
        const planos = await this.planoContratadoRepository.getAll(tenant_id)
        const planos_inativos = planos.filter(plano => !plano.ativo)
        const planos_ativos = planos.filter(plano => plano.ativo)

        const planoService = PlanoFactory()
        const produtos_ativos = []
        const produtos_inativos = []

        for (let plano_contratado of planos_ativos) {
            const produto_ativo = await planoService.getById(plano_contratado.plano_id)
            produtos_ativos.push({ produto: { nome: produto_ativo.nome } })
        }

        for (let plano_contratado of planos_inativos) {
            const produto_inativo = await planoService.getById(plano_contratado.plano_id)
            produtos_inativos.push({ produto: { nome: produto_inativo.nome } })
        }

        return { produtos_ativos, produtos_inativos }
    }

    async add(plano_id: string, tenant_id: string): Promise<PlanoContratado> {
        return await this.planoContratadoRepository.add(plano_id, tenant_id)
    }
}