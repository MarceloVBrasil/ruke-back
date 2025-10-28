import { object, string } from "yup";
const addSchema = object().shape({
    nome: string().required('nome é obrigatório')
});
const updateSchema = object().shape({
    id: string().required('id é obrigatório'),
    nome: string()
});
const deleteSchema = object().shape({
    id: string().required()
});
export class ProdutoSchema {
    static add() {
        return addSchema;
    }
    static update() {
        return updateSchema;
    }
    static delete() {
        return deleteSchema;
    }
}
