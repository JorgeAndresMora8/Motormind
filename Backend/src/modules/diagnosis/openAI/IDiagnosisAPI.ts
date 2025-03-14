export interface IDiagnosisAPI {
    generateDiagnosis(symptoms: string): 
    Promise<{ high: string; medium: string; low: string }>;
  }
  