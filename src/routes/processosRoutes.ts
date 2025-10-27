import { Router } from "express"
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware"
import { ProcessoController } from "../controllers/ProcessoController/ProcessoController"

const processosRoutes = Router()
const processoController = new ProcessoController()

processosRoutes.route('/')
    .get(authenticationMiddleware, authorizationMiddleware('processos', ['getAll']), processoController.getProcessos)
    .post(authenticationMiddleware, authorizationMiddleware('processos', ['salvar']), processoController.salvar)

processosRoutes.route('/movimentacoes/:id')
    .get(authenticationMiddleware, authorizationMiddleware('processos', ['getMovimentacoes']), processoController.getMovimentacoes)

processosRoutes.route('/filtrar')
    .post(authenticationMiddleware, authorizationMiddleware('processos', ['filtrar']), processoController.filtrar)

export default processosRoutes