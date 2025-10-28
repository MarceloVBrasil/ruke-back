"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaService = void 0;
class PessoaService {
    constructor(pessoaRepository) {
        this.pessoaRepository = pessoaRepository;
    }
    async getAll(id_bpc) {
        return await this.pessoaRepository.getAll(id_bpc);
    }
    async getById(id) {
        return await this.pessoaRepository.getById(id);
    }
    async add(data) {
        const pessoa = { id: crypto.randomUUID(), ...data };
        return this.pessoaRepository.add(pessoa);
    }
    async update(id, data) {
        return this.pessoaRepository.update(id, data);
    }
    async delete(id) {
        return this.pessoaRepository.delete(id);
    }
}
exports.PessoaService = PessoaService;
