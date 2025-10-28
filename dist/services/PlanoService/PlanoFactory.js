"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoFactory = PlanoFactory;
const inMemoryPlanoRepository_1 = require("../../repositories/planoRepository/inMemoryPlanoRepository");
const PlanoService_1 = require("./PlanoService");
let planoService = null;
function PlanoFactory() {
    if (!planoService) {
        planoService = new PlanoService_1.PlanoService(new inMemoryPlanoRepository_1.InMemoryPlanoRepository());
    }
    return planoService;
}
