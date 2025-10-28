import { Router } from "express";
import { BancoController } from "../controllers/BancoController/BancoController";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
const bancoController = new BancoController();
const bancosRoutes = Router();
bancosRoutes.route('/')
    .get(authenticationMiddleware, bancoController.getAll);
export default bancosRoutes;
