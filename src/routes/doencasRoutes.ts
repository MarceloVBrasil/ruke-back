import { Router } from "express";
import { DoencaController } from "../controllers/DoencaController/DoencaController";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware"

const doencaController = new DoencaController()
const doencaRoutes = Router()

doencaRoutes.route('/:id_bpc')
    .get(authenticationMiddleware, authorizationMiddleware('BPC', ['getAll']), doencaController.getAll)
    .post(authenticationMiddleware, authorizationMiddleware('BPC', ['add']), doencaController.add)

doencaRoutes.route('/:id')
    .put(authenticationMiddleware, authorizationMiddleware('BPC', ['getAll']), doencaController.update)
    .delete(authenticationMiddleware, authorizationMiddleware('BPC', ['add']), doencaController.delete)

export default doencaRoutes