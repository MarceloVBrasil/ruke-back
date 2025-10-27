import { periodo } from "../step10/funcao"

export type pedido_gorjetas = {
    pagamento_por_fora: boolean | null
    pagamento_retido: boolean | null
    valor_estimado_pedido: number | null
    pagamento_retido_pedido: pagamento_retido_pedido | null
    pagamento_por_fora_pedido: pagamento_por_fora_pedido | null
}

export type pagamento_retido_pedido = {
    percentual_gorjetas: number | null
    pedido_restituicao: boolean | null
    valor_medio_mensal: number | null
    valor_total_estimado_gorjetas: number | null
}

export type pagamento_por_fora_pedido = {
    valor_medio: number | null
    periodo: periodo
    valor_integrado_salario: boolean | null
    data_inicial: string | null
    data_final: string | null
    valor_total_estimado_gorjetas: number | null
}