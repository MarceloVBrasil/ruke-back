import { Router } from "express";
import { AuthController } from "../controllers/AuthController/AuthController";

const authController = new AuthController()
const authRoutes = Router()

authRoutes.route('/login')
    .post(authController.login)

authRoutes.route('/refresh_token')
    .post(authController.refreshToken)

authRoutes.route('/inscrever-se/:id_plano')
    .post(authController.register)

authRoutes.route('/login-com-codigo')
    .post(authController.loginComCodigo)

authRoutes.route('/solicitar-codigo')
    .post(authController.solicitarCodigo)

export default authRoutes