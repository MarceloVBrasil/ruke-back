"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperendividamentoService = void 0;
class SuperendividamentoService {
    constructor(superendividamentoRepository) {
        this.superendividamentoRepository = superendividamentoRepository;
    }
    async getAll(tenantId) {
        return this.superendividamentoRepository.getAll(tenantId);
    }
    async getById(id) {
        return this.superendividamentoRepository.getById(id);
    }
    async add(tenant_id) {
        const superendividamento = {
            id: crypto.randomUUID(),
            tenant_id,
            nome_cliente: "",
            cpf_cliente: "",
            rg_cliente: "",
            email_cliente: "",
            data_nascimento_cliente: "",
            estado_civil_cliente: "",
            profissao_cliente: "",
            cep_cliente: "",
            rua_cliente: "",
            numero_cliente: "",
            complemento_cliente: "",
            bairro_cliente: "",
            cidade_cliente: "",
            estado_cliente: "",
            acao_ajuizada_em: "",
            cidade_acao: "",
            estado_acao: "",
            bancos_credores: [],
            pessoas_fisicas_credores: [],
            pessoas_juridicas_credoras: [],
            fontes_de_renda_cliente: [],
            familiares_cliente: [],
            veiculos_cliente: [],
            imoveis_cliente: [],
            outros_bens_cliente: [],
            razoes_endividamento: [],
            dividas_consumo: [],
            sugestao_plano_pagamento: false,
            gastos_existenciais: [],
            acoes_judiciais_cliente: [],
            documentos_faltando: [],
            valor_total_causa: 0,
            advogado: "",
            oab_advogado: "",
            local_peticao: "",
            data_peticao: ""
        };
        return this.superendividamentoRepository.add(superendividamento);
    }
    async update(id, data) {
        return this.superendividamentoRepository.update(id, data);
    }
    async delete(id) {
        return this.superendividamentoRepository.delete(id);
    }
}
exports.SuperendividamentoService = SuperendividamentoService;
