"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoController = void 0;
const PlanoSchema_1 = require("./PlanoSchema");
const PlanoFactory_1 = require("../../services/PlanoService/PlanoFactory");
const planoService = (0, PlanoFactory_1.PlanoFactory)();
class PlanoController {
    async getAllByProdutoId(req, res) {
        try {
            const data = await PlanoSchema_1.PlanoSchema.getAllByProdutoId().validate({ ...req.params }, { stripUnknown: true });
            const response = await planoService.getAllByProdutoId(data.produto_id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async getById(req, res) {
        try {
            const data = await PlanoSchema_1.PlanoSchema.getById().validate({ ...req.params }, { stripUnknown: true });
            const response = await planoService.getById(data.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async add(req, res) {
        try {
            const data = await PlanoSchema_1.PlanoSchema.add().validate({ ...req.params }, { stripUnknown: true });
            const response = await planoService.add(data);
            res.status(201).json({ message: 'plano adicionado com sucesso' });
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async update(req, res) {
        try {
            const data = await PlanoSchema_1.PlanoSchema.update().validate({ ...req.params }, { stripUnknown: true });
            const response = await planoService.update(data.id, data);
            res.status(200).json({ message: 'plano atualizado com sucesso' });
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async delete(req, res) {
        try {
            const data = await PlanoSchema_1.PlanoSchema.delete().validate({ ...req.params }, { stripUnknown: true });
            const response = await planoService.delete(data.id);
            res.status(200).json({ message: 'plano deletado com sucesso' });
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
}
exports.PlanoController = PlanoController;
