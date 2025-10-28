import { AuthSchema } from "./AuthSchema";
import { AuthFactory } from "../../services/AuthService/AuthFactory";
export class AuthController {
    async login(req, res) {
        try {
            const authService = AuthFactory();
            await AuthSchema.login().validate(req.body, { stripUnknown: true });
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
            const authService = AuthFactory();
            await AuthSchema.loginComCodigo().validate(req.body, { stripUnknown: true });
            const data = req.body;
            const response = await authService.loginComCodigo(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async solicitarCodigo(req, res) {
        try {
            const authService = AuthFactory();
            await AuthSchema.solicitarCodigo().validate(req.body, { stripUnknown: true });
            const data = req.body;
            const response = await authService.solicitarCodigo(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
    async refreshToken(req, res) {
        try {
            const authService = AuthFactory();
            const data = await AuthSchema.refreshToken().validate({ ...req.body }, { stripUnknown: true });
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
            const data = await AuthSchema.register().validate({ ...req.body, ...req.params, ...req.query }, { stripUnknown: true });
            const authService = AuthFactory();
            const response = await authService.register(data);
            res.status(200).json({ message: 'usuário registrado com sucesso' });
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
}
