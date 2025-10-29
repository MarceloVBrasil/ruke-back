"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OcrController = void 0;
const OcrService_1 = require("../../services/OcrService/OcrService");
const OcrSchema_1 = require("./OcrSchema");
class OcrController {
    async trabalhista(req, res) {
        try {
            const files = req.files;
            const tenant_id = req.body.tenantId;
            const data = await OcrSchema_1.OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true });
            const ocrService = new OcrService_1.OcrService();
            const response = await ocrService.trabalhista(files, data.tenant_id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async superendividamento(req, res) {
        try {
            const files = req.files;
            const tenant_id = req.body.tenantId;
            const data = await OcrSchema_1.OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true });
            const ocrService = new OcrService_1.OcrService();
            const response = await ocrService.superendividamento(files, data.tenant_id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async rmc(req, res) {
        try {
            const files = req.files;
            const tenant_id = req.body.tenantId;
            const data = await OcrSchema_1.OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true });
            const ocrService = new OcrService_1.OcrService();
            const response = await ocrService.rmc(files, data.tenant_id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async bpc(req, res) {
        try {
            const files = req.files;
            const tenant_id = req.body.tenantId;
            const data = await OcrSchema_1.OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true });
            const ocrService = new OcrService_1.OcrService();
            const response = await ocrService.bpc(files, data.tenant_id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { error: true, message: error.message };
            return res.status(500).json(err);
        }
    }
}
exports.OcrController = OcrController;
