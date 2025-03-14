import {IDiagnosis} from "../../../types";
import { ApiDiagnosis } from "../models/models";

export const adaptDiagnosisFromAPI = (apiDiagnosis: ApiDiagnosis): IDiagnosis => ({
    carId: apiDiagnosis.carId,
    id: apiDiagnosis.id,
    date: apiDiagnosis.date,
    symptoms: apiDiagnosis.symptoms,
    diagnosis: apiDiagnosis.diagnosis,
  });

