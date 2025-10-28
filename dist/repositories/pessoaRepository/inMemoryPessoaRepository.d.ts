import { Pessoa } from "../../models/Pessoa/Pessoa";
import { IPessoaRepository } from "./IPessoaRepository";
export declare class InMemoryPessoaRepository implements IPessoaRepository {
    private pessoas;
    getAll(id_bpc: string): Promise<Pessoa[]>;
    getById(id: string): Promise<Pessoa>;
    add(pessoa: Pessoa): Promise<Pessoa>;
    update(id: string, data: Partial<Pessoa>): Promise<Pessoa>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=inMemoryPessoaRepository.d.ts.map