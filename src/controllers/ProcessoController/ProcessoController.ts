import { Request, Response } from "express"
import { server_error } from "../../types/server_error"
import { ProcessoFactory } from "../../services/ProcessoService/ProcessoFactory"
import { ProcessoSchema } from "./ProcessoSchema"
import { Processo } from "../../models/Processo/Processo"

export class ProcessoController {
    async getProcessos(req: Request, res: Response) {
        try {
            const processoService = ProcessoFactory()
            const data = await processoService.getProcessos(req.body.tenantId)
            res.status(200).json(data)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async getMovimentacoes(req: Request, res: Response) {
        try {
            const processoService = ProcessoFactory()
            const data = await processoService.getMovimentacoes()
            res.status(200).json(data)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async salvar(req: Request, res: Response) {
        try {
            const processoService = ProcessoFactory()
            const data = await ProcessoSchema.add().validate({ ...req.body, tenant_id: req.body.tenantId }, { stripUnknown: true })
            const response = await processoService.salvar(data as Processo)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async filtrar(req: Request, res: Response) {
        try {
            const processoService = ProcessoFactory()
            const data = await ProcessoSchema.filtrar().validate({ ...req.body })
            const response = await processoService.filtrar(data as Processo)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(500).json(err)
        }
    }
}