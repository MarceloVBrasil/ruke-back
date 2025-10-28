export class OcrHelper {
    static getNome(text: string[]) {
        const lines = this.getLines(text)

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].toUpperCase().includes('NOME')) return lines[i + 1]
        }
    }

    static getCep(text: string[]) {
        const lines = this.getLines(text)

        for (let i = 0; i < lines.length; i++) {
            if (lines[i].toUpperCase().includes('CEP')) {
                const words = lines[i].split(' ')
                return words[1]
            }
        }
    }

    private static getLines(text: string[]) {
        return text[0].split('\n')
    }
}