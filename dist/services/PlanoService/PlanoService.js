export class PlanoService {
    planoRepository;
    constructor(planoRepository) {
        this.planoRepository = planoRepository;
    }
    async getAllByProdutoId(produto_id) {
        return this.planoRepository.getAllByProdutoId(produto_id);
    }
    async getById(id) {
        return this.planoRepository.getById(id);
    }
    async add(data) {
        const plano = { id: crypto.randomUUID(), ...data };
        return this.planoRepository.add(plano);
    }
    async update(id, plano) {
        return this.planoRepository.update(id, plano);
    }
    async delete(id) {
        return this.planoRepository.delete(id);
    }
}
