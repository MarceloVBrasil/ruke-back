import { array, mixed, object, string } from "yup"

const addSchema = object().shape({
    tenant_id: string().required('tenant_id é obrigatório'),
    numero_processo: string().required('numero_processo é obrigatório'),
    orgao_julgador: string().required('orgao_julgador é obrigatório'),
    classe: string().required('classe é obrigatória'),
    cliente_principal: string().required('cliente_principal é obrigatório'),
    contrario_principal: string().required('contrário_principal é obrigatório'),
    movimentacoes: array().of(mixed()).default([])
})

const filtarSchema = object().shape({
    numero_processo: string(),
    orgao_julgador: string(),
    classe: string(),
    cliente_principal: string(),
    contrario_principal: string(),
    movimentacoes: array().of(mixed())
})

export class ProcessoSchema {
    static add() {
        return addSchema
    }

    static filtrar() {
        return filtarSchema
    }
}