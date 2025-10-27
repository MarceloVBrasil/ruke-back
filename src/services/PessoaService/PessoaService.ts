import { Pessoa } from "../../models/Pessoa/Pessoa";
import { IPessoaRepository } from "../../repositories/pessoaRepository/IPessoaRepository";
import { IPessoaService } from "./IPessoaService";

export class PessoaService implements IPessoaService {
    constructor(private pessoaRepository: IPessoaRepository) { }

    async getAll(id_bpc: string): Promise<Pessoa[]> {
        return await this.pessoaRepository.getAll(id_bpc)
    }

    async getById(id: string): Promise<Pessoa> {
        return await this.pessoaRepository.getById(id)
    }

    async add(data: Omit<Pessoa, 'id'>): Promise<Pessoa> {
        const pessoa: Pessoa = { id: crypto.randomUUID(), ...data }
        return this.pessoaRepository.add(pessoa)
    }

    async update(id: string, data: Partial<Pessoa>): Promise<Pessoa> {
        return this.pessoaRepository.update(id, data)
    }

    async delete(id: string): Promise<string> {
        return this.pessoaRepository.delete(id)
    }

}