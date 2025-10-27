import { Plano } from "../../models/Plano/Plano";
import { IPlanoRepository } from "../../repositories/planoRepository/IPlanoRepository";
import { IPlanoService } from "./IPlanoService";

export class PlanoService implements IPlanoService {
    constructor(private planoRepository: IPlanoRepository) { }

    async getAllByProdutoId(produto_id: string): Promise<Plano[]> {
        return this.planoRepository.getAllByProdutoId(produto_id)
    }

    async getById(id: string): Promise<Plano> {
        return this.planoRepository.getById(id)
    }

    async add(data: Omit<Plano, "id">): Promise<void> {
        const plano = { id: crypto.randomUUID(), ...data }
        return this.planoRepository.add(plano)
    }

    async update(id: string, plano: Partial<Plano>): Promise<void> {
        return this.planoRepository.update(id, plano)
    }

    async delete(id: string): Promise<void> {
        return this.planoRepository.delete(id)
    }
}