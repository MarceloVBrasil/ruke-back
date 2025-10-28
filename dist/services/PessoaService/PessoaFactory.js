"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaFactory = PessoaFactory;
const inMemoryPessoaRepository_1 = require("../../repositories/pessoaRepository/inMemoryPessoaRepository");
const PessoaService_1 = require("./PessoaService");
let pessoaService = null;
function PessoaFactory() {
    if (!pessoaService) {
        pessoaService = new PessoaService_1.PessoaService(new inMemoryPessoaRepository_1.InMemoryPessoaRepository());
    }
    return pessoaService;
}
