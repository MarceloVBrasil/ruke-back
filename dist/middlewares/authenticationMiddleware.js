import { AuthFactory } from "../services/AuthService/AuthFactory";
import { AuthHelper } from "../services/AuthService/AuthHelper";
export async function authenticationMiddleware(req, res, next) {
    const { authorization, refresh_token } = req.headers;
    const authService = AuthFactory();
    const authHelper = new AuthHelper();
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
