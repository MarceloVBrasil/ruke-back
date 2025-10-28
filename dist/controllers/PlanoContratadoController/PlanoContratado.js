"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlanoContratadoController = void 0;
const PlanoContratadoFactory_1 = require("../../services/PlanoContratadoService/PlanoContratadoFactory");
class PlanoContratadoController {
    async getAll(req, res) {
        try {
            const planoContratadoService = (0, PlanoContratadoFactory_1.PlanoContratadoFactory)();
            const response = await planoContratadoService.getAll(req.body.tenantId);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
}
exports.PlanoContratadoController = PlanoContratadoController;
