type periodo_nao_pagamento = 'parte_contrato' | 'todo_contrato'

type horas_extras_nao_pagas_sabado = {
    empregador_realizava_controle_de_ponto: boolean | null
    horario_real_inicio: string | null
    horario_real_termino: string | null
    periodo_nao_pagamento: periodo_nao_pagamento | null
    data_inicio_nao_pagamento: string | null
    data_termino_nao_pagamento: string | null
    valor_estimado_pedido: number | null
    quantidade_horas_extras: number | null
}

type horas_extras_nao_pagas_segunda_a_sexta = {
    empregador_realizava_controle_de_ponto: boolean | null
    horario_real_inicio: string | null
    horario_real_termino: string | null
    periodo_nao_pagamento: periodo_nao_pagamento | null
    data_inicio_nao_pagamento: string | null
    data_termino_nao_pagamento: string | null
    valor_estimado_pedido: number | null
    quantidade_horas_extras_semanais: number | null
}

type horas_extras_pagas_parcialmente = {
    horario_real_inicio: string | null
    horario_real_termino: string | null
    quantidade_horas_extras_pagas: number | null
    quantidade_horas_extras_realizadas_semana: number | null
    periodo_nao_pagamento: periodo_nao_pagamento | null
    data_inicio_nao_pagamento: string | null
    data_termino_nao_pagamento: string | null
    valor_estimado_pedido: number | null
}

type horas_extras_pagas_por_fora = {
    horario_real_inicio: string | null
    horario_real_termino: string | null
    valor_pago_por_fora: number | null
}

type labor_aos_domingos_sem_contraprestacao = {
    quantidade_domingos_por_mes: number | null
    valor_pago_por_fora: number | null
}

type labor_em_feriados = {
    quantidade_feriados_por_ano: number | null
    valor_estimado_horas_trabalhadas: number | null
    feriados_trabalhados: string | null
}

type jornada_trabalho_12_36 = {
    realizava_horas_extras: boolean | null
    quantidade_horas_extras_por_dia: number | null
    quantidade_horas_extras_por_semana: number | null
    total_horas_extras: number | null
    valor_estimado_horas_extras: number | null
}


type horas_extras_nao_pagas = {
    horario_real_inicio: string | null
    horario_real_termino: string | null
    periodo_nao_pagamento: periodo_nao_pagamento | null
    data_inicio_nao_pagamento: string | null
    data_termino_nao_pagamento: string | null
    quantidade_horas_extras_semana: number | null
    valor_estimado_pedido: number | null
}

type horas_extras_nao_pagas_segunda_a_sabado = {
    horario_contratual_inicio: string | null
    horario_contratual_termino: string | null
    horario_real_inicio: string | null
    horario_real_termino: string | null
    periodo_nao_pagamento: periodo_nao_pagamento | null
    data_inicio_nao_pagamento: string | null
    data_termino_nao_pagamento: string | null
    quantidade_horas_extras_semana: number | null
    valor_estimado_pedido: number | null
}

type hipotese =
    | 'adicional_noturno'
    | 'descaracterizacao_cargo_confianca'
    | 'horas_extras_nao_pagas'
    | 'horas_extras_nao_pagas_sabados'
    | 'horas_extras_nao_pagas_segunda_a_sabado'
    | 'horas_extras_nao_pagas_segunda_a_sexta'
    | 'horas_extras_pagas_parcialmente'
    | 'horas_extras_pagas_por_fora'
    | 'jornada_trabalho_12_36'
    | 'labor_aos_domingos_sem_contraprestacao'
    | 'labor_em_feriados'
    | 'prontidao'
    | 'sobreaviso'
    | 'supressao_intervalo_interjornada'
    | 'supressao_intervalo_intrajornada'

type supressao_intervalo_intrajornada = {
    duracao_intervalo: number | null
    quantidade_por_semana_intervalo_suprimido: number | null
    quantidade_horas_totais: number | null
    valor_estimado_pedido: number | null
}

type intervalo_trabalho = {
    inicio: string | null
    termino: string | null
}

type supressao_intervalo_interjornada = {
    media_intervalo: number | null
    quantidade_horas_intervalo_ate_fim: number | null
    intervalo_trabalho_reclamante: intervalo_trabalho | null
    quantidade_por_semana_intervalo_suprimido: number | null
    quantidade_horas_durante_semana: number | null
    valor_estimado_pedido: number | null
}

type adicional_noturno = {
    valor_estimado_pedido: number | null
}

type prontidao = {
    quantidade_vezes_semana: number | null
    valor_estimado_pedido: number | null
}

type sobreaviso = {
    quantidade_vezes_semana: number | null
    valor_estimado_pedido: number | null
}

type descaracterizacao_cargo_confianca = {
    cargo_reclamante: string | null
    atividades: string | null
    quantidade_horas_trabalhadas_semanalmente: number | null
}


export type pedido_jornada_trabalho = {
    carga_horaria_semanal_horas: number | null
    horario_inicio_jornada: string | null
    horario_termino_jornada: string | null
    horario_almoco: string | null
    hipoteses: hipotese[] | null
    horas_extras_nao_pagas: horas_extras_nao_pagas | null
    horas_extras_nao_pagas_segunda_a_sabado: horas_extras_nao_pagas_segunda_a_sabado | null
    horas_extras_nao_pagas_sabados: horas_extras_nao_pagas_sabado | null
    horas_extras_nao_pagas_segunda_a_sexta: horas_extras_nao_pagas_segunda_a_sexta | null
    horas_extras_pagas_parcialmente: horas_extras_pagas_parcialmente | null
    horas_extras_pagas_por_fora: horas_extras_pagas_por_fora | null
    labor_aos_domingos_sem_contraprestacao: labor_aos_domingos_sem_contraprestacao | null
    labor_em_feriados: labor_em_feriados | null
    jornada_trabalho_12_36: jornada_trabalho_12_36 | null
    supressao_intervalo_intrajornada: supressao_intervalo_intrajornada | null
    supressao_intervalo_interjornada: supressao_intervalo_interjornada | null
    adicional_noturno: adicional_noturno | null
    prontidao: prontidao | null
    sobreaviso: sobreaviso | null
    descaracterizacao_cargo_confianca: descaracterizacao_cargo_confianca | null
}
