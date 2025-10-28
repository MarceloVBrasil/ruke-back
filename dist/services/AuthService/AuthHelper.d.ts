export declare class AuthHelper {
    generateJWT(payload: any, expiresIn: any): string;
    verifyJWT(data: string): boolean;
    decodeJWT(data: string): any;
    hashPasssword(password: string): string;
    verifyPassword(password: string, hash: string): boolean;
}
//# sourceMappingURL=AuthHelper.d.ts.map