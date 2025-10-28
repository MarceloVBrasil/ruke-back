export class TenantsService {
    tenantsRepository;
    constructor(tenantsRepository) {
        this.tenantsRepository = tenantsRepository;
    }
    async getAll() {
        return this.tenantsRepository.getAll();
    }
    async getById(tenantId) {
        return this.tenantsRepository.getById(tenantId);
    }
    async add() {
        const tenant = { id: crypto.randomUUID() };
        return this.tenantsRepository.add(tenant);
    }
    async update(tenantId, data) {
        return this.tenantsRepository.update(tenantId, data);
    }
    async delete(tenantId) {
        return this.tenantsRepository.delete(tenantId);
    }
    async cancelarTodasAssinaturas() {
        return this.tenantsRepository.cancelarTodasAssinaturas();
    }
    async cancelarAssinaturaProduto(produto_id) {
        return this.tenantsRepository.cancelarAssinaturaProduto(produto_id);
    }
}
