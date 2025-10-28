import { Request, Response, NextFunction } from "express";
export declare function authorizationMiddleware(dominio: string, permissoes: string[]): (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
//# sourceMappingURL=authorizationMiddleware.d.ts.map