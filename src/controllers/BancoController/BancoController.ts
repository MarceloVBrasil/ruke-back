import axios from "axios"
import { Request, Response } from "express"

export class BancoController {
    async getAll(req: Request, res: Response) {
        const data = await axios.get(`https://olinda.bcb.gov.br/olinda/servico/Instituicoes_em_funcionamento/versao/v1/odata/SedesBancoComMultCE?%24format=json`)
        res.status(200).json(data.data.value)
    }
}