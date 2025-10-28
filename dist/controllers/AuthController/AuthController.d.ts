import { Request, Response } from "express";
export declare class AuthController {
    login(req: Request, res: Response): Promise<void>;
    loginComCodigo(req: Request, res: Response): Promise<void>;
    solicitarCodigo(req: Request, res: Response): Promise<void>;
    refreshToken(req: Request, res: Response): Promise<void>;
    register(req: Request, res: Response): Promise<void>;
}
//# sourceMappingURL=AuthController.d.ts.map