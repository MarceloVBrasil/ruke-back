export class BpcService {
    bpcRepository;
    constructor(bpcRepository) {
        this.bpcRepository = bpcRepository;
    }
    async getAll(tenant_id) {
        return await this.bpcRepository.getAll(tenant_id);
    }
    async getById(id) {
        return await this.bpcRepository.getById(id);
    }
    async add(tenant_id) {
        const bpc = {
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
        };
        return this.bpcRepository.add(bpc);
    }
    async update(id, data) {
        return this.bpcRepository.update(id, data);
    }
    async delete(id) {
        return this.bpcRepository.delete(id);
    }
}
