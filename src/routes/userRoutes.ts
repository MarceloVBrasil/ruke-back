import { Router } from "express"
import { UserController } from "../controllers/UserController/UserController"
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware"

const userRoutes = Router()
const userController = new UserController()

userRoutes.route('/')
    .get(authenticationMiddleware, authorizationMiddleware('usuarios', ['getAll']), userController.getAll)
    .post(authenticationMiddleware, authorizationMiddleware('usuarios', ['add']), userController.add)

userRoutes.route('/:id')
    .get(authenticationMiddleware, authorizationMiddleware('usuarios', ['getById']), userController.getById)
    .put(authenticationMiddleware, authorizationMiddleware('usuarios', ['update']), userController.update)
    .delete(authenticationMiddleware, authorizationMiddleware('usuarios', ['delete']), userController.delete)

export default userRoutes