"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpcFactory = BpcFactory;
const inMemoryBpcRepository_1 = require("../../repositories/bpcRepository/inMemoryBpcRepository");
const BpcService_1 = require("./BpcService");
let bpcService = null;
function BpcFactory() {
    if (!bpcService) {
        bpcService = new BpcService_1.BpcService(new inMemoryBpcRepository_1.InMemoryBpcRepository());
    }
    return bpcService;
}
