"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InMemoryRmcRepository = void 0;
class InMemoryRmcRepository {
    constructor() {
        this.rmc = [];
    }
    async getAll(tenant_id) {
        return this.rmc.filter(r => r.tenant_id === tenant_id);
    }
    async getById(id) {
        return this.rmc.find(r => r.id === id);
    }
    async add(rmc) {
        this.rmc.push(rmc);
        return rmc;
    }
    async update(id, data) {
        const rmc_index = this.rmc.findIndex(r => r.id === id);
        this.rmc[rmc_index] = { ...this.rmc[rmc_index], ...data };
        return this.rmc[rmc_index];
    }
    async delete(id) {
        this.rmc = this.rmc.filter(r => r.id !== id);
        return id;
    }
}
exports.InMemoryRmcRepository = InMemoryRmcRepository;
