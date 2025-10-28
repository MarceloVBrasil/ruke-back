import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware";
import { RmcController } from "../controllers/RmcController/RmcController";
const rmcController = new RmcController();
const rmcRoutes = Router();
rmcRoutes.route('/')
    .get(authenticationMiddleware, authorizationMiddleware('RMC', ['getAll']), rmcController.getAll)
    .post(authenticationMiddleware, authorizationMiddleware('RMC', ['getAll']), rmcController.add);
rmcRoutes.route('/:id')
    .get(authenticationMiddleware, authorizationMiddleware('RMC', ['update']), rmcController.getById)
    .put(authenticationMiddleware, authorizationMiddleware('RMC', ['update']), rmcController.update)
    .delete(authenticationMiddleware, authorizationMiddleware('RMC', ['delete']), rmcController.delete);
export default rmcRoutes;
