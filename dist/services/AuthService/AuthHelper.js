import * as jwt from "jsonwebtoken";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
dotenv.config();
const { JWT_ASSINATURA } = process.env;
export class AuthHelper {
    generateJWT(payload, expiresIn) {
        const options = { expiresIn };
        const token = jwt.sign(payload, JWT_ASSINATURA, options);
        return token;
    }
    verifyJWT(data) {
        const [prefix, token] = data.split(' ');
        if (prefix !== 'Bearer')
            return false;
        if (jwt.verify(token, JWT_ASSINATURA))
            return true;
        return false;
    }
    decodeJWT(data) {
        const [prefix, token] = data.split(' ');
        const decodedToken = jwt.decode(token);
        return decodedToken;
    }
    hashPasssword(password) {
        return bcrypt.hashSync(password, 12);
    }
    verifyPassword(password, hash) {
        return bcrypt.compareSync(password, hash);
    }
}
