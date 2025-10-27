import { object, string } from "yup"

const addSchema = object().shape({
    nome: string(),
    email: string(),
    telefone: string(),
    nivel: string(),
    numero_documento: string(),
    oab: string(),
    oab_estado: string()
})

const updateSchema = object().shape({
    id: string().required('id é obrigatório'),
    nome: string().required('nome é obrigatório'),
    email: string().required('email é obrigatório'),
    telefone: string().required('telefone é obrigatório'),
    nivel: string().required('nivel é obrigatório'),
    numero_documento: string().required('cpf é obrigatório'),
    oab: string().required('oab é obrigatório'),
    oab_estado: string().required('oab_estado é obrigatório')
})

const deleteSchema = object().shape({
    id: string().required('id é obrigatório')
})

export class UserSchema {
    static add() {
        return addSchema
    }

    static update() {
        return updateSchema
    }

    static delete() {
        return deleteSchema
    }
}