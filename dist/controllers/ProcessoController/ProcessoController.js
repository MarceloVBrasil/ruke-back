"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessoController = void 0;
const ProcessoFactory_1 = require("../../services/ProcessoService/ProcessoFactory");
const ProcessoSchema_1 = require("./ProcessoSchema");
class ProcessoController {
    async getProcessos(req, res) {
        try {
            const processoService = (0, ProcessoFactory_1.ProcessoFactory)();
            const data = await processoService.getProcessos(req.body.tenantId);
            res.status(200).json(data);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async getMovimentacoes(req, res) {
        try {
            const processoService = (0, ProcessoFactory_1.ProcessoFactory)();
            const data = await processoService.getMovimentacoes();
            res.status(200).json(data);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async salvar(req, res) {
        try {
            const processoService = (0, ProcessoFactory_1.ProcessoFactory)();
            const data = await ProcessoSchema_1.ProcessoSchema.add().validate({ ...req.body, tenant_id: req.body.tenantId }, { stripUnknown: true });
            const response = await processoService.salvar(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async filtrar(req, res) {
        try {
            const processoService = (0, ProcessoFactory_1.ProcessoFactory)();
            const data = await ProcessoSchema_1.ProcessoSchema.filtrar().validate({ ...req.body });
            const response = await processoService.filtrar(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
}
exports.ProcessoController = ProcessoController;
