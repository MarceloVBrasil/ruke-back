"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TenantsController = void 0;
const TenantFactory_1 = require("../../services/TenantService/TenantFactory");
const TenantSchema_1 = require("./TenantSchema");
const tenantService = (0, TenantFactory_1.TenantFactory)();
class TenantsController {
    async getAll(req, res) {
        try {
            const tenants = await tenantService.getAll();
            res.status(200).json(tenants);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async getById(req, res) {
        try {
            const tenant = await tenantService.getById(req.params.id);
            res.status(200).json(tenant);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async add(req, res) {
        try {
            const data = await TenantSchema_1.TenantSchema.add().validate(req.body, { stripUnknown: true });
            res.status(200).json({ message: "tenant adicionado com sucesso" });
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async update(req, res) {
        try {
            const data = await TenantSchema_1.TenantSchema.update().validate({ ...req.params, ...req.body }, { stripUnknown: true });
            const response = await tenantService.update(data.id, data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async delete(req, res) {
        try {
            const response = await tenantService.delete(req.params.id);
            res.status(200).json({ message: "tenant deletado com sucesso" });
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async cancelarTodasAssinaturas(req, res) {
        try {
            tenantService.cancelarTodasAssinaturas();
            res.status(200).json({ message: "todas assinaturas foram canceladas com sucesso" });
        }
        catch (error) {
            const err = { error: true, message: error.message };
            res.status(400).json(err);
        }
    }
}
exports.TenantsController = TenantsController;
