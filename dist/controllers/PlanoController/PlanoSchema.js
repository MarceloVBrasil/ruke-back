"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoSchema = void 0;
const yup_1 = require("yup");
const getAllByProdutoIdSchema = (0, yup_1.object)().shape({
    produto_id: (0, yup_1.string)().required('produto_id é obrigatório')
});
const getByIdSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required('id é obrigatório')
});
const addSchema = (0, yup_1.object)().shape({
    produto_id: (0, yup_1.string)().required('produto_id é obrigatório'),
    nome: (0, yup_1.string)().required('nome é obrigatório'),
    descricao: (0, yup_1.string)().required('descricao é obrigatório'),
    limite_peticoes: (0, yup_1.string)().required('limite_peticoes é obrigatório'),
    limite_hipossuficiencia: (0, yup_1.string)().required('limite_hipossuficiencia é obrigatório'),
    limite_contratos: (0, yup_1.string)().required('lemite_contratos é obrigatório'),
    limite_procuracoes: (0, yup_1.string)().required('limite_procuracoes é obrigatório'),
    preco: (0, yup_1.string)().required('preco é obrigatório'),
    tipo_cobranca: (0, yup_1.string)().required('tipo_cobranca é obrigatória'),
});
const updateSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required('id é obrigatório'),
    produto_id: (0, yup_1.string)(),
    nome: (0, yup_1.string)(),
    descricao: (0, yup_1.string)(),
    limite_peticoes: (0, yup_1.string)(),
    limite_hipossuficiencia: (0, yup_1.string)(),
    limite_contratos: (0, yup_1.string)(),
    limite_procuracoes: (0, yup_1.string)(),
    preco: (0, yup_1.string)(),
    tipo_cobranca: (0, yup_1.string)(),
});
const deleteSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required('id do plano é obrigatório')
});
class PlanoSchema {
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
exports.PlanoSchema = PlanoSchema;
