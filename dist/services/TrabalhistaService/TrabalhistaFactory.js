"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabalhistaFactory = TrabalhistaFactory;
const inMemoryTrabalhistaRepository_1 = require("../../repositories/trabalhistaRepository/inMemoryTrabalhistaRepository");
const TrabalhistaService_1 = require("./TrabalhistaService");
let trabalhistaService = null;
function TrabalhistaFactory() {
    if (!trabalhistaService) {
        trabalhistaService = new TrabalhistaService_1.TrabalhistaService(new inMemoryTrabalhistaRepository_1.InMemoryTrabalhistaRepository());
    }
    return trabalhistaService;
}
