export type pedido_adicional_insalubridade = {
    recebimento: null | 'nunca' | 'sempre_recebeu' | 'recebeu_em_parte'
    qual_grau_deveria_receber: null | 'Grau Mínimo (10%)' | 'Grau Médio (20%)' | 'Grau Máximo (40%)'
    recebia_em_que_grau: null | 'Grau Mínimo (10%)' | 'Grau Médio (20%)' | 'Grau Máximo (40%)'
    limpeza_banheiro: boolean | null
    recebeu_adicional_banheiro: boolean | null
    base_calculo_salario_minimo: | null | 'valor_previsto_norma_coletiva' | 'salario' | string
    valor_estimado_pedido: number | null
}
