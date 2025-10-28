import { Rmc } from "../../models/Rmc/Rmc";
import { IRmcRepository } from "../../repositories/rmcRepository/IRmcRepository";
import { IRmcService } from "./IRmcService";
export declare class RmcService implements IRmcService {
    private rmcRepository;
    constructor(rmcRepository: IRmcRepository);
    getAll(tenant_id: string): Promise<Rmc[]>;
    getById(id: string): Promise<Rmc>;
    add(tenant_id: string): Promise<Rmc>;
    update(id: string, data: Partial<Rmc>): Promise<Rmc>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=RmcService.d.ts.map