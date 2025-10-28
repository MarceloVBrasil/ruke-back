import { Bpc } from "../../models/Bpc/Bpc";
import { IBpcRepository } from "../../repositories/bpcRepository/IBpcRepository";
import { IBpcService } from "./IBpcService";

export class BpcService implements IBpcService {
    constructor(private bpcRepository: IBpcRepository) { }

    async getAll(tenant_id: string): Promise<Bpc[]> {
        return await this.bpcRepository.getAll(tenant_id)
    }

    async getById(id: string): Promise<Bpc> {
        return await this.bpcRepository.getById(id)
    }

    async add(tenant_id: string): Promise<Bpc> {
        const bpc: Bpc = {
            id: crypto.randomUUID(),
            tenant_id,
            nome_cliente: "",
            bank_name: "",
            address_client: "",
            cpf_cliente: "",
            rg_cliente: "",
            cep: "",
            endereco: "",
            bairro: "",
            complemento: "",
            cidade: "",
            estado: "",
            numero: "",
            cnpj: "",
            estado_civil: "",
            profissao: "",
            renda_parte_autora: "",
            numero_beneficio: "",
            secao_judiciaria_estado: "",
            idade_cliente_parte_autora: "",
            data_nascimento_cliente_parte_autora: "",
            data_requerimento: "",
            doencas: [],
            pessoas: [],
        }

        return this.bpcRepository.add(bpc)
    }

    async update(id: string, data: Partial<Bpc>): Promise<Bpc> {
        return this.bpcRepository.update(id, data)
    }

    async delete(id: string): Promise<string> {
        return this.bpcRepository.delete(id)
    }

}