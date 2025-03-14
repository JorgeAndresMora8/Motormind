import { Router } from 'express';
import { GetDiagnosis, createDiagnosis, GetDiagnosisCarRelated } from '../controller';

const DiagnosisRouter = Router();

DiagnosisRouter.get("/:id", GetDiagnosis);
DiagnosisRouter.get("/car/:carId", GetDiagnosisCarRelated)
DiagnosisRouter.post("/", createDiagnosis);

export default DiagnosisRouter;