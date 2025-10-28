import { InMemoryDoencaRepository } from "../../repositories/doencaRepository/inMemoryDoencaRepository";
import { DoencaService } from "./DoencaService";
let doencaService = null;
export function DoencaFactory() {
    if (!doencaService) {
        doencaService = new DoencaService(new InMemoryDoencaRepository());
    }
    return doencaService;
}
