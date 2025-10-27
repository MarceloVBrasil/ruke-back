import { Doenca } from "../../models/Doenca/Doenca";
import { IDoencaRepository } from "./IDoencaRepository";

export class InMemoryDoencaRepository implements IDoencaRepository {
    private doencas: Doenca[] = []

    async getAll(): Promise<Doenca[]> {
        return this.doencas
    }

    async getById(id: string): Promise<Doenca> {
        return this.doencas.find(d => d.id === id)!
    }

    async add(doenca: Doenca): Promise<Doenca> {
        this.doencas.push(doenca)
        return doenca
    }

    async update(id: string, data: Partial<Doenca>): Promise<Doenca> {
        const doenca_index = this.doencas.findIndex(d => d.id === id)
        this.doencas[doenca_index] = { ...this.doencas[doenca_index], ...data }
        return this.doencas[doenca_index]
    }

    async delete(id: string): Promise<string> {
        this.doencas = this.doencas.filter(d => d.id !== id)
        return id
    }

}