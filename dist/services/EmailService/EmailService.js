"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailService = void 0;
const EmailHelpers_1 = require("./EmailHelpers");
class EmailService {
    async sendCodigoParaLogin(to, codigo) {
        const emailOptions = {
            to: to,
            from: { name: "RUKE", address: "noreply@ruke.com.br" },
            subject: "Código provisório para efetuar login",
            html: `<p>seu código é ${codigo}</p>`
        };
        await EmailHelpers_1.transporter.sendMail(emailOptions);
    }
    async sendCodigoParaMudarSenha(to, codigo) {
        const emailOptions = {
            to: to,
            from: { name: "RUKE", address: "noreply@ruke.com.br" },
            subject: "Código provisório para mudar senha",
            html: `<p>seu código é ${codigo}</p>`
        };
        await EmailHelpers_1.transporter.sendMail(emailOptions);
    }
}
exports.EmailService = EmailService;
