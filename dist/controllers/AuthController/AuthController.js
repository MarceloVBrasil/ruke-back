"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const AuthSchema_1 = require("./AuthSchema");
const AuthFactory_1 = require("../../services/AuthService/AuthFactory");
class AuthController {
    async login(req, res) {
        try {
            const authService = (0, AuthFactory_1.AuthFactory)();
            await AuthSchema_1.AuthSchema.login().validate(req.body, { stripUnknown: true });
            const data = req.body;
            const response = await authService.login(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async loginComCodigo(req, res) {
        try {
            const authService = (0, AuthFactory_1.AuthFactory)();
            await AuthSchema_1.AuthSchema.loginComCodigo().validate(req.body, { stripUnknown: true });
            const data = req.body;
            const response = await authService.loginComCodigo(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async solicitarCodigoLogin(req, res) {
        try {
            const authService = (0, AuthFactory_1.AuthFactory)();
            await AuthSchema_1.AuthSchema.solicitarCodigo().validate(req.body, { stripUnknown: true });
            const data = req.body;
            const response = await authService.solicitarCodigoLogin(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async refreshToken(req, res) {
        try {
            const authService = (0, AuthFactory_1.AuthFactory)();
            const data = await AuthSchema_1.AuthSchema.refreshToken().validate({ ...req.body }, { stripUnknown: true });
            const response = await authService.refreshTokens(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async register(req, res) {
        try {
            const data = await AuthSchema_1.AuthSchema.register().validate({ ...req.body, ...req.params, ...req.query }, { stripUnknown: true });
            const authService = (0, AuthFactory_1.AuthFactory)();
            const response = await authService.register(data);
            res.status(200).json({ message: 'usuário registrado com sucesso' });
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async solicitarCodigoEsqueciMinhaSenha(req, res) {
        try {
            const authService = (0, AuthFactory_1.AuthFactory)();
            const data = await AuthSchema_1.AuthSchema.solicitarCodigo().validate({ ...req.body }, { stripUnknown: true });
            const response = await authService.solicitarCodigoEsqueciMinhaSenha(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async trocarMinhaSenha(req, res) {
        try {
            const authService = (0, AuthFactory_1.AuthFactory)();
            const data = await AuthSchema_1.AuthSchema.trocarSenha().validate({ ...req.body }, { stripUnknown: true });
            const response = await authService.trocarMinhaSenha(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
}
exports.AuthController = AuthController;
