export type pedido_multa_477 = {
    opcao_pagamento_verbas_rescisoria: opcao_pagamento_verbas_rescisorias | null;
    pagas_fora_do_prazo_legal_pedido: pagas_fora_do_prazo_legal_pedido | null;
    pagas_forma_parcelada_pedido: pagas_forma_parcelada_pedido | null;
    nao_pagas_dentro_prazo_legal: nao_pagas_dentro_prazo_legal | null;
    valor_estimado_pedido: number | null;
};
export type opcao_pagamento_verbas_rescisorias = 'nao_pagas_dentro_prazo' | 'pagas_fora_do_prazo_legal' | 'pagas_forma_parcelada';
export type pagas_fora_do_prazo_legal_pedido = {
    projecao_aviso_previo: boolean | null;
    data_projecao: string | null;
    data_pagamento_verbas: string | null;
};
export type pagas_forma_parcelada_pedido = {
    projecao_aviso_previo: boolean | null;
    data_projecao: string | null;
    quantidade_parcelas: number | null;
};
export type nao_pagas_dentro_prazo_legal = {
    projecao_aviso_previo: boolean | null;
    data_projecao: string | null;
};
//# sourceMappingURL=pedido_multa_477.d.ts.map