import { Superendividamento } from "../../models/Superendividamento/Superendividamento";
export interface ISuperendividamentoRepository {
    getAll(tenant_id: string): Promise<Superendividamento[]>;
    getById(id: string): Promise<Superendividamento>;
    add(data: Superendividamento): Promise<Superendividamento>;
    update(id: string, data: Partial<Superendividamento>): Promise<Superendividamento>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=ISuperendividamentoRepository.d.ts.map