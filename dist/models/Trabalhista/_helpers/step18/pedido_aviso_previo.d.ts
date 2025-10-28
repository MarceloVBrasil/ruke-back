type pagamento_a_menor = {
    quantidade_dias_faltaram_ser_pagos: number | null;
    valor_estimado: number | null;
};
type trabalhado_periodo_superior_30_dias = {
    quantidade_dias_efetivamente_pagos: number | null;
    quantidade_dias_faltaram_ser_pagos: number | null;
    valor_estimado: number | null;
};
type ausencia_pagamento = {
    quantidade_dias_deveriam_ser_pagos: number | null;
    valor_estimado: number | null;
};
type trabalhado_reducao_jornada_ultimos_7_dias = {
    data_projecao_termino: string | null;
    valor_estimado: number | null;
};
type fundamento = 'ausencia_pagamento' | 'pagamento_a_menor' | 'trabalhado_periodo_superior_30_dias' | 'trabalhado_reducao_jornada_ultimos_7_dias';
export type pedido_aviso_previo = {
    data_dispensa_sem_justa_causa: string | null;
    quantidade_dias_previo_devidos: number | null;
    fundamento: fundamento | null;
    pagamento_a_menor: pagamento_a_menor | null;
    trabalhado_periodo_superior_30_dias: trabalhado_periodo_superior_30_dias | null;
    ausencia_pagamento: ausencia_pagamento | null;
    trabalhado_reducao_jornada_ultimos_7_dias: trabalhado_reducao_jornada_ultimos_7_dias | null;
};
export {};
//# sourceMappingURL=pedido_aviso_previo.d.ts.map