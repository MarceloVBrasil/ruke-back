export class InMemoryBpcRepository {
    bpc = [];
    async getAll(tenant_id) {
        return this.bpc.filter(b => b.tenant_id === tenant_id);
    }
    async getById(id) {
        return this.bpc.find(b => b.id === id);
    }
    async add(bpc) {
        this.bpc.push(bpc);
        return bpc;
    }
    async update(id, data) {
        const bpc_index = this.bpc.findIndex(b => b.id === id);
        this.bpc[bpc_index] = { ...this.bpc[bpc_index], ...data };
        return this.bpc[bpc_index];
    }
    async delete(id) {
        this.bpc = this.bpc.filter(b => b.id !== id);
        return id;
    }
}
