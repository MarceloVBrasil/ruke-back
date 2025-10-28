"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoencaService = void 0;
class DoencaService {
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
exports.DoencaService = DoencaService;
