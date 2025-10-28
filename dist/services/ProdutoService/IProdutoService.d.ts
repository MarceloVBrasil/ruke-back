import { Produto } from "../../models/Produto/Produto";
export interface IProdutoService {
    getAll(): Promise<Produto[]>;
    add(produto: Omit<Produto, 'id'>): Promise<void>;
    update(produto_id: string, data: Partial<Produto>): Promise<void>;
    delete(produto_id: string): Promise<void>;
}
//# sourceMappingURL=IProdutoService.d.ts.map