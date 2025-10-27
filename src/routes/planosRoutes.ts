import { Router } from "express";
import { PlanoController } from "../controllers/PlanoController/PlanoController";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware"

const planoController = new PlanoController()
const planosRoutes = Router()

planosRoutes.route('/')
    .post(authenticationMiddleware, authorizationMiddleware('planos', ['add']), planoController.add)

planosRoutes.route('/produto/:produto_id')
    .get(authenticationMiddleware, authorizationMiddleware('planos', ['getAllByProdutoId']), planoController.getAllByProdutoId)

planosRoutes.route('/:id')
    .get(planoController.getById)
    .put(authenticationMiddleware, authorizationMiddleware('planos', ['update']), planoController.update)
    .delete(authenticationMiddleware, authorizationMiddleware('planos', ['delete']), planoController.delete)


export default planosRoutes