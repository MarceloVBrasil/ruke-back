export class ProcessoService {
    processoRepository;
    constructor(processoRepository) {
        this.processoRepository = processoRepository;
    }
    async getProcessos(tenant_id) {
        return await this.processoRepository.getProcessos(tenant_id);
    }
    async getMovimentacoes() {
        return this.processoRepository.getMovimentacoes();
    }
    async salvar(data) {
        data.id = crypto.randomUUID();
        return this.processoRepository.salvar(data);
    }
    async filtrar(data) {
        return this.processoRepository.filtrar(data);
    }
}
