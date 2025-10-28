import { Superendividamento } from "../../models/Superendividamento/Superendividamento";
import { ISuperendividamentoRepository } from "./ISuperendividamentoRepository";
export declare class InMemorySuperendividamentoRepository implements ISuperendividamentoRepository {
    private superendividamento;
    getAll(tenant_id: string): Promise<Superendividamento[]>;
    getById(id: string): Promise<Superendividamento>;
    add(data: Superendividamento): Promise<Superendividamento>;
    update(id: string, data: Partial<Superendividamento>): Promise<Superendividamento>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=inMemorySuperendividamentoRepository.d.ts.map