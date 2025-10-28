import tesseract from "node-tesseract-ocr";
import { TrabalhistaFactory } from "../TrabalhistaService/TrabalhistaFactory"
import { OcrHelper } from "./OcrHelper";
import { SuperendividamentoFactory } from "../SuperendividamentoService/SuperendividamentoFactory";
import { RmcFactory } from "../RmcService/RmcFactory";
import { BpcFactory } from "../BpcService/BpcFactory";

export class OcrService {
    async trabalhista(files: Express.Multer.File[], tenant_id: string) {
        const identidade: string[] = []
        const comprovante_residencia: string[] = []
        const trabalhistaService = TrabalhistaFactory()

        for (const file of files) {
            if (file.fieldname === 'identidade') {
                const text = await tesseract.recognize(file.buffer, { lang: "eng" });
                identidade.push(text)
            }

            if (file.fieldname === 'comprovante_residencia') {
                const text = await tesseract.recognize(file.buffer, { lang: "eng" });
                comprovante_residencia.push(text)
            }
        }

        const nome_reclamante = OcrHelper.getNome(identidade)
        const cep_reclamante = OcrHelper.getCep(comprovante_residencia)

        const trabalhista = await trabalhistaService.add(tenant_id)
        await trabalhistaService.update(trabalhista.id, { nome_reclamante, cep_reclamante })

        return { id_ticket: trabalhista.id }
    }

    async superendividamento(files: Express.Multer.File[], tenant_id: string) {
        const identidade: string[] = [];
        const comprovante_residencia: string[] = []
        const superendividamentoService = SuperendividamentoFactory()

        for (const file of files) {
            if (file.fieldname === 'identidade') {
                const text = await tesseract.recognize(file.buffer, { lang: "eng" });
                identidade.push(text)
            }

            if (file.fieldname === 'comprovante_residencia') {
                const text = await tesseract.recognize(file.buffer, { lang: "eng" });
                comprovante_residencia.push(text)
            }
        }

        const nome_cliente = OcrHelper.getNome(identidade)
        const cep_cliente = OcrHelper.getCep(comprovante_residencia)

        const superendividamento = await superendividamentoService.add(tenant_id)
        await superendividamentoService.update(superendividamento.id, { nome_cliente, cep_cliente })

        return { id_ticket: superendividamento.id }
    }

    async rmc(files: Express.Multer.File[], tenant_id: string) {
        const identidade: string[] = [];
        const rmcService = RmcFactory()

        for (const file of files) {
            if (file.fieldname === 'identidade') {
                const text = await tesseract.recognize(file.buffer, { lang: "eng" });
                identidade.push(text)
            }
        }

        const name_client = OcrHelper.getNome(identidade)

        const rmc = await rmcService.add(tenant_id)
        await rmcService.update(rmc.id, { name_client })

        return { id_ticket: rmc.id }
    }

    async bpc(files: Express.Multer.File[], tenant_id: string) {
        const identidade: string[] = [];
        const comprovante_residencia: string[] = []
        const bpcService = BpcFactory()

        for (const file of files) {
            if (file.fieldname === 'identidade') {
                const text = await tesseract.recognize(file.buffer, { lang: "eng" });
                identidade.push(text)
            }

            if (file.fieldname === 'comprovante_residencia') {
                const text = await tesseract.recognize(file.buffer, { lang: "eng" });
                comprovante_residencia.push(text)
            }
        }

        const nome_cliente = OcrHelper.getNome(identidade)
        const cep = OcrHelper.getCep(comprovante_residencia)

        const bpc = await bpcService.add(tenant_id)
        await bpcService.update(bpc.id, { nome_cliente, cep })

        return { id_ticket: bpc.id }
    }
}