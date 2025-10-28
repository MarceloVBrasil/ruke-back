"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const BancoController_1 = require("../controllers/BancoController/BancoController");
const authenticationMiddleware_1 = require("../middlewares/authenticationMiddleware");
const bancoController = new BancoController_1.BancoController();
const bancosRoutes = (0, express_1.Router)();
bancosRoutes.route('/')
    .get(authenticationMiddleware_1.authenticationMiddleware, bancoController.getAll);
exports.default = bancosRoutes;
