import { Plano } from "../../models/Plano/Plano";
import { IPlanoRepository } from "../../repositories/planoRepository/IPlanoRepository";
import { IPlanoService } from "./IPlanoService";
export declare class PlanoService implements IPlanoService {
    private planoRepository;
    constructor(planoRepository: IPlanoRepository);
    getAllByProdutoId(produto_id: string): Promise<Plano[]>;
    getById(id: string): Promise<Plano>;
    add(data: Omit<Plano, "id">): Promise<void>;
    update(id: string, plano: Partial<Plano>): Promise<void>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=PlanoService.d.ts.map