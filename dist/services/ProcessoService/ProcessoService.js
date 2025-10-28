"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoService = void 0;
class ProcessoService {
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
exports.ProcessoService = ProcessoService;
