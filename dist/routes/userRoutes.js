"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController/UserController");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const userRoutes = (0, express_1.Router)();
const userController = new UserController_1.UserController();
userRoutes.route('/')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('usuarios', ['getAll']), userController.getAll)
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('usuarios', ['add']), userController.add);
userRoutes.route('/:id')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('usuarios', ['getById']), userController.getById)
    .put(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('usuarios', ['update']), userController.update)
    .delete(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('usuarios', ['delete']), userController.delete);
exports.default = userRoutes;
