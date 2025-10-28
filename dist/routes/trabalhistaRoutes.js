"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const TrabalhistaController_1 = require("../controllers/TrabalhistaController/TrabalhistaController");
const trabalhistaRoutes = (0, express_1.Router)();
const trabalhistaController = new TrabalhistaController_1.TrabalhistaController();
trabalhistaRoutes.route('/')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('trabalhista', ['getAll']), trabalhistaController.getAll)
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('trabalhista', ['add']), trabalhistaController.add);
trabalhistaRoutes.route('/calcular/:id')
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('trabalhista', ['update']), trabalhistaController.calcularTotalCausa);
trabalhistaRoutes.route('/:id')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('trabalhista', ['getById']), trabalhistaController.getById)
    .put(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('trabalhista', ['update']), trabalhistaController.update)
    .delete(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('trabalhista', ['delete']), trabalhistaController.delete);
exports.default = trabalhistaRoutes;
