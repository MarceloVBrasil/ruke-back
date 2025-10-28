import { Produto } from "../../models/Produto/Produto";
import { IProdutoRepository } from "../../repositories/produtoRepository/IProdutoRepository";
import { IProdutoService } from "./IProdutoService";
export declare class ProdutoService implements IProdutoService {
    private produtoRepository;
    constructor(produtoRepository: IProdutoRepository);
    getAll(): Promise<Produto[]>;
    add(data: Omit<Produto, 'id'>): Promise<void>;
    update(produto_id: string, data: Partial<Produto>): Promise<void>;
    delete(produto_id: string): Promise<void>;
}
//# sourceMappingURL=ProdutoService.d.ts.map