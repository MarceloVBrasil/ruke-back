export class InMemorySuperendividamentoRepository {
    superendividamento = [];
    async getAll(tenant_id) {
        return this.superendividamento.filter(s => s.tenant_id === tenant_id);
    }
    async getById(id) {
        return this.superendividamento.find(s => s.id === id);
    }
    async add(data) {
        this.superendividamento.push(data);
        return data;
    }
    async update(id, data) {
        const superendividamento_index = this.superendividamento.findIndex(s => s.id === id);
        this.superendividamento[superendividamento_index] = { ...this.superendividamento[superendividamento_index], ...data };
        return this.superendividamento[superendividamento_index];
    }
    async delete(id) {
        this.superendividamento = this.superendividamento.filter(s => s.id !== id);
        return id;
    }
}
