"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantSchema = void 0;
const yup_1 = require("yup");
const addSchema = (0, yup_1.object)().shape({
    nome: (0, yup_1.string)().required('nome é obrigatório'),
    cnpj: (0, yup_1.string)().required('cnpj é obrigatório'),
    razao_social: (0, yup_1.string)().required('razao_social é obrigatória'),
    cep: (0, yup_1.string)().required('cep é obrigatório'),
    rua: (0, yup_1.string)().required('rua é obrigatória'),
    numero: (0, yup_1.string)().required('numero é obrigatório'),
    complemento: (0, yup_1.string)().required('complemento é obrigatório'),
    cidade: (0, yup_1.string)().required('cidade é obrigatória'),
    bairro: (0, yup_1.string)().required('bairro é obrigatório'),
    estado: (0, yup_1.string)().required('estado é obrigatório'),
    danos_morais_rmc: (0, yup_1.string)().required('danos_morais_rmc é obrigatório'),
    dados_outorgado_procuracao_rmc: (0, yup_1.string)().required('dados_outorgado_procuracao_rmc é obrigatório'),
    dados_contratado_contrato_honorarios_rmc: (0, yup_1.string)().required('dados_contratado_contrato_honorarios_rmc é obrigatório'),
    percentual_exito_rmc: (0, yup_1.number)().required('percentual_exito_rmc é obrigatório'),
    parcela_fixa_rmc: (0, yup_1.string)().required('parcela_fixa_rmc é obrigatória'),
    indice_correcao_monetaria_rmc: (0, yup_1.string)().required('indice_correcao_monetaria_rmc é obrigatório'),
    juros_de_mora_calculo_rmc: (0, yup_1.number)().required('juros_de_mora_calculo_rmc é obrigatório'),
    percentual_exito_bpc: (0, yup_1.number)(),
    parcela_fixa_bpc: (0, yup_1.string)(),
    percentual_exito_fraude_em_boletos: (0, yup_1.number)(),
    parcela_fixa_fraude_em_boletos: (0, yup_1.number)(),
    termo_uso_sistema: (0, yup_1.boolean)().required('termo de uso do sistema deve ser assinalado')
});
const updateSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required('id é obrigatório'),
    nome: (0, yup_1.string)(),
    cnpj: (0, yup_1.string)(),
    razao_social: (0, yup_1.string)(),
    cep: (0, yup_1.string)(),
    rua: (0, yup_1.string)(),
    numero: (0, yup_1.string)(),
    complemento: (0, yup_1.string)(),
    cidade: (0, yup_1.string)(),
    bairro: (0, yup_1.string)(),
    estado: (0, yup_1.string)(),
    danos_morais_rmc: (0, yup_1.string)(),
    dados_outorgado_procuracao_rmc: (0, yup_1.string)(),
    dados_contratado_contrato_honorarios_rmc: (0, yup_1.string)(),
    percentual_exito_rmc: (0, yup_1.number)(),
    parcela_fixa_rmc: (0, yup_1.string)(),
    indice_correcao_monetaria_rmc: (0, yup_1.string)(),
    juros_de_mora_calculo_rmc: (0, yup_1.number)(),
    percentual_exito_bpc: (0, yup_1.number)(),
    parcela_fixa_bpc: (0, yup_1.string)(),
    percentual_exito_fraude_em_boletos: (0, yup_1.number)(),
    parcela_fixa_fraude_em_boletos: (0, yup_1.number)(),
    termo_uso_sistema: (0, yup_1.boolean)()
});
class TenantSchema {
    static add() {
        return addSchema;
    }
    static update() {
        return updateSchema;
    }
}
exports.TenantSchema = TenantSchema;
