import { Rmc } from "../../models/Rmc/Rmc";
import { IRmcRepository } from "../../repositories/rmcRepository/IRmcRepository";
import { IRmcService } from "./IRmcService";

export class RmcService implements IRmcService {
    constructor(private rmcRepository: IRmcRepository) { }

    async getAll(tenant_id: string): Promise<Rmc[]> {
        return this.rmcRepository.getAll(tenant_id)
    }

    async getById(id: string): Promise<Rmc> {
        return this.rmcRepository.getById(id)
    }

    async add(tenant_id: string): Promise<Rmc> {
        const rmc: Rmc = {
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
        }

        return this.rmcRepository.add(rmc)
    }

    async update(id: string, data: Partial<Rmc>): Promise<Rmc> {
        return this.rmcRepository.update(id, data)
    }

    async delete(id: string): Promise<string> {
        return this.rmcRepository.delete(id)
    }

}