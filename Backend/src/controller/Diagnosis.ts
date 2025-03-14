import { NextFunction, Request, Response } from "express";
import { diagnosisService } from "../modules";
import { validateDiagnosisInput } from "../utilities";
import { getSocketInstance } from "../socket";
import { SOCKET_CHANNELS } from "../constant/socket";

const GetDiagnosis = async (req: Request, res: Response) => {
    const diagnosis = await diagnosisService.getDiagnosisById(req.params.id);
    res.status(200).json(diagnosis);
};

const GetDiagnosisCarRelated = async (req: Request, res: Response) => {
  try {
    const resp = await diagnosisService.getDiagnosisByCarId(req.params.carId);
    res.status(200).json(resp);
  } catch (error) {
    console.error("Error generando diagnóstico:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
};

const createDiagnosis = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const io = getSocketInstance();
  const { valid, error } = validateDiagnosisInput(
    req.body.symptoms,
    req.body.carId
  );

  if (!valid) {
    res.status(400).json({ error: error });
    return;
  }

  try {
    res.status(200).json({ sucess: "Generando diagnostico" });
        const resp = await diagnosisService.createDiagnosis(
            req.body.symptoms,
            req.body.carId
          );
          
          io.emit(SOCKET_CHANNELS.DIAGNOSTIC, JSON.stringify(resp));
    
  } catch (error) {
    next(error);
  }
};

export { createDiagnosis, GetDiagnosis, GetDiagnosisCarRelated };
