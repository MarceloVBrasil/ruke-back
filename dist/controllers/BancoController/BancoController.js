"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoController = void 0;
const axios_1 = __importDefault(require("axios"));
class BancoController {
    async getAll(req, res) {
        const data = await axios_1.default.get(`https://olinda.bcb.gov.br/olinda/servico/Instituicoes_em_funcionamento/versao/v1/odata/SedesBancoComMultCE?%24format=json`);
        res.status(200).json(data.data.value);
    }
}
exports.BancoController = BancoController;
