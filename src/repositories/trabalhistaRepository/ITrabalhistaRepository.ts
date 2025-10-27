import { Trabalhista } from "../../models/Trabalhista/Trabalhista";

export interface ITrabalhistaRepository {
    getAll(tenant_id: string): Promise<Trabalhista[]>
    getById(id: string): Promise<Trabalhista>
    add(data: Trabalhista): Promise<Trabalhista>
    update(id: string, data: Partial<Trabalhista>): Promise<Trabalhista>
    delete(id: string): Promise<string>
}