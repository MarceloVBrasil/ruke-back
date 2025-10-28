import { Produto } from "../../models/Produto/Produto";
import { IProdutoRepository } from "./IProdutoRepository";
export declare enum IN_MEMORY_PRODUTOS_IDS {
    BASICO = "8456d6a1-04c1-4277-b22d-e2c57cfaf2dd",
    STANDARD = "baae51db-4441-4faa-9f37-f5812a430f41",
    PREMIUM = "cb46e706-2e9f-4be2-bced-17a599e35364"
}
export declare class InMemoryProdutoRepository implements IProdutoRepository {
    private produtos;
    getAll(): Promise<Produto[]>;
    add(produto: Produto): Promise<void>;
    update(produto_id: string, data: Partial<Produto>): Promise<void>;
    delete(produto_id: string): Promise<void>;
}
//# sourceMappingURL=inMemoryProdutoRepository.d.ts.map