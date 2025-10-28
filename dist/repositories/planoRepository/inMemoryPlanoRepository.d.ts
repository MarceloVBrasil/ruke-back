import { Plano } from "../../models/Plano/Plano";
import { IPlanoRepository } from "./IPlanoRepository";
export declare enum IN_MEMORY_PLANO_IDS {
    BASICO = "489cf794-9aa4-474e-a51c-39f15de00d49",
    STANDARD = "f90a593b-75b9-4d4b-a1e8-5f37432e1557",
    PREMIUM = "49b07b12-705c-444c-8a60-3293049196d1"
}
export declare class InMemoryPlanoRepository implements IPlanoRepository {
    private planos;
    getAllByProdutoId(produto_id: string): Promise<Plano[]>;
    getById(id: string): Promise<Plano>;
    add(plano: Plano): Promise<void>;
    update(id: string, data: Partial<Plano>): Promise<void>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=inMemoryPlanoRepository.d.ts.map