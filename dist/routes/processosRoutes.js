"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const ProcessoController_1 = require("../controllers/ProcessoController/ProcessoController");
const processosRoutes = (0, express_1.Router)();
const processoController = new ProcessoController_1.ProcessoController();
processosRoutes.route('/')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('processos', ['getAll']), processoController.getProcessos)
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('processos', ['salvar']), processoController.salvar);
processosRoutes.route('/movimentacoes/:id')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('processos', ['getMovimentacoes']), processoController.getMovimentacoes);
processosRoutes.route('/filtrar')
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('processos', ['filtrar']), processoController.filtrar);
exports.default = processosRoutes;
