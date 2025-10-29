"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProdutoController = void 0;
const ProdutoSchema_1 = require("./ProdutoSchema");
const ProdutoFactory_1 = require("../../services/ProdutoService/ProdutoFactory");
class ProdutoController {
    async getAll(req, res) {
        try {
            const produtoService = (0, ProdutoFactory_1.ProdutoFactory)();
            const response = await produtoService.getAll();
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async add(req, res) {
        try {
            const data = await ProdutoSchema_1.ProdutoSchema.add().validate({ ...req.body }, { stripUnknown: true });
            const produtoService = (0, ProdutoFactory_1.ProdutoFactory)();
            const response = await produtoService.add(data);
            res.status(201).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async update(req, res) {
        try {
            const data = await ProdutoSchema_1.ProdutoSchema.update().validate({ ...req.body, ...req.params }, { stripUnknown: true });
            const produtoService = (0, ProdutoFactory_1.ProdutoFactory)();
            const response = await produtoService.update(data.id, data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async delete(req, res) {
        try {
            const data = await ProdutoSchema_1.ProdutoSchema.delete().validate({ ...req.params }, { stripUnknown: true });
            const produtoService = (0, ProdutoFactory_1.ProdutoFactory)();
            const response = await produtoService.delete(data.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
}
exports.ProdutoController = ProdutoController;
