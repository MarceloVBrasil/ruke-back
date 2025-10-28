import { object, string } from "yup";
const getAllByProdutoIdSchema = object().shape({
    produto_id: string().required('produto_id é obrigatório')
});
const getByIdSchema = object().shape({
    id: string().required('id é obrigatório')
});
const addSchema = object().shape({
    produto_id: string().required('produto_id é obrigatório'),
    nome: string().required('nome é obrigatório'),
    descricao: string().required('descricao é obrigatório'),
    limite_peticoes: string().required('limite_peticoes é obrigatório'),
    limite_hipossuficiencia: string().required('limite_hipossuficiencia é obrigatório'),
    limite_contratos: string().required('lemite_contratos é obrigatório'),
    limite_procuracoes: string().required('limite_procuracoes é obrigatório'),
    preco: string().required('preco é obrigatório'),
    tipo_cobranca: string().required('tipo_cobranca é obrigatória'),
});
const updateSchema = object().shape({
    id: string().required('id é obrigatório'),
    produto_id: string(),
    nome: string(),
    descricao: string(),
    limite_peticoes: string(),
    limite_hipossuficiencia: string(),
    limite_contratos: string(),
    limite_procuracoes: string(),
    preco: string(),
    tipo_cobranca: string(),
});
const deleteSchema = object().shape({
    id: string().required('id do plano é obrigatório')
});
export class PlanoSchema {
    static getAllByProdutoId() {
        return getAllByProdutoIdSchema;
    }
    static getById() {
        return getByIdSchema;
    }
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
