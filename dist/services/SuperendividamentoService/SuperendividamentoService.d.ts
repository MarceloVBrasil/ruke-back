import { Superendividamento } from "../../models/Superendividamento/Superendividamento";
import { ISuperendividamentoService } from "./ISuperendividamentoService";
import { ISuperendividamentoRepository } from "../../repositories/superendividamentoRepository/ISuperendividamentoRepository";
export declare class SuperendividamentoService implements ISuperendividamentoService {
    private superendividamentoRepository;
    constructor(superendividamentoRepository: ISuperendividamentoRepository);
    getAll(tenantId: string): Promise<Superendividamento[]>;
    getById(id: string): Promise<Superendividamento>;
    add(tenant_id: string): Promise<Superendividamento>;
    update(id: string, data: Partial<Superendividamento>): Promise<Superendividamento>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=SuperendividamentoService.d.ts.map