export class PessoaService {
    pessoaRepository;
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
