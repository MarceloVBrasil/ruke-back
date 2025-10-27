import { Request, Response } from "express"
import { server_error } from "../../types/server_error"
import { SuperendividamentoFactory } from "../../services/SuperendividamentoService/SuperendividamentoFactory"
import { SuperendividamentoSchema } from "./SuperendividamentoSchema"
import { Superendividamento } from "../../models/Superendividamento/Superendividamento"

export class SuperendividamentoController {
    async getAll(req: Request, res: Response) {
        try {
            const superendividamentoService = SuperendividamentoFactory()
            const response = await superendividamentoService.getAll(req.body.tenantId)
            return res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            return res.status(500).json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const superendividamentoService = SuperendividamentoFactory()
            const response = await superendividamentoService.getById(req.params.id)
            return res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            return res.status(500).json(err)
        }
    }

    async add(req: Request, res: Response) {
        try {
            const superendividamentoService = SuperendividamentoFactory()
            const response = await superendividamentoService.add(req.body.tenantId)
            return res.status(201).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            return res.status(500).json(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const superendividamentoService = SuperendividamentoFactory()
            const data = await SuperendividamentoSchema.update().validate({ ...req.params, ...req.body, tenant_id: req.body.tenantId }, { stripUnknown: true })
            const response = await superendividamentoService.update(data.id, data as Superendividamento)
            return res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            return res.status(500).json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const superendividamentoService = SuperendividamentoFactory()
            const response = await superendividamentoService.delete(req.params.id)
            return res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            return res.status(500).json(err)
        }
    }
}