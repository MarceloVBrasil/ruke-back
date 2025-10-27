import { Doenca } from "../Doenca/Doenca"
import { Pessoa } from "../Pessoa/Pessoa"

export interface Bpc {
    id: string
    tenant_id: string
    nome_cliente: string
    bank_name: string
    cpf_client: string
    address_client: string
    doencas: Doenca[]
    pessoas: Pessoa[]
}