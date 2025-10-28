import { Trabalhista } from "../../models/Trabalhista/Trabalhista";
import { ITrabalhistaRepository } from "../../repositories/trabalhistaRepository/ITrabalhistaRepository";
import { ITrabalhistaService } from "./ITrabalhistaService";
export declare class TrabalhistaService implements ITrabalhistaService {
    private trabalhistaRepository;
    constructor(trabalhistaRepository: ITrabalhistaRepository);
    getAll(tenant_id: string): Promise<Trabalhista[]>;
    getById(id: string): Promise<Trabalhista>;
    calcularTotalCausa(id: string): Promise<{
        resultado: number;
    }>;
    add(tenant_id: string): Promise<Trabalhista>;
    update(id: string, data: Partial<Trabalhista>): Promise<Trabalhista>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=TrabalhistaService.d.ts.map