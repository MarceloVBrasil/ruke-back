import { Request, Response } from "express";
import { TenantFactory } from "../../services/TenantService/TenantFactory";
import { TenantSchema } from "./TenantSchema";
import { server_error } from "../../types/server_error";
import { Tenant } from "../../models/Tenant/Tenant";

const tenantService = TenantFactory()

export class TenantsController {

    async getAll(req: Request, res: Response) {
        try {
            const tenants = await tenantService.getAll()
            res.status(200).json(tenants)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async getById(req: Request, res: Response) {
        try {
            const tenant = await tenantService.getById(req.params.id)
            res.status(200).json(tenant)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(500).json(err)
        }
    }

    async add(req: Request, res: Response) {
        try {
            const data = await TenantSchema.add().validate(req.body, { stripUnknown: true })
            res.status(200).json({ message: "tenant adicionado com sucesso" })
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async update(req: Request, res: Response) {
        try {
            const data = await TenantSchema.update().validate({ ...req.params, ...req.body }, { stripUnknown: true })
            const response = await tenantService.update(data.id, data as Tenant)
            res.status(200).json(response)
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async delete(req: Request, res: Response) {
        try {
            const response = await tenantService.delete(req.params.id)
            res.status(200).json({ message: "tenant deletado com sucesso" })
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }

    async cancelarTodasAssinaturas(req: Request, res: Response) {
        try {
            tenantService.cancelarTodasAssinaturas()
            res.status(200).json({ message: "todas assinaturas foram canceladas com sucesso" })
        } catch (error: any) {
            const err: server_error = { errror: true, message: error.message }
            res.status(400).json(err)
        }
    }
}