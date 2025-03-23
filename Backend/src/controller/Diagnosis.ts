import { NextFunction, Request, Response } from "express";
import { response } from "../utilities";
import { diagnosisService } from "../modules";
import { validateDiagnosisInput } from "../utilities";
import { getSocketInstance } from "../socket";
import { SOCKET_CHANNELS } from "../constant/socket";
import { ClientError } from "../error";

const GetDiagnosis = async (req: Request, res: Response) => {
  const resp = await diagnosisService.getDiagnosisById(req.params.id);
  response(res, 200, resp);
};

const GetDiagnosisCarRelated = async (req: Request, res: Response) => {
  const resp = await diagnosisService.getDiagnosisByCarId(req.params.carId);
  response(res, 200, resp);
};

const createDiagnosis = async (req: Request, res: Response) => {
  const io = getSocketInstance();
  const { valid, error } = validateDiagnosisInput(
    req.body.symptoms,
    req.body.carId
  );

  if (!valid) new ClientError("hubo un error en la validacion del diagnositoc");

  response(res, 200, "Generando diagnostico");
  // Buena idea de generar un adapter
  const resp = await diagnosisService.createDiagnosis( req.body.symptoms,req.body.carId);

  io.emit(SOCKET_CHANNELS.DIAGNOSTIC, JSON.stringify(resp));
};

export { createDiagnosis, GetDiagnosis, GetDiagnosisCarRelated };
