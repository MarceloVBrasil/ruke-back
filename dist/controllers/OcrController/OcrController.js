import { OcrService } from "../../services/OcrService/OcrService";
import { OcrSchema } from "./OcrSchema";
export class OcrController {
    async trabalhista(req, res) {
        try {
            const files = req.files;
            const tenant_id = req.body.tenantId;
            const data = await OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true });
            const ocrService = new OcrService();
            const response = await ocrService.trabalhista(files, data.tenant_id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async superendividamento(req, res) {
        try {
            const files = req.files;
            const tenant_id = req.body.tenantId;
            const data = await OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true });
            const ocrService = new OcrService();
            const response = await ocrService.superendividamento(files, data.tenant_id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async rmc(req, res) {
        try {
            const files = req.files;
            const tenant_id = req.body.tenantId;
            const data = await OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true });
            const ocrService = new OcrService();
            const response = await ocrService.rmc(files, data.tenant_id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async bpc(req, res) {
        try {
            const files = req.files;
            const tenant_id = req.body.tenantId;
            const data = await OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true });
            const ocrService = new OcrService();
            const response = await ocrService.bpc(files, data.tenant_id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
}
