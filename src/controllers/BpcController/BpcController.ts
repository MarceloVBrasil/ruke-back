import { Request, Response } from "express"
import { server_error } from "../../types/server_error"
import { BpcFactory } from "../../services/BpcService/BpcFactory"

export class BpcController {
    async getAll(req: Request, res: Response) {
        try {
            const bpcService = BpcFactory()
            const response = await bpcService.getAll(req.body.tenantId)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const bpcService = BpcFactory()
            const response = await bpcService.getById(req.params.id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async add(req: Request, res: Response) {
        try {
            const bpcService = BpcFactory()
            const response = await bpcService.add(req.body.tenantId)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const bpcService = BpcFactory()
            const response = await bpcService.update(req.params.id, req.body)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const bpcService = BpcFactory()
            const response = await bpcService.delete(req.params.id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }
}