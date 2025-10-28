import { PessoaFactory } from "../../services/PessoaService/PessoaFactory";
export class PessoaController {
    async getAll(req, res) {
        try {
            const pessoaService = PessoaFactory();
            const response = await pessoaService.getAll(req.params.id_bpc);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async getById(req, res) {
        try {
            const pessoaService = PessoaFactory();
            const response = await pessoaService.getById(req.params.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async add(req, res) {
        try {
            const pessoaService = PessoaFactory();
            req.body = req.body.id_bpc;
            const response = await pessoaService.add(req.body);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async update(req, res) {
        try {
            const pessoaService = PessoaFactory();
            const response = await pessoaService.update(req.params.id, req.body);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
    async delete(req, res) {
        try {
            const pessoaService = PessoaFactory();
            const response = await pessoaService.delete(req.params.id);
            res.status(200).json(response);
        }
        catch (error) {
            const err = { errror: true, message: error.message };
            res.status(500).json(err);
        }
    }
}
