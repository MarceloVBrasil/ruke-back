"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const PlanoContratado_1 = require("../controllers/PlanoContratadoController/PlanoContratado");
const planosContratadosController = new PlanoContratado_1.PlanoContratadoController();
const planosContratadosRoutes = (0, express_1.Router)();
planosContratadosRoutes.route('/')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('planos', ['getPlanosContratados']), planosContratadosController.getAll);
exports.default = planosContratadosRoutes;
