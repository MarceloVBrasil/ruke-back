export var IN_MEMORY_PRODUTOS_IDS;
(function (IN_MEMORY_PRODUTOS_IDS) {
    IN_MEMORY_PRODUTOS_IDS["BASICO"] = "8456d6a1-04c1-4277-b22d-e2c57cfaf2dd";
    IN_MEMORY_PRODUTOS_IDS["STANDARD"] = "baae51db-4441-4faa-9f37-f5812a430f41";
    IN_MEMORY_PRODUTOS_IDS["PREMIUM"] = "cb46e706-2e9f-4be2-bced-17a599e35364";
})(IN_MEMORY_PRODUTOS_IDS || (IN_MEMORY_PRODUTOS_IDS = {}));
export class InMemoryProdutoRepository {
    produtos = [
        { id: IN_MEMORY_PRODUTOS_IDS.BASICO, nome: "basico" },
        { id: IN_MEMORY_PRODUTOS_IDS.STANDARD, nome: "standard" },
        { id: IN_MEMORY_PRODUTOS_IDS.PREMIUM, nome: "premium" },
    ];
    async getAll() {
        return this.produtos;
    }
    async add(produto) {
        this.produtos.push(produto);
    }
    async update(produto_id, data) {
        const produto_index = this.produtos.findIndex(p => p.id === produto_id);
        const produto = this.produtos.find(p => p.id === produto_id);
        this.produtos[produto_index] = { ...produto, ...data };
    }
    async delete(produto_id) {
        this.produtos = this.produtos.filter(p => p.id !== produto_id);
    }
}
