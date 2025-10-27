import { Bpc } from "../../models/Bpc/Bpc";
import { IBpcRepository } from "./IBpcRepository";

export class InMemoryBpcRepository implements IBpcRepository {
    private bpc: Bpc[] = []

    async getAll(tenant_id: string): Promise<Bpc[]> {
        return this.bpc.filter(b => b.tenant_id === tenant_id)
    }

    async getById(id: string): Promise<Bpc> {
        return this.bpc.find(b => b.id === id)!
    }

    async add(bpc: Bpc): Promise<Bpc> {
        this.bpc.push(bpc)
        return bpc
    }

    async update(id: string, data: Partial<Bpc>) {
        const bpc_index = this.bpc.findIndex(b => b.id === id)
        this.bpc[bpc_index] = { ...this.bpc[bpc_index], ...data }
        return this.bpc[bpc_index]
    }

    async delete(id: string): Promise<string> {
        this.bpc = this.bpc.filter(b => b.id !== id)
        return id
    }

}