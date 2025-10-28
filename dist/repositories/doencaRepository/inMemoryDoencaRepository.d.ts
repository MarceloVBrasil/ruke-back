import { Doenca } from "../../models/Doenca/Doenca";
import { IDoencaRepository } from "./IDoencaRepository";
export declare class InMemoryDoencaRepository implements IDoencaRepository {
    private doencas;
    getAll(): Promise<Doenca[]>;
    getById(id: string): Promise<Doenca>;
    add(doenca: Doenca): Promise<Doenca>;
    update(id: string, data: Partial<Doenca>): Promise<Doenca>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=inMemoryDoencaRepository.d.ts.map