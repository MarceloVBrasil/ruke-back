"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoContratadoFactory = PlanoContratadoFactory;
const inMemoryPlanoContratadoRepository_1 = require("../../repositories/planoContratadoRepository.ts/inMemoryPlanoContratadoRepository");
const PlanoContratadoService_1 = require("./PlanoContratadoService");
let planoContratadoService = null;
function PlanoContratadoFactory() {
    if (!planoContratadoService) {
        planoContratadoService = new PlanoContratadoService_1.PlanoContratadoService(new inMemoryPlanoContratadoRepository_1.InMemoryPlanoContratadoRepository());
    }
    return planoContratadoService;
}
