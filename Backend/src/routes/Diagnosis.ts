import { Router } from 'express';
import { GetDiagnosis, createDiagnosis, GetDiagnosisCarRelated } from '../controller';
import { catchedAsync } from '../utilities';

const DiagnosisRouter = Router();

DiagnosisRouter.get("/:id", catchedAsync(GetDiagnosis));
DiagnosisRouter.get("/car/:carId", catchedAsync(GetDiagnosisCarRelated))
DiagnosisRouter.post("/", catchedAsync(createDiagnosis));

export default DiagnosisRouter;