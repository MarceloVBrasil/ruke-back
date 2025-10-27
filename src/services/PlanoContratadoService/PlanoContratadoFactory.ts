import { InMemoryPlanoContratadoRepository } from "../../repositories/planoContratadoRepository.ts/inMemoryPlanoContratadoRepository"
import { PlanoContratadoService } from "./PlanoContratadoService"

let planoContratadoService: PlanoContratadoService | null = null

export function PlanoContratadoFactory() {
    if (!planoContratadoService) {
        planoContratadoService = new PlanoContratadoService(new InMemoryPlanoContratadoRepository())
    }

    return planoContratadoService
}