"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RmcFactory = RmcFactory;
const inMemoryRmcRepository_1 = require("../../repositories/rmcRepository/inMemoryRmcRepository");
const RmcService_1 = require("./RmcService");
let rmcService = null;
function RmcFactory() {
    if (!rmcService) {
        rmcService = new RmcService_1.RmcService(new inMemoryRmcRepository_1.InMemoryRmcRepository());
    }
    return rmcService;
}
