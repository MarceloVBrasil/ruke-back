import { array, boolean, mixed, number, object, string } from "yup"

const updateSchema = object().shape({
    id: string().required('id é obrigatória'),
    tenant_id: string().required('tenant_id é obrigatório'),
    nome_cliente: string(),
    cpf_cliente: string(),
    rg_cliente: string(),
    email_cliente: string(),
    data_nascimento_cliente: string(),
    estado_civil_cliente: string(),
    profissao_cliente: string(),
    cep_cliente: string(),
    rua_cliente: string(),
    numero_cliente: string(),
    complemento_cliente: string(),
    bairro_cliente: string(),
    cidade_cliente: string(),
    estado_cliente: string(),

    acao_ajuizada_em: string(),
    cidade_acao: string(),
    estado_acao: string(),

    bancos_credores: array().of(string()),
    pessoas_juridicas_credoras: mixed(),
    pessoas_fisicas_credoras: mixed(),

    fontes_de_renda_cliente: mixed(),
    familiares_cliente: mixed(),

    veiculos_cliente: mixed(),
    imoveis_cliente: mixed(),
    outros_bens_cliente: mixed(),
    razoes_endividamento: mixed(),

    dividas_consumo: mixed(),
    sugestao_plano_pagamento: boolean(),

    gastos_existenciais: mixed(),

    acoes_judiciais_cliente: array().of(string()),

    documentos_faltando: mixed(),

    valor_total_causa: number(),
    advogado: string(),
    oab_advogado: string(),
    local_peticao: string(),
    data_peticao: string(),
})

export class SuperendividamentoSchema {
    static update() {
        return updateSchema
    }
}