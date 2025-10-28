import { SuperendividamentoFactory } from "../../services/SuperendividamentoService/SuperendividamentoFactory";
import { SuperendividamentoSchema } from "./SuperendividamentoSchema";
export class SuperendividamentoController {
    async getAll(req, res) {
        try {
            const superendividamentoService = SuperendividamentoFactory();
            const response = await superendividamentoService.getAll(req.body.tenantId);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async getById(req, res) {
        try {
            const superendividamentoService = SuperendividamentoFactory();
            const response = await superendividamentoService.getById(req.params.id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async add(req, res) {
        try {
            const superendividamentoService = SuperendividamentoFactory();
            const response = await superendividamentoService.add(req.body.tenantId);
            return res.status(201).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async update(req, res) {
        try {
            const superendividamentoService = SuperendividamentoFactory();
            const data = await SuperendividamentoSchema.update().validate({ ...req.params, ...req.body, tenant_id: req.body.tenantId }, { stripUnknown: true });
            const response = await superendividamentoService.update(data.id, data);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
    async delete(req, res) {
        try {
            const superendividamentoService = SuperendividamentoFactory();
            const response = await superendividamentoService.delete(req.params.id);
            return res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            return res.status(500).json(err);
        }
    }
}
