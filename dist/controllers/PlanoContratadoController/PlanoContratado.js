import { PlanoContratadoFactory } from "../../services/PlanoContratadoService/PlanoContratadoFactory";
export class PlanoContratadoController {
    async getAll(req, res) {
        try {
            const planoContratadoService = PlanoContratadoFactory();
            const response = await planoContratadoService.getAll(req.body.tenantId);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(400).json(err);
        }
    }
}
