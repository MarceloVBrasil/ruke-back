import { PlanoContratado } from "../../models/Plano/PlanoContratado";
import { IPlanoContratadoRepository } from "../../repositories/planoContratadoRepository.ts/IPlanoContratadoRepository";
import { IPlanoContratadoGetAll, IPlanoContratadoService } from "./IPlanoContratadoService";
export declare class PlanoContratadoService implements IPlanoContratadoService {
    private planoContratadoRepository;
    constructor(planoContratadoRepository: IPlanoContratadoRepository);
    getAll(tenant_id: string): Promise<IPlanoContratadoGetAll>;
    add(plano_id: string, tenant_id: string): Promise<PlanoContratado>;
}
//# sourceMappingURL=PlanoContratadoService.d.ts.map