import { InMemoryPlanoRepository } from "../../repositories/planoRepository/inMemoryPlanoRepository"
import { PlanoService } from "./PlanoService"

let planoService: PlanoService | null = null

export function PlanoFactory() {
    if (!planoService) {
        planoService = new PlanoService(new InMemoryPlanoRepository())
    }

    return planoService
}