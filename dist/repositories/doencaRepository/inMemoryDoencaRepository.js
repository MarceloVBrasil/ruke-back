export class InMemoryDoencaRepository {
    doencas = [];
    async getAll() {
        return this.doencas;
    }
    async getById(id) {
        return this.doencas.find(d => d.id === id);
    }
    async add(doenca) {
        this.doencas.push(doenca);
        return doenca;
    }
    async update(id, data) {
        const doenca_index = this.doencas.findIndex(d => d.id === id);
        this.doencas[doenca_index] = { ...this.doencas[doenca_index], ...data };
        return this.doencas[doenca_index];
    }
    async delete(id) {
        this.doencas = this.doencas.filter(d => d.id !== id);
        return id;
    }
}
