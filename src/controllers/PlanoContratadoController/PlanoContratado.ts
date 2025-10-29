import { Request, Response } from "express"
import { PlanoContratadoFactory } from "../../services/PlanoContratadoService/PlanoContratadoFactory"
import { server_error } from "../../types/server_error"

export class PlanoContratadoController {
    async getAll(req: Request, res: Response) {
        try {
            const planoContratadoService = PlanoContratadoFactory()
            const response = await planoContratadoService.getAll(req.body.tenantId)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }
}