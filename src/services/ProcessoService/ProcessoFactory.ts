import { ProcessoService } from "./ProcessoService"
import { InMemoryProcessoRepository } from "../../repositories/processoRepository/inMemoryProcessoRepository"

let processoService: ProcessoService | null = null

export function ProcessoFactory() {
    if (!processoService) {
        processoService = new ProcessoService(new InMemoryProcessoRepository())
    }

    return processoService
}