import { Request, Response } from "express"
import { ProdutoSchema } from "./ProdutoSchema"
import { ProdutoFactory } from "../../services/ProdutoService/ProdutoFactory"
import { server_error } from "../../types/server_error"

export class ProdutoController {
    async getAll(req: Request, res: Response) {
        try {
            const produtoService = ProdutoFactory()
            const response = await produtoService.getAll()
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async add(req: Request, res: Response) {
        try {
            const data = await ProdutoSchema.add().validate({ ...req.body }, { stripUnknown: true })
            const produtoService = ProdutoFactory()
            const response = await produtoService.add(data)
            res.status(201).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const data = await ProdutoSchema.update().validate({ ...req.body, ...req.params }, { stripUnknown: true })
            const produtoService = ProdutoFactory()
            const response = await produtoService.update(data.id, data)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const data = await ProdutoSchema.delete().validate({ ...req.params }, { stripUnknown: true })
            const produtoService = ProdutoFactory()
            const response = await produtoService.delete(data.id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(500).json(err)
        }
    }
}