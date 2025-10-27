import { InMemoryBpcRepository } from "../../repositories/bpcRepository/inMemoryBpcRepository"
import { BpcService } from "./BpcService"

let bpcService: BpcService | null = null

export function BpcFactory() {
    if (!bpcService) {
        bpcService = new BpcService(new InMemoryBpcRepository())
    }

    return bpcService
}