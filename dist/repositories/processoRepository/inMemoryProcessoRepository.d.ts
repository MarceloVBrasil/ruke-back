import { Processo } from "../../models/Processo/Processo";
import { IProcessoRepository } from "./IProcessoRepository";
export declare class InMemoryProcessoRepository implements IProcessoRepository {
    private processos;
    getProcessos(tenant_id: string): Promise<Processo[]>;
    getMovimentacoes(): Promise<Processo[]>;
    salvar(data: Processo): Promise<Processo>;
    filtrar(data: Partial<Processo>): Promise<Processo[]>;
}
//# sourceMappingURL=inMemoryProcessoRepository.d.ts.map