import { Request, Response } from "express";
import { server_error } from "../../types/server_error";
import { OcrService } from "../../services/OcrService/OcrService";
import { OcrSchema } from "./OcrSchema";

export class OcrController {

    async trabalhista(req: Request, res: Response) {
        try {
            const files = req.files as Express.Multer.File[];
            const tenant_id = req.body.tenantId

            const data = await OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true })

            const ocrService = new OcrService()
            const response = await ocrService.trabalhista(files, data.tenant_id)

            return res.status(200).json(response);
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }

    async superendividamento(req: Request, res: Response) {
        try {
            const files = req.files as Express.Multer.File[];
            const tenant_id = req.body.tenantId

            const data = await OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true })

            const ocrService = new OcrService()
            const response = await ocrService.superendividamento(files, data.tenant_id)

            return res.status(200).json(response);
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }

    async rmc(req: Request, res: Response) {
        try {
            const files = req.files as Express.Multer.File[];
            const tenant_id = req.body.tenantId

            const data = await OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true })

            const ocrService = new OcrService()
            const response = await ocrService.rmc(files, data.tenant_id)

            return res.status(200).json(response);
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }

    async bpc(req: Request, res: Response) {
        try {
            const files = req.files as Express.Multer.File[];
            const tenant_id = req.body.tenantId

            const data = await OcrSchema.upload().validate({ ...req, tenant_id }, { stripUnknown: true })

            const ocrService = new OcrService()
            const response = await ocrService.bpc(files, data.tenant_id)

            return res.status(200).json(response);
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
}
