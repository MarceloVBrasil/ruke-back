"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoSchema = void 0;
const yup_1 = require("yup");
const addSchema = (0, yup_1.object)().shape({
    nome: (0, yup_1.string)().required('nome é obrigatório')
});
const updateSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required('id é obrigatório'),
    nome: (0, yup_1.string)()
});
const deleteSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required()
});
class ProdutoSchema {
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
exports.ProdutoSchema = ProdutoSchema;
