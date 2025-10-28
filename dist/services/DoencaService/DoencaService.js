export class DoencaService {
    doencaRepository;
    constructor(doencaRepository) {
        this.doencaRepository = doencaRepository;
    }
    async getAll() {
        return this.doencaRepository.getAll();
    }
    async getById(id) {
        return this.doencaRepository.getById(id);
    }
    async add(doenca) {
        return this.doencaRepository.add(doenca);
    }
    async update(id, data) {
        return this.doencaRepository.update(id, data);
    }
    async delete(id) {
        return this.doencaRepository.delete(id);
    }
}
