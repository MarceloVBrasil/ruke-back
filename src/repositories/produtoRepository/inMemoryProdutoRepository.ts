import { Produto } from "../../models/Produto/Produto";
import { IProdutoRepository } from "./IProdutoRepository";

export enum IN_MEMORY_PRODUTOS_IDS {
    BASICO = '8456d6a1-04c1-4277-b22d-e2c57cfaf2dd',
    STANDARD = 'baae51db-4441-4faa-9f37-f5812a430f41',
    PREMIUM = 'cb46e706-2e9f-4be2-bced-17a599e35364'
}

export class InMemoryProdutoRepository implements IProdutoRepository {
    private produtos: Produto[] = [
        { id: IN_MEMORY_PRODUTOS_IDS.BASICO, nome: "basico" },
        { id: IN_MEMORY_PRODUTOS_IDS.STANDARD, nome: "standard" },
        { id: IN_MEMORY_PRODUTOS_IDS.PREMIUM, nome: "premium" },
    ]

    async getAll(): Promise<Produto[]> {
        return this.produtos
    }

    async add(produto: Produto): Promise<void> {
        this.produtos.push(produto)
    }

    async update(produto_id: string, data: Partial<Produto>): Promise<void> {
        const produto_index = this.produtos.findIndex(p => p.id === produto_id)
        const produto = this.produtos.find(p => p.id === produto_id)!
        this.produtos[produto_index] = { ...produto, ...data }
    }

    async delete(produto_id: string): Promise<void> {
        this.produtos = this.produtos.filter(p => p.id !== produto_id)
    }

}