"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcrService = void 0;
const node_tesseract_ocr_1 = __importDefault(require("node-tesseract-ocr"));
const TrabalhistaFactory_1 = require("../TrabalhistaService/TrabalhistaFactory");
const OcrHelper_1 = require("./OcrHelper");
const SuperendividamentoFactory_1 = require("../SuperendividamentoService/SuperendividamentoFactory");
const RmcFactory_1 = require("../RmcService/RmcFactory");
const BpcFactory_1 = require("../BpcService/BpcFactory");
class OcrService {
    async trabalhista(files, tenant_id) {
        const identidade = [];
        const comprovante_residencia = [];
        const trabalhistaService = (0, TrabalhistaFactory_1.TrabalhistaFactory)();
        for (const file of files) {
            if (file.fieldname === 'identidade') {
                const text = await node_tesseract_ocr_1.default.recognize(file.buffer, { lang: "eng" });
                identidade.push(text);
            }
            if (file.fieldname === 'comprovante_residencia') {
                const text = await node_tesseract_ocr_1.default.recognize(file.buffer, { lang: "eng" });
                comprovante_residencia.push(text);
            }
        }
        const nome_reclamante = OcrHelper_1.OcrHelper.getNome(identidade);
        const cep_reclamante = OcrHelper_1.OcrHelper.getCep(comprovante_residencia);
        const trabalhista = await trabalhistaService.add(tenant_id);
        await trabalhistaService.update(trabalhista.id, { nome_reclamante, cep_reclamante });
        return { id_ticket: trabalhista.id };
    }
    async superendividamento(files, tenant_id) {
        const identidade = [];
        const comprovante_residencia = [];
        const superendividamentoService = (0, SuperendividamentoFactory_1.SuperendividamentoFactory)();
        for (const file of files) {
            if (file.fieldname === 'identidade') {
                const text = await node_tesseract_ocr_1.default.recognize(file.buffer, { lang: "eng" });
                identidade.push(text);
            }
            if (file.fieldname === 'comprovante_residencia') {
                const text = await node_tesseract_ocr_1.default.recognize(file.buffer, { lang: "eng" });
                comprovante_residencia.push(text);
            }
        }
        const nome_cliente = OcrHelper_1.OcrHelper.getNome(identidade);
        const cep_cliente = OcrHelper_1.OcrHelper.getCep(comprovante_residencia);
        const superendividamento = await superendividamentoService.add(tenant_id);
        await superendividamentoService.update(superendividamento.id, { nome_cliente, cep_cliente });
        return { id_ticket: superendividamento.id };
    }
    async rmc(files, tenant_id) {
        const identidade = [];
        const rmcService = (0, RmcFactory_1.RmcFactory)();
        for (const file of files) {
            if (file.fieldname === 'identidade') {
                const text = await node_tesseract_ocr_1.default.recognize(file.buffer, { lang: "eng" });
                identidade.push(text);
            }
        }
        const name_client = OcrHelper_1.OcrHelper.getNome(identidade);
        const rmc = await rmcService.add(tenant_id);
        await rmcService.update(rmc.id, { name_client });
        return { id_ticket: rmc.id };
    }
    async bpc(files, tenant_id) {
        const identidade = [];
        const comprovante_residencia = [];
        const bpcService = (0, BpcFactory_1.BpcFactory)();
        for (const file of files) {
            if (file.fieldname === 'identidade') {
                const text = await node_tesseract_ocr_1.default.recognize(file.buffer, { lang: "eng" });
                identidade.push(text);
            }
            if (file.fieldname === 'comprovante_residencia') {
                const text = await node_tesseract_ocr_1.default.recognize(file.buffer, { lang: "eng" });
                comprovante_residencia.push(text);
            }
        }
        const nome_cliente = OcrHelper_1.OcrHelper.getNome(identidade);
        const cep = OcrHelper_1.OcrHelper.getCep(comprovante_residencia);
        const bpc = await bpcService.add(tenant_id);
        await bpcService.update(bpc.id, { nome_cliente, cep });
        return { id_ticket: bpc.id };
    }
}
exports.OcrService = OcrService;
