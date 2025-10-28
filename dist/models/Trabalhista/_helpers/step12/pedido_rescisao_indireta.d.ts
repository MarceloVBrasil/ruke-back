export type pedido_rescisao_indireta = {
    interrompeu_as_atividades: boolean | null;
    continua_trabalhando: boolean | null;
    interrupcao_atividades_pedido: interrupcao_atividades_pedido | null;
    continua_trabalhando_pedido: continua_trabalhando_pedido | null;
    valor_estimado_pedido: number | null;
};
export type interrupcao_atividades_pedido = {
    alineas: string[] | null;
    data_interrupcao: string | null;
    ultimo_dia_trabalhando: string | null;
    projecao_aviso_previo: string | null;
    falta_grave: string | null;
};
export type continua_trabalhando_pedido = {
    alineas: string[] | null;
    falta_grave: string | null;
};
//# sourceMappingURL=pedido_rescisao_indireta.d.ts.map