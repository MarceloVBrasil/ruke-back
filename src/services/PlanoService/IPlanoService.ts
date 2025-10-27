import { Plano } from "../../models/Plano/Plano";

export interface IPlanoService {
    getAllByProdutoId(produto_id: string): Promise<Plano[]>
    getById(id: string): Promise<Plano>
    add(plano: Omit<Plano, 'id'>): Promise<void>
    update(id: string, plano: Partial<Plano>): Promise<void>
    delete(id: string): Promise<void>
}