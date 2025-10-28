"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpcController = void 0;
const BpcFactory_1 = require("../../services/BpcService/BpcFactory");
class BpcController {
    async getAll(req, res) {
        try {
            const bpcService = (0, BpcFactory_1.BpcFactory)();
            const response = await bpcService.getAll(req.body.tenantId);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async getById(req, res) {
        try {
            const bpcService = (0, BpcFactory_1.BpcFactory)();
            const response = await bpcService.getById(req.params.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async add(req, res) {
        try {
            const bpcService = (0, BpcFactory_1.BpcFactory)();
            const response = await bpcService.add(req.body.tenantId);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async update(req, res) {
        try {
            const bpcService = (0, BpcFactory_1.BpcFactory)();
            const response = await bpcService.update(req.params.id, req.body);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async delete(req, res) {
        try {
            const bpcService = (0, BpcFactory_1.BpcFactory)();
            const response = await bpcService.delete(req.params.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
}
exports.BpcController = BpcController;
