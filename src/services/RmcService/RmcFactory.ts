import { InMemoryRmcRepository } from "../../repositories/rmcRepository/inMemoryRmcRepository"
import { RmcService } from "./RmcService"

let rmcService: RmcService | null = null

export function RmcFactory() {
    if (!rmcService) {
        rmcService = new RmcService(new InMemoryRmcRepository())
    }

    return rmcService
}