import { Router } from "express";
import { BpcController } from "../controllers/BpcController/BpcController";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware";
const bpcRoutes = Router();
const bpcController = new BpcController();
bpcRoutes.route('/')
    .get(authenticationMiddleware, authorizationMiddleware('BPC', ['getAll']), bpcController.getAll)
    .post(authenticationMiddleware, authorizationMiddleware('BPC', ['add']), bpcController.add);
bpcRoutes.route('/:id')
    .get(authenticationMiddleware, authorizationMiddleware('BPC', ['getById']), bpcController.getById)
    .put(authenticationMiddleware, authorizationMiddleware('BPC', ['update']), bpcController.update)
    .delete(authenticationMiddleware, authorizationMiddleware('BPC', ['delete']), bpcController.delete);
export default bpcRoutes;
