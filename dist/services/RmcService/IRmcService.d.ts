import { Rmc } from "../../models/Rmc/Rmc";
export interface IRmcService {
    getAll(tenant_id: string): Promise<Rmc[]>;
    getById(id: string): Promise<Rmc>;
    add(tenant_id: string): Promise<Rmc>;
    update(id: string, data: Partial<Rmc>): Promise<Rmc>;
    delete(id: string): Promise<string>;
}
//# sourceMappingURL=IRmcService.d.ts.map