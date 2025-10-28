import { Trabalhista } from "../../models/Trabalhista/Trabalhista";
import { ITrabalhistaRepository } from "./ITrabalhistaRepository";
export declare class InMemoryTrabalhistaRepository implements ITrabalhistaRepository {
    private trabalhista;
    getAll(tenant_id: string): Promise<Trabalhista[]>;
    getById(id: string): Promise<Trabalhista>;
    add(data: Trabalhista): Promise<Trabalhista>;
    update(id: string, data: Partial<Trabalhista>): Promise<Trabalhista>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=inMemoryTrabalhistaRepository.d.ts.map