import { Pessoa } from "../../models/Pessoa/Pessoa";

export interface IPessoaRepository {
    getAll(id_bpc: string): Promise<Pessoa[]>
    getById(id: string): Promise<Pessoa>
    add(pessoa: Pessoa): Promise<Pessoa>
    update(id: string, data: Partial<Pessoa>): Promise<Pessoa>
    delete(id: string): Promise<string>
}