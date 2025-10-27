import { Doenca } from "../../models/Doenca/Doenca";

export interface IDoencaService {
    getAll(): Promise<Doenca[]>
    getById(id: string): Promise<Doenca>
    add(doenca: Doenca): Promise<Doenca>
    update(id: string, data: Partial<Doenca>): Promise<Doenca>
    delete(id: string): Promise<string>
}