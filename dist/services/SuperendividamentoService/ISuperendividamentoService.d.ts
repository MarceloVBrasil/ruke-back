import { Superendividamento } from "../../models/Superendividamento/Superendividamento";
export interface ISuperendividamentoService {
    getAll(tenantId: string): Promise<Superendividamento[]>;
    getById(id: string): Promise<Superendividamento>;
    add(tenant_id: string): Promise<Superendividamento>;
    update(id: string, data: Partial<Superendividamento>): Promise<Superendividamento>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=ISuperendividamentoService.d.ts.map