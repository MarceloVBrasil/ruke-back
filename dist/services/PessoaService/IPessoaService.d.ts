import { Pessoa } from "../../models/Pessoa/Pessoa";
export interface IPessoaService {
    getAll(id_bpc: string): Promise<Pessoa[]>;
    getById(id: string): Promise<Pessoa>;
    add(data: Omit<Pessoa, 'id'>): Promise<Pessoa>;
    update(id: string, data: Partial<Pessoa>): Promise<Pessoa>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=IPessoaService.d.ts.map