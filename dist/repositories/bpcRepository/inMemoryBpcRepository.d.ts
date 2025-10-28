import { Bpc } from "../../models/Bpc/Bpc";
import { IBpcRepository } from "./IBpcRepository";
export declare class InMemoryBpcRepository implements IBpcRepository {
    private bpc;
    getAll(tenant_id: string): Promise<Bpc[]>;
    getById(id: string): Promise<Bpc>;
    add(bpc: Bpc): Promise<Bpc>;
    update(id: string, data: Partial<Bpc>): Promise<any>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=inMemoryBpcRepository.d.ts.map