"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoencaFactory = DoencaFactory;
const inMemoryDoencaRepository_1 = require("../../repositories/doencaRepository/inMemoryDoencaRepository");
const DoencaService_1 = require("./DoencaService");
let doencaService = null;
function DoencaFactory() {
    if (!doencaService) {
        doencaService = new DoencaService_1.DoencaService(new inMemoryDoencaRepository_1.InMemoryDoencaRepository());
    }
    return doencaService;
}
