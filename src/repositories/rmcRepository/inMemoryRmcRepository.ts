import { Rmc } from "../../models/Rmc/Rmc";
import { IRmcRepository } from "./IRmcRepository";

export class InMemoryRmcRepository implements IRmcRepository {
    private rmc: Rmc[] = []

    async getAll(tenant_id: string): Promise<Rmc[]> {
        return this.rmc.filter(r => r.tenant_id === tenant_id)
    }

    async getById(id: string): Promise<Rmc> {
        return this.rmc.find(r => r.id === id)!
    }

    async add(rmc: Rmc): Promise<Rmc> {
        this.rmc.push(rmc)
        return rmc
    }

    async update(id: string, data: Partial<Rmc>): Promise<Rmc> {
        const rmc_index = this.rmc.findIndex(r => r.id === id)
        this.rmc[rmc_index] = { ...this.rmc[rmc_index], ...data }
        return this.rmc[rmc_index]
    }

    async delete(id: string): Promise<string> {
        this.rmc = this.rmc.filter(r => r.id !== id)
        return id
    }

}