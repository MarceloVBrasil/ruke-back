import { Doenca } from "../../models/Doenca/Doenca";
export interface IDoencaRepository {
    getAll(): Promise<Doenca[]>;
    getById(id: string): Promise<Doenca>;
    add(doenca: Doenca): Promise<Doenca>;
    update(id: string, data: Partial<Doenca>): Promise<Doenca>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=IDoencaRepository.d.ts.map