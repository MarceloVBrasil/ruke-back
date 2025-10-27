import { Request, Response } from "express"
import { server_error } from "../../types/server_error"
import { RmcFactory } from "../../services/RmcService/RmcFactory"

export class RmcController {
    async getAll(req: Request, res: Response) {
        try {
            const rmcService = RmcFactory()
            const response = await rmcService.getAll(req.body.tenantId)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const rmcService = RmcFactory()
            const response = await rmcService.getById(req.params.id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async add(req: Request, res: Response) {
        try {
            const rmcService = RmcFactory()
            const response = await rmcService.add(req.body.tenantId)
            res.status(201).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const rmcService = RmcFactory()
            const response = await rmcService.update(req.params.id, req.body)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const rmcService = RmcFactory()
            const response = await rmcService.delete(req.params.id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }
}