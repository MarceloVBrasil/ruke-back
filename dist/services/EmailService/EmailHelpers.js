"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transporter = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const nodemailer_1 = __importDefault(require("nodemailer"));
dotenv_1.default.config();
const { EMAIL_PASSWORD } = process.env;
const emailConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    user: 'marcelovitalbrasil92@gmail.com',
    password: EMAIL_PASSWORD
};
exports.transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    secure: true,
    auth: { user: emailConfig.user, pass: emailConfig.password },
    tls: { rejectUnauthorized: true }
});
