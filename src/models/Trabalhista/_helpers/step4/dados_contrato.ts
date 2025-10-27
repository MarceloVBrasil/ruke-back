export type dados_contrato = {
    motivo_encerramento: string,
    aviso_previo: string,
    reversao_justa_causa: boolean,
    deixar_de_trabalhar: boolean,
    carteira_de_trabalho_anotada: boolean,
    verbas_rescisorias: {
        pagamento_rescisao: 'sim' | 'nao' | 'parcial',
        pagamento_prazo_dez_dias: boolean,
        documentos_entregues_prazo_dez_dias: boolean,
        pedir_multa_art_477: boolean
    }
}