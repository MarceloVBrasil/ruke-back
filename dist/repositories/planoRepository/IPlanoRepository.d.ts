import { Plano } from "../../models/Plano/Plano";
export interface IPlanoRepository {
    getAllByProdutoId(produto_id: string): Promise<Plano[]>;
    getById(id: string): Promise<Plano>;
    add(plano: Plano): Promise<void>;
    update(id: string, data: Partial<Plano>): Promise<void>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=IPlanoRepository.d.ts.map