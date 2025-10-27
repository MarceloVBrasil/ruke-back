import dotent from "dotenv"
import nodemailer from "nodemailer"

dotent.config()

const { EMAIL_PASSWORD } = process.env

const emailConfig: { host: string, port: number, user: string, password: string } = {
    host: 'smtp.gmail.com',
    port: 465,
    user: 'marcelovitalbrasil92@gmail.com',
    password: EMAIL_PASSWORD as string
}

export const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: { user: emailConfig.user, pass: emailConfig.password },
    tls: { rejectUnauthorized: true }
})