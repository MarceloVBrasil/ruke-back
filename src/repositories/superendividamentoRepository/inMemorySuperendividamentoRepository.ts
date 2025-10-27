import { Superendividamento } from "../../models/Superendividamento/Superendividamento";
import { ISuperendividamentoRepository } from "./ISuperendividamentoRepository";

export class InMemorySuperendividamentoRepository implements ISuperendividamentoRepository {
    private superendividamento: Superendividamento[] = []

    async getAll(tenant_id: string): Promise<Superendividamento[]> {
        return this.superendividamento.filter(s => s.tenant_id === tenant_id)
    }

    async getById(id: string): Promise<Superendividamento> {
        return this.superendividamento.find(s => s.id === id)!
    }

    async add(data: Superendividamento): Promise<Superendividamento> {
        this.superendividamento.push(data)
        return data
    }

    async update(id: string, data: Partial<Superendividamento>): Promise<Superendividamento> {
        const superendividamento_index = this.superendividamento.findIndex(s => s.id === id)
        this.superendividamento[superendividamento_index] = { ...this.superendividamento[superendividamento_index], ...data }
        return this.superendividamento[superendividamento_index]
    }

    async delete(id: string): Promise<string> {
        this.superendividamento = this.superendividamento.filter(s => s.id !== id)
        return id
    }

}