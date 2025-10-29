"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaController = void 0;
const PessoaFactory_1 = require("../../services/PessoaService/PessoaFactory");
class PessoaController {
    async getAll(req, res) {
        try {
            const pessoaService = (0, PessoaFactory_1.PessoaFactory)();
            const response = await pessoaService.getAll(req.params.id_bpc);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async getById(req, res) {
        try {
            const pessoaService = (0, PessoaFactory_1.PessoaFactory)();
            const response = await pessoaService.getById(req.params.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async add(req, res) {
        try {
            const pessoaService = (0, PessoaFactory_1.PessoaFactory)();
            req.body = req.body.id_bpc;
            const response = await pessoaService.add(req.body);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async update(req, res) {
        try {
            const pessoaService = (0, PessoaFactory_1.PessoaFactory)();
            const response = await pessoaService.update(req.params.id, req.body);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async delete(req, res) {
        try {
            const pessoaService = (0, PessoaFactory_1.PessoaFactory)();
            const response = await pessoaService.delete(req.params.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
}
exports.PessoaController = PessoaController;
