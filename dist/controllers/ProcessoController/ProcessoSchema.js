"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoSchema = void 0;
const yup_1 = require("yup");
const addSchema = (0, yup_1.object)().shape({
    tenant_id: (0, yup_1.string)().required('tenant_id é obrigatório'),
    numero_processo: (0, yup_1.string)().required('numero_processo é obrigatório'),
    orgao_julgador: (0, yup_1.string)().required('orgao_julgador é obrigatório'),
    classe: (0, yup_1.string)().required('classe é obrigatória'),
    cliente_principal: (0, yup_1.string)().required('cliente_principal é obrigatório'),
    contrario_principal: (0, yup_1.string)().required('contrário_principal é obrigatório'),
    movimentacoes: (0, yup_1.array)().of((0, yup_1.mixed)()).default([])
});
const filtarSchema = (0, yup_1.object)().shape({
    numero_processo: (0, yup_1.string)(),
    orgao_julgador: (0, yup_1.string)(),
    classe: (0, yup_1.string)(),
    cliente_principal: (0, yup_1.string)(),
    contrario_principal: (0, yup_1.string)(),
    movimentacoes: (0, yup_1.array)().of((0, yup_1.mixed)())
});
class ProcessoSchema {
    static add() {
        return addSchema;
    }
    static filtrar() {
        return filtarSchema;
    }
}
exports.ProcessoSchema = ProcessoSchema;
