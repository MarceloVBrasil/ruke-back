import { Pessoa } from "../../models/Pessoa/Pessoa";
import { IPessoaRepository } from "../../repositories/pessoaRepository/IPessoaRepository";
import { IPessoaService } from "./IPessoaService";
export declare class PessoaService implements IPessoaService {
    private pessoaRepository;
    constructor(pessoaRepository: IPessoaRepository);
    getAll(id_bpc: string): Promise<Pessoa[]>;
    getById(id: string): Promise<Pessoa>;
    add(data: Omit<Pessoa, 'id'>): Promise<Pessoa>;
    update(id: string, data: Partial<Pessoa>): Promise<Pessoa>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=PessoaService.d.ts.map