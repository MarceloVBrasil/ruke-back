export class InMemoryTrabalhistaRepository {
    trabalhista = [];
    async getAll(tenant_id) {
        return this.trabalhista.filter(ticket => ticket.tenant_id === tenant_id);
    }
    async getById(id) {
        return this.trabalhista.find(ticket => ticket.id === id);
    }
    async add(data) {
        this.trabalhista.push(data);
        return data;
    }
    async update(id, data) {
        const ticket_index = this.trabalhista.findIndex(ticket => ticket.id === id);
        this.trabalhista[ticket_index] = { ...this.trabalhista[ticket_index], ...data };
        return this.trabalhista[ticket_index];
    }
    async delete(id) {
        this.trabalhista = this.trabalhista.filter(ticket => ticket.id !== id);
        return id;
    }
}
