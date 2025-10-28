"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabalhistaService = void 0;
class TrabalhistaService {
    constructor(trabalhistaRepository) {
        this.trabalhistaRepository = trabalhistaRepository;
    }
    async getAll(tenant_id) {
        return await this.trabalhistaRepository.getAll(tenant_id);
    }
    async getById(id) {
        return await this.trabalhistaRepository.getById(id);
    }
    async calcularTotalCausa(id) {
        const ticket = await this.trabalhistaRepository.getById(id);
        const valor_total_causa = (ticket.reconhecimento_vinculo_empregaticio?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_adicional_insalubridade?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_adicional_periculosidade?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_reversao_justa_causa?.valor_indenizacao ?? 0)
            + (ticket.pedido_reversao_justa_causa?.valor_rescisao ?? 0)
            + (ticket.pedido_diferencas_salariais?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_desvio_funcao?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_act_cct?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_acumulo_funcao?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_salario_substituicao?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_gorjetas?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_rescisao_indireta?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_ferias?.ausencia_pagamento_terco_constitucional?.valor_estimado_pagamento_em_dobro ?? 0)
            + (ticket.pedido_ferias?.ferias_interrompidas_injustamente_pedido?.valor_estimado_pagamento_em_dobro ?? 0)
            + (ticket.pedido_ferias?.ferias_nao_gozadas_pedido?.valor_estimado_pagamento_em_dobro ?? 0)
            + (ticket.pedido_ferias?.ferias_pagas_nao_gozadas?.valor_estimado_pagamento_em_dobro ?? 0)
            + (ticket.pedido_ferias?.pagamento_intempestivo_ferias?.valor_estimado_pagamento_em_dobro ?? 0)
            + (ticket.pedido_multa_477?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_falta_deposito_fgts?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_garantia_provisoria_emprego?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_aviso_previo?.ausencia_pagamento?.valor_estimado ?? 0)
            + (ticket.pedido_aviso_previo?.pagamento_a_menor?.valor_estimado ?? 0)
            + (ticket.pedido_aviso_previo?.trabalhado_periodo_superior_30_dias?.valor_estimado ?? 0)
            + (ticket.pedido_aviso_previo?.trabalhado_reducao_jornada_ultimos_7_dias?.valor_estimado ?? 0)
            + (ticket.pedido_jornada_trabalho?.adicional_noturno?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_jornada_trabalho?.horas_extras_nao_pagas?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_jornada_trabalho?.horas_extras_nao_pagas_sabados?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_jornada_trabalho?.horas_extras_nao_pagas_segunda_a_sabado?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_jornada_trabalho?.horas_extras_nao_pagas_segunda_a_sexta?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_jornada_trabalho?.horas_extras_pagas_parcialmente?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_jornada_trabalho?.jornada_trabalho_12_36?.valor_estimado_horas_extras ?? 0)
            + (ticket.pedido_jornada_trabalho?.labor_em_feriados?.valor_estimado_horas_trabalhadas ?? 0)
            + (ticket.pedido_jornada_trabalho?.prontidao?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_jornada_trabalho?.sobreaviso?.valor_estimado_pedido ?? 0)
            + (ticket.pedido_jornada_trabalho?.supressao_intervalo_intrajornada?.valor_estimado_pedido ?? 0);
        return { resultado: valor_total_causa };
    }
    async add(tenant_id) {
        const ticket = {
            id: crypto.randomUUID(),
            tenant_id,
            etapa: "",
            nome_reclamante: "",
            nacionalidade_reclamante: "",
            data_nascimento_reclamante: "",
            cpf_reclamante: "",
            estado_civil_reclamante: "",
            profissao_reclamante: "",
            cep_reclamante: "",
            rua_reclamante: "",
            numero_reclamante: "",
            complemento_reclamante: "",
            bairro_reclamante: "",
            cidade_reclamante: "",
            estado_reclamante: "",
            doenca_reclamante: "",
            reclamadas_pj: undefined,
            reclamadas_pf: undefined,
            cidade_acao: '',
            estado_acao: '',
            local_selecionado: "",
            local_selecionado_correspondente: "",
            data_inicio_contrato: "",
            data_fim_contrato: "",
            cargo: "",
            contrato_ativo: false,
            remuneracao: "",
            dados_contrato: {
                motivo_encerramento: "",
                aviso_previo: "",
                reversao_justa_causa: false,
                deixar_de_trabalhar: false,
                carteira_de_trabalho_anotada: false,
                verbas_rescisorias: {
                    pagamento_rescisao: "sim",
                    pagamento_prazo_dez_dias: false,
                    documentos_entregues_prazo_dez_dias: false,
                    pedir_multa_art_477: false
                }
            },
            blocos_pedidos_existentes: [],
            pedido_adicional_insalubridade: undefined,
            pedido_adicional_periculosidade: undefined,
            pedido_aviso_previo: undefined,
            pedido_danos_morais: undefined,
            pedido_diferencas_salariais: undefined,
            pedido_falta_deposito_fgts: undefined,
            pedido_ferias: undefined,
            pedido_garantia_provisoria_emprego: undefined,
            pedido_gorjetas: undefined,
            pedido_gratuidade_justica: undefined,
            pedido_jornada_trabalho: undefined,
            pedido_multa_477: undefined,
            pedido_rescisao_indireta: undefined,
            pedido_reversao_justa_causa: undefined,
            reconhecimento_vinculo_empregaticio: undefined,
            pedido_act_cct: undefined,
            pedido_acumulo_funcao: undefined,
            pedido_salario_substituicao: undefined,
            pedido_desvio_funcao: undefined,
            pedido_integracao_parcelas_pagas_dinheiro: undefined,
        };
        return await this.trabalhistaRepository.add(ticket);
    }
    async update(id, data) {
        return await this.trabalhistaRepository.update(id, data);
    }
    async delete(id) {
        return await this.trabalhistaRepository.delete(id);
    }
}
exports.TrabalhistaService = TrabalhistaService;
