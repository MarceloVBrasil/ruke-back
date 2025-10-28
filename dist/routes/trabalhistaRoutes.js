import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware";
import { TrabalhistaController } from "../controllers/TrabalhistaController/TrabalhistaController";
const trabalhistaRoutes = Router();
const trabalhistaController = new TrabalhistaController();
trabalhistaRoutes.route('/')
    .get(authenticationMiddleware, authorizationMiddleware('trabalhista', ['getAll']), trabalhistaController.getAll)
    .post(authenticationMiddleware, authorizationMiddleware('trabalhista', ['add']), trabalhistaController.add);
trabalhistaRoutes.route('/calcular/:id')
    .post(authenticationMiddleware, authorizationMiddleware('trabalhista', ['update']), trabalhistaController.calcularTotalCausa);
trabalhistaRoutes.route('/:id')
    .get(authenticationMiddleware, authorizationMiddleware('trabalhista', ['getById']), trabalhistaController.getById)
    .put(authenticationMiddleware, authorizationMiddleware('trabalhista', ['update']), trabalhistaController.update)
    .delete(authenticationMiddleware, authorizationMiddleware('trabalhista', ['delete']), trabalhistaController.delete);
export default trabalhistaRoutes;
