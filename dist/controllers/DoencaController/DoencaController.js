"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DoencaController = void 0;
const DoencaFactory_1 = require("../../services/DoencaService/DoencaFactory");
class DoencaController {
    async getAll(req, res) {
        try {
            const doencaService = (0, DoencaFactory_1.DoencaFactory)();
            const response = await doencaService.getAll();
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async getById(req, res) {
        try {
            const doencaService = (0, DoencaFactory_1.DoencaFactory)();
            const response = await doencaService.getById(req.params.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async add(req, res) {
        try {
            const doencaService = (0, DoencaFactory_1.DoencaFactory)();
            req.body = req.params.id_bpc;
            const response = await doencaService.add(req.body);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async update(req, res) {
        try {
            const doencaService = (0, DoencaFactory_1.DoencaFactory)();
            const response = await doencaService.update(req.params.id, req.body);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async delete(req, res) {
        try {
            const doencaService = (0, DoencaFactory_1.DoencaFactory)();
            const response = await doencaService.delete(req.params.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
}
exports.DoencaController = DoencaController;
