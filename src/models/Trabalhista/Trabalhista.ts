import { pedido_act_cct } from "./_helpers/step10/pedido_act_cct"
import { pedido_acumulo_funcao } from "./_helpers/step10/pedido_acumulo_funcao"
import { pedido_desvio_funcao } from "./_helpers/step10/pedido_desvio_funcao"
import { pedido_diferenca_salarial } from "./_helpers/step10/pedido_diferencas_salarias"
import { pedido_salario_substituicao } from "./_helpers/step10/pedido_salario_substituicao"
import { pedido_gorjetas } from "./_helpers/step11/pedido_gorjetas"
import { pedido_rescisao_indireta } from "./_helpers/step12/pedido_rescisao_indireta"
import { pedido_ferias } from "./_helpers/step13/pedido_ferias"
import { pedido_multa_477 } from "./_helpers/step14/pedido_multa_477"
import { pedido_gratuidade_justica } from "./_helpers/step15/pedido_gratuidade_justica"
import { pedido_falta_deposito_fgts } from "./_helpers/step16/pedido_falta_deposito_fgts"
import { pedido_garantia_provisoria_emprego } from "./_helpers/step17/pedido_garantia_provisoria_emprego"
import { pedido_aviso_previo } from "./_helpers/step18/pedido_aviso_previo"
import { pedido_jornada_trabalho } from "./_helpers/step19/pedido_jornada_trabalho"
import { reclamada_pf } from "./_helpers/step2/reclamadas_pf"
import { reclamada_pj } from "./_helpers/step2/reclamadas_pj"
import { pedido_danos_morais } from "./_helpers/step20/pedido_danos_morais"
import { pedido_integracao_salarial } from "./_helpers/step21/pedido_integracao_parcelas_pagas_dinheiro"
import { dados_contrato } from "./_helpers/step4/dados_contrato"
import { reconhecimento_vinculo_empregaticio } from "./_helpers/step6/reconhecimento_vinculo_empregaticio"
import { pedido_adicional_insalubridade } from "./_helpers/step7/pedido_adicional_insalubridade"
import { pedido_adicional_periculosidade } from "./_helpers/step8/pedido_adicional_periculosidade"
import { pedido_reversao_justa_causa } from "./_helpers/step9/pedido_reversao_justa_causa"

export interface Trabalhista {
    id: string
    tenant_id: string
    etapa: string

    // 1
    nome_reclamante: string
    nacionalidade_reclamante: string
    data_nascimento_reclamante: string
    cpf_reclamante: string
    estado_civil_reclamante: string
    profissao_reclamante: string
    cep_reclamante: string
    rua_reclamante: string
    numero_reclamante: string
    complemento_reclamante: string
    bairro_reclamante: string
    cidade_reclamante: string
    estado_reclamante: string
    doenca_reclamante: string

    //2
    reclamadas_pj?: reclamada_pj[]
    reclamadas_pf?: reclamada_pf[]

    //3
    cidade_acao: string
    estado_acao: string
    local_selecionado: string
    local_selecionado_correspondente: string

    //4
    data_inicio_contrato: string
    data_fim_contrato: string
    contrato_ativo: boolean
    remuneracao: string
    cargo: string
    dados_contrato: dados_contrato

    //5
    blocos_pedidos_existentes: string[]

    //6
    reconhecimento_vinculo_empregaticio?: reconhecimento_vinculo_empregaticio

    //7
    pedido_adicional_insalubridade?: pedido_adicional_insalubridade

    //8
    pedido_adicional_periculosidade?: pedido_adicional_periculosidade

    //9
    pedido_reversao_justa_causa?: pedido_reversao_justa_causa

    //10
    pedido_diferencas_salariais?: pedido_diferenca_salarial
    pedido_desvio_funcao?: pedido_desvio_funcao
    pedido_act_cct?: pedido_act_cct
    pedido_acumulo_funcao?: pedido_acumulo_funcao
    pedido_salario_substituicao?: pedido_salario_substituicao

    //11
    pedido_gorjetas?: pedido_gorjetas

    //12
    pedido_rescisao_indireta?: pedido_rescisao_indireta

    //13
    pedido_ferias?: pedido_ferias

    //14
    pedido_multa_477?: pedido_multa_477

    //15
    pedido_gratuidade_justica?: pedido_gratuidade_justica

    //16
    pedido_falta_deposito_fgts?: pedido_falta_deposito_fgts

    //17
    pedido_garantia_provisoria_emprego?: pedido_garantia_provisoria_emprego

    //18
    pedido_aviso_previo?: pedido_aviso_previo

    //19
    pedido_jornada_trabalho?: pedido_jornada_trabalho

    //20
    pedido_danos_morais?: pedido_danos_morais

    //21
    pedido_integracao_parcelas_pagas_dinheiro?: pedido_integracao_salarial
}