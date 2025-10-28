import { InMemoryPlanoContratadoRepository } from "../../repositories/planoContratadoRepository.ts/inMemoryPlanoContratadoRepository";
import { PlanoContratadoService } from "./PlanoContratadoService";
let planoContratadoService = null;
export function PlanoContratadoFactory() {
    if (!planoContratadoService) {
        planoContratadoService = new PlanoContratadoService(new InMemoryPlanoContratadoRepository());
    }
    return planoContratadoService;
}
