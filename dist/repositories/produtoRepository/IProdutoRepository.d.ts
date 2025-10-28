import { Produto } from "../../models/Produto/Produto";
export interface IProdutoRepository {
    getAll(): Promise<Produto[]>;
    add(produto: Produto): Promise<void>;
    update(produto_id: string, data: Partial<Produto>): Promise<void>;
    delete(produto_id: string): Promise<void>;
}
//# sourceMappingURL=IProdutoRepository.d.ts.map