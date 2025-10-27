import { Processo } from "../../models/Processo/Processo";
import { IProcessoRepository } from "../../repositories/processoRepository/IProcessoRepository";
import { IProcessoService } from "./IProcessoService";

export class ProcessoService implements IProcessoService {
    constructor(private processoRepository: IProcessoRepository) { }

    async getProcessos(tenant_id: string): Promise<Processo[]> {
        return await this.processoRepository.getProcessos(tenant_id)
    }

    async getMovimentacoes(): Promise<Processo[]> {
        return this.processoRepository.getMovimentacoes()
    }

    async salvar(data: Processo): Promise<Processo> {
        data.id = crypto.randomUUID()
        return this.processoRepository.salvar(data)
    }

    async filtrar(data: Partial<Processo>): Promise<Processo[]> {
        return this.processoRepository.filtrar(data)
    }
}