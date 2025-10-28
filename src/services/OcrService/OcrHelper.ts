export class OcrHelper {
    static getNome(text: string[]) {
        for (let i = 0; i < text.length; i++) {
            if (text[i].toUpperCase().includes('NOME')) return text[i + 1]
        }
    }
}