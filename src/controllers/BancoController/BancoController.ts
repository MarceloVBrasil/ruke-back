import axios from "axios"
import { Request, Response } from "express"
import { server_error } from "../../types/server_error"

export class BancoController {
    async getAll(req: Request, res: Response) {
        try {
            const data = await axios.get(`https://olinda.bcb.gov.br/olinda/servico/Instituicoes_em_funcionamento/versao/v1/odata/SedesBancoComMultCE?%24format=json`)
            res.status(200).json(data.data.value)
        } catch (error: any) {
            const err: server_error = { error: true, message: error.message }
            res.status(500).json(err)
        }
    }
}