import { Doenca } from "../../models/Doenca/Doenca";
import { IDoencaRepository } from "../../repositories/doencaRepository/IDoencaRepository";
import { IDoencaService } from "./IDoencaService";

export class DoencaService implements IDoencaService {
    constructor(private doencaRepository: IDoencaRepository) { }

    async getAll(): Promise<Doenca[]> {
        return this.doencaRepository.getAll()
    }

    async getById(id: string): Promise<Doenca> {
        return this.doencaRepository.getById(id)
    }

    async add(doenca: Doenca): Promise<Doenca> {
        return this.doencaRepository.add(doenca)
    }

    async update(id: string, data: Partial<Doenca>): Promise<Doenca> {
        return this.doencaRepository.update(id, data)
    }

    async delete(id: string): Promise<string> {
        return this.doencaRepository.delete(id)
    }

}