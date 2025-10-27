import { Request, Response } from "express"
import { server_error } from "../../types/server_error"
import { UserFactory } from "../../services/UserService/UserFactory"
import { UserSchema } from "./UserSchema"
import { User } from "../../models/User/User"

export class UserController {

    async getAll(req: Request, res: Response) {
        try {
            const userService = UserFactory()
            const response = await userService.getAll(req.body.tenantId)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const userService = UserFactory()
            const response = await userService.getById(req.params.id)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async add(req: Request, res: Response) {
        try {
            const userService = UserFactory()
            const data = await UserSchema.add().validate({ ...req.body }, { stripUnknown: true })
            const response = await userService.add(req.body.tenantId, data)
            res.status(201).json({ message: 'usuário adicionado com sucesso' })
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const userService = UserFactory()
            const data = await UserSchema.update().validate({ ...req.body, ...req.params }, { stripUnknown: true })
            const response = await userService.update(data.id, data as User)
            res.status(200).json({ message: 'usuário atualizado com sucesso' })
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const userService = UserFactory()
            const data = await UserSchema.delete().validate({ ...req.params }, { stripUnknown: true })
            const response = await userService.delete(data.id)
            res.status(200).json({ message: 'usuário deletado com sucesso' })
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }
}