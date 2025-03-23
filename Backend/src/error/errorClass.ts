import { Request, Response, NextFunction } from "express";

export class ClientError extends Error { 

  status: number

  constructor(message: string, status: number = 400){ 
    super(message)
    this.status = status

    Error.captureStackTrace(this, this.constructor);
  }

}

export const errorHandler = (
  err: any, // Acepta cualquier tipo de error
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log('error handler')
  // console.error("Error:", err.message);

  // // Verifica que el error tenga un status, de lo contrario usa 500
  // const status = err.status && typeof err.status === "number" ? err.status : 400;
  
  // console.log("Middleware ejecutándose");

  // res.status(status).json({
  //   error: true,
  //   message: err.message || "Internal Server Error",
  // });
};

