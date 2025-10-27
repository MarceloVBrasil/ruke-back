import { pessoa_fisica } from "./_helpers/step3/pessoa_fisica"
import { pessoa_juridica } from "./_helpers/step3/pessoa_juridica"
import { familiar_cliente } from "./_helpers/step4/familiar_cliente"
import { fonte_de_renda_cliente } from "./_helpers/step4/fonte_de_renda_cliente"
import { imovel } from "./_helpers/step5/imovel"
import { veiculo } from "./_helpers/step5/veiculo"
import { divida } from "./_helpers/step6/divida"
import { gasto_existencial } from "./_helpers/step7/gasto_existencial"
import { documento_faltando } from "./_helpers/step9/documento_faltando"

export interface Superendividamento {
    id: string
    tenant_id: string

    nome_cliente: string
    cpf_cliente: string
    rg_cliente: string
    email_cliente: string
    data_nascimento_cliente: string
    estado_civil_cliente: string
    profissao_cliente: string
    cep_cliente: string
    rua_cliente: string
    numero_cliente: string
    complemento_cliente: string
    bairro_cliente: string
    cidade_cliente: string
    estado_cliente: string

    acao_ajuizada_em: string
    cidade_acao: string
    estado_acao: string

    bancos_credores: string[]
    pessoas_fisicas_credores: pessoa_fisica[]
    pessoas_juridicas_credoras: pessoa_juridica[]

    fontes_de_renda_cliente: fonte_de_renda_cliente[]
    familiares_cliente: familiar_cliente[]

    veiculos_cliente: veiculo[]
    imoveis_cliente: imovel[]
    outros_bens_cliente: string[]
    razoes_endividamento: string[]

    dividas_consumo: divida[]
    sugestao_plano_pagamento: boolean

    gastos_existenciais: gasto_existencial[]

    acoes_judiciais_cliente: string[]

    documentos_faltando: documento_faltando[]

    valor_total_causa: number
    advogado: string
    oab_advogado: string
    local_peticao: string
    data_peticao: string
}