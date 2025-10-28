import { Doenca } from "../../models/Doenca/Doenca";
import { IDoencaRepository } from "../../repositories/doencaRepository/IDoencaRepository";
import { IDoencaService } from "./iDoencaService";
export declare class DoencaService implements IDoencaService {
    private doencaRepository;
    constructor(doencaRepository: IDoencaRepository);
    getAll(): Promise<Doenca[]>;
    getById(id: string): Promise<Doenca>;
    add(doenca: Doenca): Promise<Doenca>;
    update(id: string, data: Partial<Doenca>): Promise<Doenca>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=DoencaService.d.ts.map