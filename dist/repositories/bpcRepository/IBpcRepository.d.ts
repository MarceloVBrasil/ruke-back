import { Bpc } from "../../models/Bpc/Bpc";
export interface IBpcRepository {
    getAll(tenant_id: string): Promise<Bpc[]>;
    getById(id: string): Promise<Bpc>;
    add(bpc: Bpc): Promise<Bpc>;
    update(id: string, data: Partial<Bpc>): Promise<Bpc>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=IBpcRepository.d.ts.map