import { InMemoryProdutoRepository } from "../../repositories/produtoRepository/inMemoryProdutoRepository"
import { ProdutoService } from "./ProdutoService"

let produtoService: ProdutoService | null = null

export function ProdutoFactory() {
    if (!produtoService) {
        produtoService = new ProdutoService(new InMemoryProdutoRepository())
    }

    return produtoService
}