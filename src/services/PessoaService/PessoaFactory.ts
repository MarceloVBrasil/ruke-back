import { InMemoryPessoaRepository } from "../../repositories/pessoaRepository/inMemoryPessoaRepository"
import { PessoaService } from "./PessoaService"

let pessoaService: PessoaService | null = null

export function PessoaFactory() {
    if (!pessoaService) {
        pessoaService = new PessoaService(new InMemoryPessoaRepository())
    }

    return pessoaService
}