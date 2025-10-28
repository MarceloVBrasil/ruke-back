"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryPessoaRepository = void 0;
class InMemoryPessoaRepository {
    constructor() {
        this.pessoas = [];
    }
    async getAll(id_bpc) {
        return this.pessoas.filter(b => b.id_bpc === id_bpc);
    }
    async getById(id) {
        return this.pessoas.find(p => p.id === id);
    }
    async add(pessoa) {
        this.pessoas.push(pessoa);
        return pessoa;
    }
    async update(id, data) {
        const pessoa_index = this.pessoas.findIndex(p => p.id === id);
        this.pessoas[pessoa_index] = { ...this.pessoas[pessoa_index], ...data };
        return this.pessoas[pessoa_index];
    }
    async delete(id) {
        this.pessoas = this.pessoas.filter(p => p.id !== id);
        return id;
    }
}
exports.InMemoryPessoaRepository = InMemoryPessoaRepository;
