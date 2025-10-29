import { Request, Response } from "express"
import { AuthSchema, ILoginComCodigoSchema, ILoginSchema, ISolicitarCodigoSchema } from "./AuthSchema"
import { server_error } from "../../types/server_error"
import { AuthFactory } from "../../services/AuthService/AuthFactory"

export class AuthController {

    async login(req: Request, res: Response) {
        try {
            const authService = AuthFactory()
            await AuthSchema.login().validate(req.body, { stripUnknown: true })

            const data = req.body as ILoginSchema
            const response = await authService.login(data)
            res.status(200).json(response)

        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async loginComCodigo(req: Request, res: Response) {
        try {
            const authService = AuthFactory()
            await AuthSchema.loginComCodigo().validate(req.body, { stripUnknown: true })

            const data = req.body as ILoginComCodigoSchema
            const response = await authService.loginComCodigo(data)
            res.status(200).json(response)

        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async solicitarCodigoLogin(req: Request, res: Response) {
        try {
            const authService = AuthFactory()
            await AuthSchema.solicitarCodigo().validate(req.body, { stripUnknown: true })

            const data = req.body as ISolicitarCodigoSchema
            const response = await authService.solicitarCodigoLogin(data)
            res.status(200).json(response)

        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async refreshToken(req: Request, res: Response) {
        try {
            const authService = AuthFactory()
            const data = await AuthSchema.refreshToken().validate({ ...req.body }, { stripUnknown: true })
            const response = await authService.refreshTokens(data)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async register(req: Request, res: Response) {
        try {
            const data = await AuthSchema.register().validate({ ...req.body, ...req.params, ...req.query }, { stripUnknown: true })
            const authService = AuthFactory()
            const response = await authService.register(data)
            res.status(200).json({ message: 'usuário registrado com sucesso' })
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async solicitarCodigoEsqueciMinhaSenha(req: Request, res: Response) {
        try {
            const authService = AuthFactory()
            const data = await AuthSchema.solicitarCodigo().validate({ ...req.body }, { stripUnknown: true })
            const response = await authService.solicitarCodigoEsqueciMinhaSenha(data)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async trocarMinhaSenha(req: Request, res: Response) {
        try {
            const authService = AuthFactory()
            const data = await AuthSchema.trocarSenha().validate({ ...req.body }, { stripUnknown: true })
            const response = await authService.trocarMinhaSenha(data)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }
}