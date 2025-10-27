import { Request, Response } from "express"
import { server_error } from "../../types/server_error"
import { TrabalhistaFactory } from "../../services/TrabalhistaService/TrabalhistaFactory"
import { TrabalhistaSchema } from "./TrabalhistaSchema"
import { Trabalhista } from "../../models/Trabalhista/Trabalhista"

export class TrabalhistaController {
    async getAll(req: Request, res: Response) {
        try {
            const trabalhistaService = TrabalhistaFactory()
            const tenant_id = req.body.tenantId
            const response = await trabalhistaService.getAll(tenant_id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const trabalhistaService = TrabalhistaFactory()
            const id = req.params.id
            const response = await trabalhistaService.getById(id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async calcularTotalCausa(req: Request, res: Response) {
        try {
            const trabalhistaService = TrabalhistaFactory()
            const id = req.params.id
            const response = await trabalhistaService.calcularTotalCausa(id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async add(req: Request, res: Response) {
        try {
            const trabalhistaService = TrabalhistaFactory()
            const tenant_id = req.body.tenantId
            const response = await trabalhistaService.add(tenant_id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const trabalhistaService = TrabalhistaFactory()
            const id = req.params.id
            const tenant_id = req.body.tenantId
            const data = await TrabalhistaSchema.update().validate({ ...req.params, ...req.body, tenant_id }, { stripUnknown: true })
            const response = await trabalhistaService.update(id, data as unknown as Trabalhista)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const trabalhistaService = TrabalhistaFactory()
            const id = req.params.id
            const response = await trabalhistaService.delete(id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }
}