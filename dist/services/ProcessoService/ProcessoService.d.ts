import { Processo } from "../../models/Processo/Processo";
import { IProcessoRepository } from "../../repositories/processoRepository/IProcessoRepository";
import { IProcessoService } from "./IProcessoService";
export declare class ProcessoService implements IProcessoService {
    private processoRepository;
    constructor(processoRepository: IProcessoRepository);
    getProcessos(tenant_id: string): Promise<Processo[]>;
    getMovimentacoes(): Promise<Processo[]>;
    salvar(data: Processo): Promise<Processo>;
    filtrar(data: Partial<Processo>): Promise<Processo[]>;
}
//# sourceMappingURL=ProcessoService.d.ts.map