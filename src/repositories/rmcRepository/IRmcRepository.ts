import { Rmc } from "../../models/Rmc/Rmc";

export interface IRmcRepository {
    getAll(tenant_id: string): Promise<Rmc[]>
    getById(id: string): Promise<Rmc>
    add(rmc: Rmc): Promise<Rmc>
    update(id: string, data: Partial<Rmc>): Promise<Rmc>
    delete(id: string): Promise<string>
}