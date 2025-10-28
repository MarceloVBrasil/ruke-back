export class InMemoryProcessoRepository {
    processos = [];
    async getProcessos(tenant_id) {
        return this.processos.filter(p => p.tenant_id === tenant_id);
    }
    async getMovimentacoes() {
        return this.processos;
    }
    async salvar(data) {
        this.processos.push(data);
        return data;
    }
    async filtrar(data) {
        let processos = this.processos;
        const numero_processo = data.numero_processo;
        if (numero_processo)
            processos = processos.filter(p => p.numero_processo === numero_processo);
        const orgao_julgador = data.orgao_julgador;
        if (orgao_julgador)
            processos = processos.filter(p => p.orgao_julgador === orgao_julgador);
        const classe = data.classe;
        if (classe)
            processos = processos.filter(p => p.classe === classe);
        const cliente_principal = data.cliente_principal;
        if (cliente_principal)
            processos = processos.filter(p => p.cliente_principal === cliente_principal);
        const contrario_principal = data.contrario_principal;
        if (contrario_principal)
            processos = processos.filter(p => p.contrario_principal === contrario_principal);
        return processos;
    }
}
