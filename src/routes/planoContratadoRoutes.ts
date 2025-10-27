import { Router } from "express"
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware"
import { PlanoContratadoController } from "../controllers/PlanoContratadoController/PlanoContratado"

const planosContratadosController = new PlanoContratadoController()
const planosContratadosRoutes = Router()

planosContratadosRoutes.route('/')
    .get(authenticationMiddleware, authorizationMiddleware('planos', ['getPlanosContratados']), planosContratadosController.getAll)

export default planosContratadosRoutes