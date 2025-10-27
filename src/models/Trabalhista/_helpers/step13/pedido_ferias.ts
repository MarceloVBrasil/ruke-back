export type pedido_ferias = {
    periodo_data_inicio: string | null
    periodo_data_final: string | null
    situacao_ferias_reclamante: situacao_ferias_reclamante | null
    ferias_nao_gozadas_pedido: pedido_ferias_nao_gozadas | null
    ferias_interrompidas_injustamente_pedido: pedido_ferias_interrompidas_injustamente | null
    pagamento_intempestivo_ferias: pagamento_intempestivo_ferias | null
    ferias_pagas_nao_gozadas: ferias_pagas_nao_gozadas | null
    ausencia_pagamento_terco_constitucional: ausencia_pagamento_terco_constitucional | null
    remuneracao: number | null
}

export type situacao_ferias_reclamante =
    | 'ausencia_apagamento_terco_constituicional'
    | 'ferias_interrompidas_injustamente'
    | 'ferias_nao_gozadas'
    | 'ferias_pagas_nao_gozadas'
    | 'pagamento_intempestivo_ferias'

export type pedido_ferias_nao_gozadas = {
    valor_estimado_pagamento_em_dobro: number | null
    periodos_ferias: string | null
}

export type pedido_ferias_interrompidas_injustamente = {
    data_inicio: string | null
    data_final: string | null
    interrupcao_ferias: string | null
    valor_estimado_pagamento_em_dobro: number | null
}

export type pagamento_intempestivo_ferias = {
    data_inicio: string | null
    data_pagamento_realizado: string | null
    valor_estimado_pagamento_em_dobro: number | null
}

export type ferias_pagas_nao_gozadas = {
    data_inicio: string | null
    data_final: string | null
    valor_estimado_pagamento_em_dobro: number | null
}

export type ausencia_pagamento_terco_constitucional = {
    data_inicio: string | null
    data_final: string | null
    valor_estimado_pagamento_em_dobro: number | null
}
