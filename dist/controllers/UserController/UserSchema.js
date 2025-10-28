"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const yup_1 = require("yup");
const addSchema = (0, yup_1.object)().shape({
    nome: (0, yup_1.string)(),
    email: (0, yup_1.string)(),
    telefone: (0, yup_1.string)(),
    nivel: (0, yup_1.string)(),
    numero_documento: (0, yup_1.string)(),
    oab: (0, yup_1.string)(),
    oab_estado: (0, yup_1.string)()
});
const updateSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required('id é obrigatório'),
    nome: (0, yup_1.string)().required('nome é obrigatório'),
    email: (0, yup_1.string)().required('email é obrigatório'),
    telefone: (0, yup_1.string)().required('telefone é obrigatório'),
    nivel: (0, yup_1.string)().required('nivel é obrigatório'),
    numero_documento: (0, yup_1.string)().required('cpf é obrigatório'),
    oab: (0, yup_1.string)().required('oab é obrigatório'),
    oab_estado: (0, yup_1.string)().required('oab_estado é obrigatório')
});
const deleteSchema = (0, yup_1.object)().shape({
    id: (0, yup_1.string)().required('id é obrigatório')
});
class UserSchema {
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
exports.UserSchema = UserSchema;
