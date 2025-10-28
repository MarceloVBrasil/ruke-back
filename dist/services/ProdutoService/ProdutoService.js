"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoService = void 0;
class ProdutoService {
    constructor(produtoRepository) {
        this.produtoRepository = produtoRepository;
    }
    async getAll() {
        return this.produtoRepository.getAll();
    }
    async add(data) {
        const produto = { id: crypto.randomUUID(), ...data };
        return this.produtoRepository.add(produto);
    }
    async update(produto_id, data) {
        return this.produtoRepository.update(produto_id, data);
    }
    async delete(produto_id) {
        return this.produtoRepository.delete(produto_id);
    }
}
exports.ProdutoService = ProdutoService;
