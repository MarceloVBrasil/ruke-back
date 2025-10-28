import { InMemorySuperendividamentoRepository } from "../../repositories/superendividamentoRepository/inMemorySuperendividamentoRepository";
import { SuperendividamentoService } from "./SuperendividamentoService";
let superendividamentoService = null;
export function SuperendividamentoFactory() {
    if (!superendividamentoService) {
        superendividamentoService = new SuperendividamentoService(new InMemorySuperendividamentoRepository());
    }
    return superendividamentoService;
}
