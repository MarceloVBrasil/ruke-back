import { Trabalhista } from "../../models/Trabalhista/Trabalhista";
export interface ITrabalhistaService {
    getAll(tenant_id: string): Promise<Trabalhista[]>;
    getById(id: string): Promise<Trabalhista>;
    calcularTotalCausa(id: string): Promise<{
        resultado: number;
    }>;
    add(tenant_id: string): Promise<Trabalhista>;
    update(id: string, data: Partial<Trabalhista>): Promise<Trabalhista>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=ITrabalhistaService.d.ts.map