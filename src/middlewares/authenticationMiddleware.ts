import { Request, Response, NextFunction } from "express"
import { IRefreshToken } from "../controllers/AuthController/AuthSchema"
import { AuthFactory } from "../services/AuthService/AuthFactory"
import { AuthHelper } from "../services/AuthService/AuthHelper"
import { server_error } from "../types/server_error"

export async function authenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization, refresh_token } = req.headers
    const authService = AuthFactory()
    const authHelper = new AuthHelper()
    try {
        if (!authorization) throw new Error("authorization token é obrigatório")
        const data: IRefreshToken = { token: authorization as string }

        const tokens = await authService.refreshTokens(data)
        res.set('token', tokens.token)
        res.set('refresh_token', tokens.refresh_token)

        const decoded = authHelper.decodeJWT('Bearer ' + tokens.refresh_token)
        if (!req.body) req.body = {}
        req.body.tenantId = decoded.tenantId

        next()

    } catch (error: any) {
        const err: server_error = { errror: true, message: error.message }
        res.status(400).json(err)
    }
}