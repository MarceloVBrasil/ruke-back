import { Pessoa } from "../../models/Pessoa/Pessoa";
import { IPessoaRepository } from "./IPessoaRepository";

export class InMemoryPessoaRepository implements IPessoaRepository {
    private pessoas: Pessoa[] = []

    async getAll(id_bpc: string): Promise<Pessoa[]> {
        return this.pessoas.filter(b => b.id_bpc === id_bpc)
    }

    async getById(id: string): Promise<Pessoa> {
        return this.pessoas.find(p => p.id === id)!
    }

    async add(pessoa: Pessoa): Promise<Pessoa> {
        this.pessoas.push(pessoa)
        return pessoa
    }

    async update(id: string, data: Partial<Pessoa>): Promise<Pessoa> {
        const pessoa_index = this.pessoas.findIndex(p => p.id === id)
        this.pessoas[pessoa_index] = { ...this.pessoas[pessoa_index], ...data }
        return this.pessoas[pessoa_index]
    }

    async delete(id: string): Promise<string> {
        this.pessoas = this.pessoas.filter(p => p.id !== id)
        return id
    }

}