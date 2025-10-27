import { Router } from "express";
import { authenticationMiddleware } from "../middlewares/authenticationMiddleware"
import { authorizationMiddleware } from "../middlewares/authorizationMiddleware"
import { TenantsController } from "../controllers/TenantController/TenantController";

const tenantController = new TenantsController()
const tenantsRoutes = Router()

tenantsRoutes.route('/')
    .get(authenticationMiddleware, authorizationMiddleware('tenants', ['getAll']), tenantController.getAll)
    .post(tenantController.add)

tenantsRoutes.route('/cancelar-todas-assinaturas')
    .post(tenantController.cancelarTodasAssinaturas)

tenantsRoutes.route('/:id')
    .get(tenantController.getById)
    .put(tenantController.update)
    .delete(tenantController.delete)

export default tenantsRoutes