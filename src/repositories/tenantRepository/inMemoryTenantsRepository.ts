import { Tenant } from "../../models/Tenant/Tenant";
import { ITenantRepository } from "./ITenantRepository";

export enum IN_MEMORY_TENANT_IDS {
    MARCELO_BRASIL = "faefe160-0c9b-4634-95ab-007c9286bbba"
}


export class InMemoryTenantsRepository implements ITenantRepository {

    private _tenants: Tenant[] = [
        {
            id: IN_MEMORY_TENANT_IDS.MARCELO_BRASIL,
            nome: "Marcelo Brasil",
            cnpj: "46.954.522/0001-23",
            razao_social: "Asteroide VB",
            cpf: "262.885.090-78",
            cep: "92320-177",
            rua: "Rua Alameda das Corticeiras",
            numero: "10",
            complemento: "Em frente a Igreja Matriz",
            bairro: "Mato Grande",
            cidade: "Canoas",
            estado: "RS",

            danos_morais_rmc: 1,
            dados_ourtorgado_procuracao_rmc: "dados outorgado procuracao rmc",
            dados_contratado_contrato_honorarios_rmc: "dados contratado contrato honorarios rmc",
            percentual_exito_rmc: 2,
            parcela_fixa_rmc: 275,
            indice_correcao_monetaria_rmc: 'ipca',
            juros_de_mora_calculo_rmc: 10,

            parcela_fixa_bpc: 1250,
            percentual_exito_bpc: 2,

            quantidade_usuarios_agenda: 10,

            percentual_exito_fraude_em_boletos: 1,
            parcela_fixa_fraude_em_boletos: 1340,

            termo_uso_sistema: false,
        }
    ]

    async getAll(): Promise<Tenant[]> {
        return this._tenants
    }

    async getById(tenantId: string): Promise<Tenant> {
        return this._tenants.find(t => t.id === tenantId)!
    }

    async add(tenant: Tenant): Promise<Tenant> {
        this._tenants.push(tenant)
        return tenant
    }

    async update(tenantId: string, data: Partial<Tenant>): Promise<Tenant> {
        const updated_tenant = this._tenants.find(t => t.id === tenantId)
        const tenant_index = this._tenants.findIndex(t => t.id === tenantId)
        this._tenants[tenant_index] = { id: tenantId, ...updated_tenant, ...data } as Tenant
        return this._tenants[tenant_index]
    }

    async delete(tenantId: string): Promise<void> {
        this._tenants = this._tenants.filter(t => t.id !== tenantId)
    }

    async cancelarTodasAssinaturas(): Promise<void> {
        return
    }

    async cancelarAssinaturaProduto(produto_id: string): Promise<void> {
        return
    }

}