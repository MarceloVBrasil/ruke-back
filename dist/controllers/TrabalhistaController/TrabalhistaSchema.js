"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrabalhistaSchema = void 0;
const yup_1 = require("yup");
const updateSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().uuid('uuid inválido').required('id é obrigatório'),
    tenant_id: (0, yup_1.string)().uuid('uuid inválido').required('id é obrigatório'),
    nome_reclamante: (0, yup_1.string)(),
    nacionalidade_reclamante: (0, yup_1.string)(),
    data_nascimento_reclamante: (0, yup_1.string)(),
    cpf_reclamante: (0, yup_1.string)(),
    estado_civil_reclamante: (0, yup_1.string)(),
    profissao_reclamante: (0, yup_1.string)(),
    cep_reclamante: (0, yup_1.string)(),
    rua_reclamante: (0, yup_1.string)(),
    numero_reclamante: (0, yup_1.string)(),
    complemento_reclamante: (0, yup_1.string)(),
    bairro_reclamante: (0, yup_1.string)(),
    cidade_reclamante: (0, yup_1.string)(),
    estado_reclamante: (0, yup_1.string)(),
    doenca_reclamante: (0, yup_1.string)(),
    reclamadas_pj: (0, yup_1.mixed)().nullable(),
    reclamadas_pf: (0, yup_1.mixed)().nullable(),
    cidade_acao: (0, yup_1.string)(),
    estado_acao: (0, yup_1.string)(),
    local_selecionado: (0, yup_1.string)(),
    local_selecionado_correspondente: (0, yup_1.string)(),
    data_inicio_contrato: (0, yup_1.string)(),
    data_fim_contrato: (0, yup_1.string)(),
    contrato_ativo: (0, yup_1.boolean)(),
    remuneracao: (0, yup_1.number)(),
    cargo: (0, yup_1.string)(),
    blocos_pedidos_existentes: (0, yup_1.array)().of((0, yup_1.string)()),
    pedido_adicional_insalubridade: (0, yup_1.mixed)().nullable(),
    pedido_adicional_periculosidade: (0, yup_1.mixed)().nullable(),
    pedido_aviso_previo: (0, yup_1.mixed)().nullable(),
    pedido_danos_morais: (0, yup_1.mixed)().nullable(),
    pedido_diferencas_salariais: (0, yup_1.mixed)().nullable(),
    pedido_falta_deposito_fgts: (0, yup_1.mixed)().nullable(),
    pedido_ferias: (0, yup_1.mixed)().nullable(),
    pedido_garantia_provisoria_emprego: (0, yup_1.mixed)().nullable(),
    pedido_gorjetas: (0, yup_1.mixed)().nullable(),
    pedido_gratuidade_justica: (0, yup_1.mixed)().nullable(),
    pedido_jornada_trabalho: (0, yup_1.mixed)().nullable(),
    pedido_multa_477: (0, yup_1.mixed)().nullable(),
    pedido_rescisao_indireta: (0, yup_1.mixed)().nullable(),
    pedido_reversao_justa_causa: (0, yup_1.mixed)().nullable(),
    reconhecimento_vinculo_empregaticio: (0, yup_1.mixed)().nullable(),
    pedido_act_cct: (0, yup_1.mixed)().nullable(),
    pedido_acumulo_funcao: (0, yup_1.mixed)().nullable(),
    pedido_salario_substituicao: (0, yup_1.mixed)().nullable(),
    pedido_desvio_funcao: (0, yup_1.mixed)().nullable(),
    pedido_integracao_parcelas_pagas_dinheiro: (0, yup_1.mixed)().nullable(),
});
class TrabalhistaSchema {
    static update() {
        return updateSchema;
    }
}
exports.TrabalhistaSchema = TrabalhistaSchema;
