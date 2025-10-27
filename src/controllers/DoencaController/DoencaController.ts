import { Request, Response } from "express"
import { server_error } from "../../types/server_error"
import { DoencaFactory } from "../../services/DoencaService/DoencaFactory"

export class DoencaController {
    async getAll(req: Request, res: Response) {
        try {
            const doencaService = DoencaFactory()
            const response = await doencaService.getAll()
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const doencaService = DoencaFactory()
            const response = await doencaService.getById(req.params.id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async add(req: Request, res: Response) {
        try {
            const doencaService = DoencaFactory()
            req.body = req.params.id_bpc
            const response = await doencaService.add(req.body)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const doencaService = DoencaFactory()
            const response = await doencaService.update(req.params.id, req.body)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const doencaService = DoencaFactory()
            const response = await doencaService.delete(req.params.id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }
}