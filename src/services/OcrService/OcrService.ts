import tesseract from "node-tesseract-ocr";
import { TrabalhistaFactory } from "../TrabalhistaService/TrabalhistaFactory"
import { OcrHelper } from "./OcrHelper";
import { SuperendividamentoFactory } from "../SuperendividamentoService/SuperendividamentoFactory";
import { RmcFactory } from "../RmcService/RmcFactory";
import { BpcFactory } from "../BpcService/BpcFactory";

export class OcrService {
    async trabalhista(files: Express.Multer.File[], tenant_id: string) {
        const results: string[] = [];
        const trabalhistaService = TrabalhistaFactory()

        for (const file of files) {
            const text = await tesseract.recognize(file.buffer, { lang: "eng" });
            results.push(text);
        }

        const lines = results[0].split('\n')
        const nome_reclamante = OcrHelper.getNome(lines)
        const trabalhista = await trabalhistaService.add(tenant_id)
        await trabalhistaService.update(trabalhista.id, { nome_reclamante })
        return { id_ticket: trabalhista.id }
    }

    async superendividamento(files: Express.Multer.File[], tenant_id: string) {
        const results: string[] = [];
        const superendividamentoService = SuperendividamentoFactory()

        for (const file of files) {
            const text = await tesseract.recognize(file.buffer, { lang: "eng" });
            results.push(text);
        }

        const lines = results[0].split('\n')
        const nome_cliente = OcrHelper.getNome(lines)
        const superendividamento = await superendividamentoService.add(tenant_id)
        await superendividamentoService.update(superendividamento.id, { nome_cliente })
        return { id_ticket: superendividamento.id }
    }

    async rmc(files: Express.Multer.File[], tenant_id: string) {
        const results: string[] = [];
        const rmcService = RmcFactory()

        for (const file of files) {
            const text = await tesseract.recognize(file.buffer, { lang: "eng" });
            results.push(text);
        }

        const lines = results[0].split('\n')
        const name_client = OcrHelper.getNome(lines)
        const rmc = await rmcService.add(tenant_id)
        await rmcService.update(rmc.id, { name_client })
        return { id_ticket: rmc.id }
    }

    async bpc(files: Express.Multer.File[], tenant_id: string) {
        const results: string[] = [];
        const bpcService = BpcFactory()

        for (const file of files) {
            const text = await tesseract.recognize(file.buffer, { lang: "eng" });
            results.push(text);
        }

        const lines = results[0].split('\n')
        const nome_cliente = OcrHelper.getNome(lines)
        const bpc = await bpcService.add(tenant_id)
        await bpcService.update(bpc.id, { nome_cliente })
        return { id_ticket: bpc.id }
    }
}