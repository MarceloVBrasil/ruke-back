import { InMemoryTrabalhistaRepository } from "../../repositories/trabalhistaRepository/inMemoryTrabalhistaRepository";
import { TrabalhistaService } from "./TrabalhistaService";
let trabalhistaService = null;
export function TrabalhistaFactory() {
    if (!trabalhistaService) {
        trabalhistaService = new TrabalhistaService(new InMemoryTrabalhistaRepository());
    }
    return trabalhistaService;
}
