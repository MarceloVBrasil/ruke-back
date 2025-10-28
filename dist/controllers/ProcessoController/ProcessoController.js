import { ProcessoFactory } from "../../services/ProcessoService/ProcessoFactory";
import { ProcessoSchema } from "./ProcessoSchema";
export class ProcessoController {
    async getProcessos(req, res) {
        try {
            const processoService = ProcessoFactory();
            const data = await processoService.getProcessos(req.body.tenantId);
            res.status(200).json(data);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async getMovimentacoes(req, res) {
        try {
            const processoService = ProcessoFactory();
            const data = await processoService.getMovimentacoes();
            res.status(200).json(data);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async salvar(req, res) {
        try {
            const processoService = ProcessoFactory();
            const data = await ProcessoSchema.add().validate({ ...req.body, tenant_id: req.body.tenantId }, { stripUnknown: true });
            const response = await processoService.salvar(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async filtrar(req, res) {
        try {
            const processoService = ProcessoFactory();
            const data = await ProcessoSchema.filtrar().validate({ ...req.body });
            const response = await processoService.filtrar(data);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
}
