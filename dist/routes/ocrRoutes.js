import { Router } from "express";
import { upload } from "../utils/storage";
import { OcrController } from "../controllers/OcrController/OcrController";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware";
const ocrRoutes = Router();
const ocrController = new OcrController();
ocrRoutes.route('/trabalhista')
    .post(upload.any(), authenticationMiddleware, authorizationMiddleware('trabalhista', ['add']), ocrController.trabalhista);
ocrRoutes.route('/superendividamento')
    .post(upload.any(), authenticationMiddleware, authorizationMiddleware('superendividamento', ['add']), ocrController.superendividamento);
ocrRoutes.route('/rmc')
    .post(upload.any(), authenticationMiddleware, authorizationMiddleware('RMC', ['add']), ocrController.rmc);
ocrRoutes.route('/bpc')
    .post(upload.any(), authenticationMiddleware, authorizationMiddleware('BPC', ['add']), ocrController.bpc);
export default ocrRoutes;
