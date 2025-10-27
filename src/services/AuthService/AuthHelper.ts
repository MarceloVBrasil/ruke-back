import * as jwt from "jsonwebtoken"
import dotenv from "dotenv"
import bcrypt from "bcrypt"

dotenv.config()

const { JWT_ASSINATURA } = process.env

export class AuthHelper {
    generateJWT(payload: any, expiresIn: any): string {
        const options = { expiresIn }
        const token = jwt.sign(payload, JWT_ASSINATURA as string, options)
        return token

    }

    verifyJWT(data: string): boolean {
        const [prefix, token] = data.split(' ')

        if (prefix !== 'Bearer') return false
        if (jwt.verify(token, JWT_ASSINATURA as string)) return true

        return false

    }

    decodeJWT(data: string): any {
        const [prefix, token] = data.split(' ')

        const decodedToken = jwt.decode(token)
        return decodedToken
    }

    hashPasssword(password: string): string {
        return bcrypt.hashSync(password, 12)
    }

    verifyPassword(password: string, hash: string): boolean {
        return bcrypt.compareSync(password, hash)
    }
}