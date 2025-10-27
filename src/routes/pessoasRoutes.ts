import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware"
import { PessoaController } from "../controllers/PessoaController/PessoaController"

const pessoaRoutes = Router()
const pessoaController = new PessoaController()

pessoaRoutes.route('/:id_bpc')
    .get(authenticationMiddleware, authorizationMiddleware('BPC', ['getAll']), pessoaController.getAll)
    .post(authenticationMiddleware, authorizationMiddleware('BPC', ['add']), pessoaController.add)

pessoaRoutes.route('/:id')
    .put(authenticationMiddleware, authorizationMiddleware('BPC', ['update']), pessoaController.update)
    .delete(authenticationMiddleware, authorizationMiddleware('BPC', ['delete']), pessoaController.delete)

export default pessoaRoutes