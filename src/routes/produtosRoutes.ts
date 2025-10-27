import { Router } from "express";
import { ProdutoController } from "../controllers/ProdutoController/ProdutoController";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware"

const produtoController = new ProdutoController()
const produtosRoutes = Router()

produtosRoutes.route('/')
    .get(authenticationMiddleware, authorizationMiddleware('produtos', ['getAll']), produtoController.getAll)
    .post(authenticationMiddleware, authorizationMiddleware('produtos', ['add']), produtoController.add)

produtosRoutes.route('/:id')
    .put(authenticationMiddleware, authorizationMiddleware('produtos', ['update']), produtoController.update)
    .delete(authenticationMiddleware, authorizationMiddleware('produtos', ['delete']), produtoController.delete)

export default produtosRoutes