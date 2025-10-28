"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryPlanoRepository = exports.IN_MEMORY_PLANO_IDS = void 0;
const inMemoryProdutoRepository_1 = require("../produtoRepository/inMemoryProdutoRepository");
var IN_MEMORY_PLANO_IDS;
(function (IN_MEMORY_PLANO_IDS) {
    IN_MEMORY_PLANO_IDS["BASICO"] = "489cf794-9aa4-474e-a51c-39f15de00d49";
    IN_MEMORY_PLANO_IDS["STANDARD"] = "f90a593b-75b9-4d4b-a1e8-5f37432e1557";
    IN_MEMORY_PLANO_IDS["PREMIUM"] = "49b07b12-705c-444c-8a60-3293049196d1";
})(IN_MEMORY_PLANO_IDS || (exports.IN_MEMORY_PLANO_IDS = IN_MEMORY_PLANO_IDS = {}));
class InMemoryPlanoRepository {
    constructor() {
        this.planos = [
            {
                id: IN_MEMORY_PLANO_IDS.BASICO,
                produto_id: inMemoryProdutoRepository_1.IN_MEMORY_PRODUTOS_IDS.BASICO,
                nome: "Básico",
                descricao: "plano básico",
                limite_peticoes: "10",
                limite_hipossuficiencia: "10",
                limite_contratos: "10",
                limite_procuracoes: "10",
                preco: "297.00",
                tipo_cobranca: "mensal"
            },
            {
                id: IN_MEMORY_PLANO_IDS.STANDARD,
                produto_id: inMemoryProdutoRepository_1.IN_MEMORY_PRODUTOS_IDS.STANDARD,
                nome: "Standard",
                descricao: "plano intermediário",
                limite_peticoes: "20",
                limite_hipossuficiencia: "20",
                limite_contratos: "20",
                limite_procuracoes: "20",
                preco: "397.00",
                tipo_cobranca: "mensal"
            },
            {
                id: IN_MEMORY_PLANO_IDS.PREMIUM,
                produto_id: inMemoryProdutoRepository_1.IN_MEMORY_PRODUTOS_IDS.PREMIUM,
                nome: "Premium",
                descricao: "plano premium",
                limite_peticoes: "30",
                limite_hipossuficiencia: "30",
                limite_contratos: "30",
                limite_procuracoes: "30",
                preco: "497.00",
                tipo_cobranca: "mensal"
            }
        ];
    }
    async getAllByProdutoId(produto_id) {
        return this.planos.filter(p => p.produto_id === produto_id);
    }
    async getById(id) {
        return this.planos.find(p => p.id === id);
    }
    async add(plano) {
        this.planos.push(plano);
    }
    async update(id, data) {
        const plano_index = this.planos.findIndex(p => p.id === id);
        const plano = this.planos[plano_index];
        this.planos[plano_index] = { ...plano, ...data };
    }
    async delete(id) {
        this.planos = this.planos.filter(p => p.id !== id);
    }
}
exports.InMemoryPlanoRepository = InMemoryPlanoRepository;
