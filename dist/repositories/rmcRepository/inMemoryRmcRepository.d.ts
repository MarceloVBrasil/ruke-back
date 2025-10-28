import { Rmc } from "../../models/Rmc/Rmc";
import { IRmcRepository } from "./IRmcRepository";
export declare class InMemoryRmcRepository implements IRmcRepository {
    private rmc;
    getAll(tenant_id: string): Promise<Rmc[]>;
    getById(id: string): Promise<Rmc>;
    add(rmc: Rmc): Promise<Rmc>;
    update(id: string, data: Partial<Rmc>): Promise<Rmc>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=inMemoryRmcRepository.d.ts.map