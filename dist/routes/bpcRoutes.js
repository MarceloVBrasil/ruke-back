"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BpcController_1 = require("../controllers/BpcController/BpcController");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const bpcRoutes = (0, express_1.Router)();
const bpcController = new BpcController_1.BpcController();
bpcRoutes.route('/')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['getAll']), bpcController.getAll)
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['add']), bpcController.add);
bpcRoutes.route('/:id')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['getById']), bpcController.getById)
    .put(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['update']), bpcController.update)
    .delete(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['delete']), bpcController.delete);
exports.default = bpcRoutes;
