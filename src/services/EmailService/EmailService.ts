import { transporter } from "./EmailHelpers";
import { IEmailOptions } from "./IEmailOptions";

export class EmailService {
    async sendCodigoParaLogin(to: string, codigo: string) {
        const emailOptions: IEmailOptions = {
            to: to,
            from: { name: "RUKE", address: "noreply@ruke.com.br" },
            subject: "Código provisório para efetuar login",
            html: `<p>seu código é ${codigo}</p>`
        }

        await transporter.sendMail(emailOptions)
    }

    async sendCodigoParaMudarSenha(to: string, codigo: string) {
        const emailOptions: IEmailOptions = {
            to: to,
            from: { name: "RUKE", address: "noreply@ruke.com.br" },
            subject: "Código provisório para mudar senha",
            html: `<p>seu código é ${codigo}</p>`
        }

        await transporter.sendMail(emailOptions)
    }
}