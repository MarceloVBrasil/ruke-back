"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticationMiddleware = authenticationMiddleware;
const AuthFactory_1 = require("../services/AuthService/AuthFactory");
const AuthHelper_1 = require("../services/AuthService/AuthHelper");
async function authenticationMiddleware(req, res, next) {
    const { authorization, refresh_token } = req.headers;
    const authService = (0, AuthFactory_1.AuthFactory)();
    const authHelper = new AuthHelper_1.AuthHelper();
    try {
        if (!authorization)
            throw new Error("authorization token é obrigatório");
        const data = { token: authorization };
        const tokens = await authService.refreshTokens(data);
        res.set('token', tokens.token);
        res.set('refresh_token', tokens.refresh_token);
        const decoded = authHelper.decodeJWT('Bearer ' + tokens.refresh_token);
        if (!req.body)
            req.body = {};
        req.body.tenantId = decoded.tenantId;
        next();
    }
    catch (error) {
        const err = { errror: true, message: error.message };
        res.status(400).json(err);
    }
}
