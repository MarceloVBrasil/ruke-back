"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const storage_1 = require("../utils/storage");
const OcrController_1 = require("../controllers/OcrController/OcrController");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const ocrRoutes = (0, express_1.Router)();
const ocrController = new OcrController_1.OcrController();
ocrRoutes.route('/trabalhista')
    .post(storage_1.upload.any(), authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('trabalhista', ['add']), ocrController.trabalhista);
ocrRoutes.route('/superendividamento')
    .post(storage_1.upload.any(), authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('superendividamento', ['add']), ocrController.superendividamento);
ocrRoutes.route('/rmc')
    .post(storage_1.upload.any(), authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('RMC', ['add']), ocrController.rmc);
ocrRoutes.route('/bpc')
    .post(storage_1.upload.any(), authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['add']), ocrController.bpc);
exports.default = ocrRoutes;
