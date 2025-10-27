import { Request, Response } from "express"
import { server_error } from "../../types/server_error"
import { PlanoSchema } from "./PlanoSchema"
import { PlanoFactory } from "../../services/PlanoService/PlanoFactory"

const planoService = PlanoFactory()

export class PlanoController {
    async getAllByProdutoId(req: Request, res: Response) {
        try {
            const data = await PlanoSchema.getAllByProdutoId().validate({ ...req.params }, { stripUnknown: true })
            const response = await planoService.getAllByProdutoId(data.produto_id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const data = await PlanoSchema.getById().validate({ ...req.params }, { stripUnknown: true })
            const response = await planoService.getById(data.id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async add(req: Request, res: Response) {
        try {
            const data = await PlanoSchema.add().validate({ ...req.params }, { stripUnknown: true })
            const response = await planoService.add(data)
            res.status(201).json({ message: 'plano adicionado com sucesso' })
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const data = await PlanoSchema.update().validate({ ...req.params }, { stripUnknown: true })
            const response = await planoService.update(data.id, data)
            res.status(200).json({ message: 'plano atualizado com sucesso' })
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const data = await PlanoSchema.delete().validate({ ...req.params }, { stripUnknown: true })
            const response = await planoService.delete(data.id)
            res.status(200).json({ message: 'plano deletado com sucesso' })
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }
}