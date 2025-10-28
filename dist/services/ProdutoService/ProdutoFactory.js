"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoFactory = ProdutoFactory;
const inMemoryProdutoRepository_1 = require("../../repositories/produtoRepository/inMemoryProdutoRepository");
const ProdutoService_1 = require("./ProdutoService");
let produtoService = null;
function ProdutoFactory() {
    if (!produtoService) {
        produtoService = new ProdutoService_1.ProdutoService(new inMemoryProdutoRepository_1.InMemoryProdutoRepository());
    }
    return produtoService;
}
