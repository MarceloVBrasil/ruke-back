"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const authorizationMiddleware_1 = require("../middlewares/authorizationMiddleware");
const PessoaController_1 = require("../controllers/PessoaController/PessoaController");
const pessoaRoutes = (0, express_1.Router)();
const pessoaController = new PessoaController_1.PessoaController();
pessoaRoutes.route('/:id_bpc')
    .get(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['getAll']), pessoaController.getAll)
    .post(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['add']), pessoaController.add);
pessoaRoutes.route('/:id')
    .put(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['update']), pessoaController.update)
    .delete(authenticationMiddleware_1.authenticationMiddleware, (0, authorizationMiddleware_1.authorizationMiddleware)('BPC', ['delete']), pessoaController.delete);
exports.default = pessoaRoutes;
