import { Router } from "express";
import { SuperendividamentoController } from "../controllers/SuperendividamentoController/SuperendividamentoController";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware";
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware";
const superendividamentoRoutes = Router();
const superendividamentoController = new SuperendividamentoController();
superendividamentoRoutes.route('/')
    .get(authenticationMiddleware, authorizationMiddleware('superendividamento', ['getAll']), superendividamentoController.getAll)
    .post(authenticationMiddleware, authorizationMiddleware('superendividamento', ['add']), superendividamentoController.add);
superendividamentoRoutes.route('/:id')
    .get(authenticationMiddleware, authorizationMiddleware('superendividamento', ['getById']), superendividamentoController.getById)
    .put(authenticationMiddleware, authorizationMiddleware('superendividamento', ['update']), superendividamentoController.update)
    .delete(authenticationMiddleware, authorizationMiddleware('superendividamento', ['delete']), superendividamentoController.delete);
export default superendividamentoRoutes;
