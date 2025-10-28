"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperendividamentoFactory = SuperendividamentoFactory;
const inMemorySuperendividamentoRepository_1 = require("../../repositories/superendividamentoRepository/inMemorySuperendividamentoRepository");
const SuperendividamentoService_1 = require("./SuperendividamentoService");
let superendividamentoService = null;
function SuperendividamentoFactory() {
    if (!superendividamentoService) {
        superendividamentoService = new SuperendividamentoService_1.SuperendividamentoService(new inMemorySuperendividamentoRepository_1.InMemorySuperendividamentoRepository());
    }
    return superendividamentoService;
}
