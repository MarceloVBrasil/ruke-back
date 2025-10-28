import { PlanoContratado } from "../../models/Plano/PlanoContratado";
import { IPlanoContratadoRepository } from "./IPlanoContratadoRepository";
export declare class InMemoryPlanoContratadoRepository implements IPlanoContratadoRepository {
    private planos_contratados;
    getAll(tenant_id: string): Promise<PlanoContratado[]>;
    add(plano_id: string, tenant_id: string): Promise<PlanoContratado>;
}
//# sourceMappingURL=inMemoryPlanoContratadoRepository.d.ts.map