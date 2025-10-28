"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gerarNumero6Digitos = gerarNumero6Digitos;
function gerarNumero6Digitos() {
    return String(Math.floor(Math.random() * 1_000_000)).padStart(6, '0');
}
