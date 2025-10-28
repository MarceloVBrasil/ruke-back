import { boolean, number, object, string } from "yup";
const addSchema = object().shape({
    nome: string().required('nome é obrigatório'),
    cnpj: string().required('cnpj é obrigatório'),
    razao_social: string().required('razao_social é obrigatória'),
    cep: string().required('cep é obrigatório'),
    rua: string().required('rua é obrigatória'),
    numero: string().required('numero é obrigatório'),
    complemento: string().required('complemento é obrigatório'),
    cidade: string().required('cidade é obrigatória'),
    bairro: string().required('bairro é obrigatório'),
    estado: string().required('estado é obrigatório'),
    danos_morais_rmc: string().required('danos_morais_rmc é obrigatório'),
    dados_outorgado_procuracao_rmc: string().required('dados_outorgado_procuracao_rmc é obrigatório'),
    dados_contratado_contrato_honorarios_rmc: string().required('dados_contratado_contrato_honorarios_rmc é obrigatório'),
    percentual_exito_rmc: number().required('percentual_exito_rmc é obrigatório'),
    parcela_fixa_rmc: string().required('parcela_fixa_rmc é obrigatória'),
    indice_correcao_monetaria_rmc: string().required('indice_correcao_monetaria_rmc é obrigatório'),
    juros_de_mora_calculo_rmc: number().required('juros_de_mora_calculo_rmc é obrigatório'),
    percentual_exito_bpc: number(),
    parcela_fixa_bpc: string(),
    percentual_exito_fraude_em_boletos: number(),
    parcela_fixa_fraude_em_boletos: number(),
    termo_uso_sistema: boolean().required('termo de uso do sistema deve ser assinalado')
});
const updateSchema = object().shape({
    id: string().required('id é obrigatório'),
    nome: string(),
    cnpj: string(),
    razao_social: string(),
    cep: string(),
    rua: string(),
    numero: string(),
    complemento: string(),
    cidade: string(),
    bairro: string(),
    estado: string(),
    danos_morais_rmc: string(),
    dados_outorgado_procuracao_rmc: string(),
    dados_contratado_contrato_honorarios_rmc: string(),
    percentual_exito_rmc: number(),
    parcela_fixa_rmc: string(),
    indice_correcao_monetaria_rmc: string(),
    juros_de_mora_calculo_rmc: number(),
    percentual_exito_bpc: number(),
    parcela_fixa_bpc: string(),
    percentual_exito_fraude_em_boletos: number(),
    parcela_fixa_fraude_em_boletos: number(),
    termo_uso_sistema: boolean()
});
export class TenantSchema {
    static add() {
        return addSchema;
    }
    static update() {
        return updateSchema;
    }
}
