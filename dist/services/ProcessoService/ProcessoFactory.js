"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoFactory = ProcessoFactory;
const ProcessoService_1 = require("./ProcessoService");
const inMemoryProcessoRepository_1 = require("../../repositories/processoRepository/inMemoryProcessoRepository");
let processoService = null;
function ProcessoFactory() {
    if (!processoService) {
        processoService = new ProcessoService_1.ProcessoService(new inMemoryProcessoRepository_1.InMemoryProcessoRepository());
    }
    return processoService;
}
