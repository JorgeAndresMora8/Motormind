import {IDiagnosis} from "../../../types";
import { ApiDiagnosis } from "../models/models";

// Convert from API response to local application type (IDiagnosis)
export const adaptDiagnosisFromAPI = (apiDiagnosis: ApiDiagnosis): IDiagnosis => ({
    carId: apiDiagnosis.carId,
    id: apiDiagnosis.id,
    date: apiDiagnosis.date,
    symptoms: apiDiagnosis.symptoms,
    diagnosis: apiDiagnosis.diagnosis,
  });

