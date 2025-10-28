export class OcrHelper {
    static getNome(text) {
        const lines = this.getLines(text);
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].toUpperCase().includes('NOME'))
                return lines[i + 1];
        }
    }
    static getCep(text) {
        const lines = this.getLines(text);
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].toUpperCase().includes('CEP')) {
                const words = lines[i].split(' ');
                return words[1];
            }
        }
    }
    static getLines(text) {
        return text[0].split('\n');
    }
}
