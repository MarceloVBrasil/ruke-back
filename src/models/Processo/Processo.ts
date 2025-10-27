export interface Processo {
    id: string
    tenant_id: string
    numero_processo: string
    orgao_julgador: string
    classe: string
    cliente_principal: string
    contrario_principal: string
    data_ajuizamento: string
    movimentacoes: { codigo: string, nome: string, dataHora: Date }[]
}