"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const RmcController_1 = require("../controllers/RmcController/RmcController");
const rmcController = new RmcController_1.RmcController();
const rmcRoutes = (0, express_1.Router)();
rmcRoutes.route('/')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('RMC', ['getAll']), rmcController.getAll)
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('RMC', ['getAll']), rmcController.add);
rmcRoutes.route('/:id')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('RMC', ['update']), rmcController.getById)
    .put(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('RMC', ['update']), rmcController.update)
    .delete(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('RMC', ['delete']), rmcController.delete);
exports.default = rmcRoutes;
