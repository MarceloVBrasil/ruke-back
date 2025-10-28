"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PlanoController_1 = require("../controllers/PlanoController/PlanoController");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const planoController = new PlanoController_1.PlanoController();
const planosRoutes = (0, express_1.Router)();
planosRoutes.route('/')
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('planos', ['add']), planoController.add);
planosRoutes.route('/produto/:produto_id')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('planos', ['getAllByProdutoId']), planoController.getAllByProdutoId);
planosRoutes.route('/:id')
    .get(planoController.getById)
    .put(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('planos', ['update']), planoController.update)
    .delete(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('planos', ['delete']), planoController.delete);
exports.default = planosRoutes;
