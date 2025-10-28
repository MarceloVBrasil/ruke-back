"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperendividamentoController = void 0;
const SuperendividamentoFactory_1 = require("../../services/SuperendividamentoService/SuperendividamentoFactory");
const SuperendividamentoSchema_1 = require("./SuperendividamentoSchema");
class SuperendividamentoController {
    async getAll(req, res) {
        try {
            const superendividamentoService = (0, SuperendividamentoFactory_1.SuperendividamentoFactory)();
            const response = await superendividamentoService.getAll(req.body.tenantId);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async getById(req, res) {
        try {
            const superendividamentoService = (0, SuperendividamentoFactory_1.SuperendividamentoFactory)();
            const response = await superendividamentoService.getById(req.params.id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async add(req, res) {
        try {
            const superendividamentoService = (0, SuperendividamentoFactory_1.SuperendividamentoFactory)();
            const response = await superendividamentoService.add(req.body.tenantId);
            return res.status(201).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async update(req, res) {
        try {
            const superendividamentoService = (0, SuperendividamentoFactory_1.SuperendividamentoFactory)();
            const data = await SuperendividamentoSchema_1.SuperendividamentoSchema.update().validate({ ...req.params, ...req.body, tenant_id: req.body.tenantId }, { stripUnknown: true });
            const response = await superendividamentoService.update(data.id, data);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async delete(req, res) {
        try {
            const superendividamentoService = (0, SuperendividamentoFactory_1.SuperendividamentoFactory)();
            const response = await superendividamentoService.delete(req.params.id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
}
exports.SuperendividamentoController = SuperendividamentoController;
