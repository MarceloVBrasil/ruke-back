"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SuperendividamentoController_1 = require("../controllers/SuperendividamentoController/SuperendividamentoController");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const superendividamentoRoutes = (0, express_1.Router)();
const superendividamentoController = new SuperendividamentoController_1.SuperendividamentoController();
superendividamentoRoutes.route('/')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('superendividamento', ['getAll']), superendividamentoController.getAll)
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('superendividamento', ['add']), superendividamentoController.add);
superendividamentoRoutes.route('/:id')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('superendividamento', ['getById']), superendividamentoController.getById)
    .put(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('superendividamento', ['update']), superendividamentoController.update)
    .delete(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('superendividamento', ['delete']), superendividamentoController.delete);
exports.default = superendividamentoRoutes;
