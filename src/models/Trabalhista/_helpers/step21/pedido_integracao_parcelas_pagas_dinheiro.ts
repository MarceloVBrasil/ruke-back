type salario_por_fora = {
    data_inicio: string
    data_fim: string
    valor_mensal_medio: number
    rubrica_por_fora: string
    forma_pagamento: "por_fora" | "transferencia_bancaria" | "cartao_pagamento" | "qual outra forma de pagamento?"
    valor_estimado_pedido: number
}

type integracao_premios = {
    data_inicio: string
    data_fim: string
    valor_mensal_medio: number
    valor_estimado_pedido: number
}

type auxilio_alimentacao = {
    data_inicio: string
    data_fim: string
    valor_mensal_medio: number
    valor_estimado_pedido: number
}

export type pedido_integracao_salarial = {
    salario_por_fora: salario_por_fora | null
    integracao_premios: integracao_premios | null
    auxilio_alimentacao: auxilio_alimentacao | null
}
