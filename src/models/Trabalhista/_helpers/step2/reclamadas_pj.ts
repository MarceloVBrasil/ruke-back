import { razao_inclusao_polo_passivo } from "./razao_inclusao_polo_passivo"

export type reclamada_pj = {
    id: string
    nome: string
    cnpj: string
    cep: string
    estado: string
    cidade: string
    bairro: string
    rua: string
    numero: number
    complemento: string
    principal: boolean
    razao_inclusao_polo_passivo: null | razao_inclusao_polo_passivo
}