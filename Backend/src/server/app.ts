import express from "express";
import cors from "cors";
import { CarRouter } from "../routes";
import { DiagnosisRouter } from "../routes";
import { Request, Response, NextFunction } from "express";
import { errorResponse } from "../utilities";

export const app = express();

app.use(cors());
app.use(express.json());
interface CustomError extends Error {
  status?: number;
}

interface CustomError extends Error {
  status?: number;
}

const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => errorResponse(res, err.status!, err.message);

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
    res.status(404).json({
        success: false,
        error: "La ruta que buscas no existe.",
    });
};

app.use("/api/v1/car", CarRouter);
app.use("/api/v1/diagnosis", DiagnosisRouter);
app.use(errorHandler);
app.use(notFoundHandler);
