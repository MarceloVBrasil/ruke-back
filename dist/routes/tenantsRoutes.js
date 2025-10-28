"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const TenantController_1 = require("../controllers/TenantController/TenantController");
const tenantController = new TenantController_1.TenantsController();
const tenantsRoutes = (0, express_1.Router)();
tenantsRoutes.route('/')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('tenants', ['getAll']), tenantController.getAll)
    .post(tenantController.add);
tenantsRoutes.route('/cancelar-todas-assinaturas')
    .post(tenantController.cancelarTodasAssinaturas);
tenantsRoutes.route('/:id')
    .get(tenantController.getById)
    .put(tenantController.update)
    .delete(tenantController.delete);
exports.default = tenantsRoutes;
