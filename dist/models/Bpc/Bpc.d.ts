import { Doenca } from "../Doenca/Doenca";
import { Pessoa } from "../Pessoa/Pessoa";
export interface Bpc {
    id: string;
    tenant_id: string;
    nome_cliente: string;
    cpf_cliente: string;
    rg_cliente: string;
    cep: string;
    endereco: string;
    bairro: string;
    complemento: string;
    cidade: string;
    estado: string;
    numero: string;
    cnpj: string;
    estado_civil: string;
    profissao: string;
    renda_parte_autora: string;
    numero_beneficio: string;
    secao_judiciaria_estado: string;
    idade_cliente_parte_autora: string;
    data_nascimento_cliente_parte_autora: string;
    data_requerimento: string;
    bank_name: string;
    address_client: string;
    doencas: Doenca[];
    pessoas: Pessoa[];
}
//# sourceMappingURL=Bpc.d.ts.map