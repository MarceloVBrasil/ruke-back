
type hipotese =
    | "acidente_trabalho"
    | "assedio_moral_horizontal"
    | "assedio_moral_vertical"
    | "dispensa_arbitraria_estabilidade_provisoria"
    | "dispensa_discriminatoria_doenca"
    | "excesso_horas_extras"
    | "justa_causa_revertida_em_juizo"
    | "nao_fornecimento_epi_labor_insalubre"
    | "nao_fornecimento_epi_labor_perigoso"
    | "nao_pagamento_verbas_rescisorias"
    | "pagamento_parcelado_verbas_rescisorias"
    | "pagamento_verbas_rescisorias_fora_do_prazo"
    | "sonegacao_verbas_trabalhistas"


type acidente_trabalho = {
    data_acidente: null | string,
    descricao_acidente: null | string,
    valor_estimado: null | number
}

type assedio_moral_horizontal = {
    nome_pessoa_realizou_assedio: null | string,
    descricao_ofensas_vexatorias: null | string,
    valor_estimado: null | number
}

type assedio_moral_vertical = {
    nome_superior_realizou_assedio: null | string,
    descricao_ofensas_vexatorias: null | string,
    valor_estimado: null | number
}

type dispensa_arbitraria_estabilidade_provisoria = {
    motivo_estabilidade: null | string,
    data_projecao_termino: null | string,
    valor_estimado: null | number
}

type dispensa_discriminatoria_doenca = {
    doenca_diagnosticada_reclamante: null | string,
    data_diagnostico: null | string,
    valor_estimado: null | number
}

type excesso_horas_extras = {
    valor_estimado: null | number
}

type justa_causa_revertida_em_juizo = {
    valor_estimado: null | number
}

type nao_fornecimento_epi_labor_insalubre = {
    valor_estimado: null | number
}

type nao_fornecimento_epi_labor_perigoso = {
    valor_estimado: null | number
}

type nao_pagamento_verbas_rescisorias = {
    valor_estimado: null | number,
    data_projecao_termino: null | string
}

type pagamento_parcelado_verbas_rescisorias = {
    valor_estimado: null | number
}

type pagamento_verbas_rescisorias_fora_do_prazo = {
    valor_estimado: null | number
}

type sonegacao_verbas_trabalhistas = {
    verbas_sonegadas: null | string,
    valor_estimado: null | number
}


export type pedido_danos_morais = {
    hipoteses: hipotese[] | null
    acidente_trabalho: acidente_trabalho | null
    assedio_moral_horizontal: assedio_moral_horizontal | null
    assedio_moral_vertical: assedio_moral_vertical | null
    dispensa_arbitraria_estabilidade_provisoria: dispensa_arbitraria_estabilidade_provisoria | null
    dispensa_discriminatoria_doenca: dispensa_discriminatoria_doenca | null
    excesso_horas_extras: excesso_horas_extras | null
    justa_causa_revertida_em_juizo: justa_causa_revertida_em_juizo | null
    nao_fornecimento_epi_labor_insalubre: nao_fornecimento_epi_labor_insalubre | null
    nao_fornecimento_epi_labor_perigoso: nao_fornecimento_epi_labor_perigoso | null
    nao_pagamento_verbas_rescisorias: nao_pagamento_verbas_rescisorias | null
    pagamento_parcelado_verbas_rescisorias: pagamento_parcelado_verbas_rescisorias | null
    pagamento_verbas_rescisorias_fora_do_prazo: pagamento_verbas_rescisorias_fora_do_prazo | null
    sonegacao_verbas_trabalhistas: sonegacao_verbas_trabalhistas | null
}
