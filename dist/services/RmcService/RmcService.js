"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RmcService = void 0;
class RmcService {
    constructor(rmcRepository) {
        this.rmcRepository = rmcRepository;
    }
    async getAll(tenant_id) {
        return this.rmcRepository.getAll(tenant_id);
    }
    async getById(id) {
        return this.rmcRepository.getById(id);
    }
    async add(tenant_id) {
        const rmc = {
            id: crypto.randomUUID(),
            tenant_id,
            name_client: "",
            calculation_base: "",
            committed_value: "",
            bank_name: "",
            cpf_client: "",
            address_client: "",
            city_client: "",
            inclusion_date: "",
            contract_value: "",
            installment_value: "",
            contract_number: "",
            type_process: ""
        };
        return this.rmcRepository.add(rmc);
    }
    async update(id, data) {
        return this.rmcRepository.update(id, data);
    }
    async delete(id) {
        return this.rmcRepository.delete(id);
    }
}
exports.RmcService = RmcService;
