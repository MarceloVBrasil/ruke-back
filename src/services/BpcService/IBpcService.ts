import { Bpc } from "../../models/Bpc/Bpc";

export interface IBpcService {
    getAll(tenant_id: string): Promise<Bpc[]>
    getById(id: string): Promise<Bpc>
    add(tenant_id: string): Promise<Bpc>
    update(id: string, data: Partial<Bpc>): Promise<Bpc>
    delete(id: string): Promise<string>
}