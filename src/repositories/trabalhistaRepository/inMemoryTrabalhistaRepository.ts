import { Trabalhista } from "../../models/Trabalhista/Trabalhista";
import { ITrabalhistaRepository } from "./ITrabalhistaRepository";

export class InMemoryTrabalhistaRepository implements ITrabalhistaRepository {
    private trabalhista: Trabalhista[] = []

    async getAll(tenant_id: string): Promise<Trabalhista[]> {
        return this.trabalhista.filter(ticket => ticket.tenant_id === tenant_id)
    }

    async getById(id: string): Promise<Trabalhista> {
        return this.trabalhista.find(ticket => ticket.id === id)!
    }

    async add(data: Trabalhista): Promise<Trabalhista> {
        this.trabalhista.push(data)
        return data
    }

    async update(id: string, data: Partial<Trabalhista>): Promise<Trabalhista> {
        const ticket_index = this.trabalhista.findIndex(ticket => ticket.id === id)
        this.trabalhista[ticket_index] = { ...this.trabalhista[ticket_index], ...data }
        return this.trabalhista[ticket_index]
    }

    async delete(id: string): Promise<string> {
        this.trabalhista = this.trabalhista.filter(ticket => ticket.id !== id)
        return id
    }

}