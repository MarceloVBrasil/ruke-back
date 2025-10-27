import { Produto } from "../../models/Produto/Produto";
import { IProdutoRepository } from "../../repositories/produtoRepository/IProdutoRepository";
import { IProdutoService } from "./IProdutoService";

export class ProdutoService implements IProdutoService {
    constructor(private produtoRepository: IProdutoRepository) { }

    async getAll(): Promise<Produto[]> {
        return this.produtoRepository.getAll()
    }

    async add(data: Omit<Produto, 'id'>): Promise<void> {
        const produto: Produto = { id: crypto.randomUUID(), ...data }
        return this.produtoRepository.add(produto)
    }

    async update(produto_id: string, data: Partial<Produto>): Promise<void> {
        return this.produtoRepository.update(produto_id, data)
    }

    async delete(produto_id: string): Promise<void> {
        return this.produtoRepository.delete(produto_id)
    }

}