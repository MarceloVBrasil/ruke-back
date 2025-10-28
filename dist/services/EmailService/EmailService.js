import { transporter } from "./EmailHelpers";
export class EmailService {
    async sendCodigoParaLogin(to, codigo) {
        const emailOptions = {
            to: to,
            from: { name: "RUKE", address: "noreply@ruke.com.br" },
            subject: "Código provisório para efetuar login",
            html: `<p>seu código é ${codigo}</p>`
        };
        await transporter.sendMail(emailOptions);
    }
}
