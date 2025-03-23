import { Request, Response, NextFunction } from 'express';


// Función para manejar errores en controladores async
export const catchedAsync = (fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) => { 
    return (req: Request, res: Response, next: NextFunction) => { 
        fn(req, res, next).catch((error) => next(error)); // 🔥 Asegurarse de pasar `next`
    }
};
