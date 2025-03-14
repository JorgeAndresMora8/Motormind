import { Request, Response, NextFunction } from "express";

const errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    const statusCode = 400;
    const message = err.message;
    res.status(statusCode).json({ error: message });
};

export default errorHandler;
