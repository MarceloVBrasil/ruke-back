import { Bpc } from "../../models/Bpc/Bpc";
import { IBpcRepository } from "../../repositories/bpcRepository/IBpcRepository";
import { IBpcService } from "./IBpcService";
export declare class BpcService implements IBpcService {
    private bpcRepository;
    constructor(bpcRepository: IBpcRepository);
    getAll(tenant_id: string): Promise<Bpc[]>;
    getById(id: string): Promise<Bpc>;
    add(tenant_id: string): Promise<Bpc>;
    update(id: string, data: Partial<Bpc>): Promise<Bpc>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=BpcService.d.ts.map