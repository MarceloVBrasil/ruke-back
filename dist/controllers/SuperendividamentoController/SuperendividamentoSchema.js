"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperendividamentoSchema = void 0;
const yup_1 = require("yup");
const updateSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required('id é obrigatória'),
    tenant_id: (0, yup_1.string)().required('tenant_id é obrigatório'),
    nome_cliente: (0, yup_1.string)(),
    cpf_cliente: (0, yup_1.string)(),
    rg_cliente: (0, yup_1.string)(),
    email_cliente: (0, yup_1.string)(),
    data_nascimento_cliente: (0, yup_1.string)(),
    estado_civil_cliente: (0, yup_1.string)(),
    profissao_cliente: (0, yup_1.string)(),
    cep_cliente: (0, yup_1.string)(),
    rua_cliente: (0, yup_1.string)(),
    numero_cliente: (0, yup_1.string)(),
    complemento_cliente: (0, yup_1.string)(),
    bairro_cliente: (0, yup_1.string)(),
    cidade_cliente: (0, yup_1.string)(),
    estado_cliente: (0, yup_1.string)(),
    acao_ajuizada_em: (0, yup_1.string)(),
    cidade_acao: (0, yup_1.string)(),
    estado_acao: (0, yup_1.string)(),
    bancos_credores: (0, yup_1.array)().of((0, yup_1.string)()),
    pessoas_juridicas_credoras: (0, yup_1.mixed)(),
    pessoas_fisicas_credoras: (0, yup_1.mixed)(),
    fontes_de_renda_cliente: (0, yup_1.mixed)(),
    familiares_cliente: (0, yup_1.mixed)(),
    veiculos_cliente: (0, yup_1.mixed)(),
    imoveis_cliente: (0, yup_1.mixed)(),
    outros_bens_cliente: (0, yup_1.mixed)(),
    razoes_endividamento: (0, yup_1.mixed)(),
    dividas_consumo: (0, yup_1.mixed)(),
    sugestao_plano_pagamento: (0, yup_1.boolean)(),
    gastos_existenciais: (0, yup_1.mixed)(),
    acoes_judiciais_cliente: (0, yup_1.array)().of((0, yup_1.string)()),
    documentos_faltando: (0, yup_1.mixed)(),
    valor_total_causa: (0, yup_1.number)(),
    advogado: (0, yup_1.string)(),
    oab_advogado: (0, yup_1.string)(),
    local_peticao: (0, yup_1.string)(),
    data_peticao: (0, yup_1.string)(),
});
class SuperendividamentoSchema {
    static update() {
        return updateSchema;
    }
}
exports.SuperendividamentoSchema = SuperendividamentoSchema;
