import { IDiagnosisAPI } from "./IDiagnosisAPI";
import OpenAIAdapter from "./adapter";

class GenerateDiagnosisUseCase {
  private diagnosisAPI: IDiagnosisAPI;

  constructor(diagnosisAPI: IDiagnosisAPI) {
    this.diagnosisAPI = diagnosisAPI;
  }

  async execute(symptoms: string) {
    
    return await this.diagnosisAPI.generateDiagnosis(symptoms);
  }
}

// Inyectamos OpenAIAdapter al caso de uso
export default new GenerateDiagnosisUseCase(OpenAIAdapter);
