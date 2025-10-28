"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DoencaController_1 = require("../controllers/DoencaController/DoencaController");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const doencaController = new DoencaController_1.DoencaController();
const doencaRoutes = (0, express_1.Router)();
doencaRoutes.route('/:id_bpc')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['getAll']), doencaController.getAll)
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['add']), doencaController.add);
doencaRoutes.route('/:id')
    .put(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['getAll']), doencaController.update)
    .delete(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['add']), doencaController.delete);
exports.default = doencaRoutes;
