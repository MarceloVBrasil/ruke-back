import { Processo } from "../../models/Processo/Processo";

export interface IProcessoService {
    getProcessos(tenant_id: string): Promise<Processo[]>
    getMovimentacoes(): Promise<Processo[]>
    salvar(data: Processo): Promise<Processo>
    filtrar(data: Partial<Processo>): Promise<Processo[]>
}