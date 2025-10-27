export type reconhecimento_vinculo_empregaticio = {
    periodo_vinculo: null | 'todo_periodo' | 'parte_contrato'
    data_inicio: string
    data_fim: string
    pj: boolean | null
    representante_comercial: boolean | null
    empregado_clt: boolean | null
    contrato_representacao_comercial: boolean | null
    inscricao_core: boolean | null
    representacao_comercial_mei: boolean | null
    motorista_cargas: boolean | null
    motorista_veiculo_proprio: boolean | null
    motorista_inscricao_antt: boolean | null
    motorista_tres_anos_experiencia: boolean | null
    motorista_aplicativo: boolean | null
    valor_estimado_pedido: number | null
}