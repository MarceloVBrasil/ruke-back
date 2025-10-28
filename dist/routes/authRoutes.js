"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthController_1 = require("../controllers/AuthController/AuthController");
const authController = new AuthController_1.AuthController();
const authRoutes = (0, express_1.Router)();
authRoutes.route('/login')
    .post(authController.login);
authRoutes.route('/refresh_token')
    .post(authController.refreshToken);
authRoutes.route('/inscrever-se/:id_plano')
    .post(authController.register);
authRoutes.route('/login-com-codigo')
    .post(authController.loginComCodigo);
authRoutes.route('/solicitar-codigo')
    .post(authController.solicitarCodigo);
exports.default = authRoutes;
