import OpenAI from "openai";
import dotenv from "dotenv";
import { IDiagnosisAPI } from "./IDiagnosisAPI";
import { OPENAI_API_KEY } from "../../../config";


dotenv.config();

interface OpenAIApiResponse { 
  high: string; 
  medium: string;
  low: string;
}

class OpenAIAdapter implements IDiagnosisAPI {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: OPENAI_API_KEY,
    });
  }

  async generateDiagnosis(symptoms: string): Promise<{ high: string; medium: string; low: string }> {
    const prompt = `
      Eres un mecánico experto. Basado en los siguientes síntomas del automóvil: ${symptoms}, genera un diagnóstico estructurado en formato JSON con las siguientes claves:

{
  "high": "Causa más probable con una breve explicación",
  "medium": "Causa con probabilidad media con una breve explicación",
  "low": "Causa menos probable con una breve explicación"
}

Ejemplo:
{
  "high": "La batería está descargada debido a un alternador defectuoso.",
  "medium": "El motor de arranque podría estar fallando.",
  "low": "Puede ser un problema con el inmovilizador del vehículo."
}

Por favor, responde exclusivamente con un JSON válido sin ninguna otra explicación.
    `;

    const response = await this.openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });


    const diagnosisText = response.choices[0]?.message.content
    const diagnosisTextParse: OpenAIApiResponse = JSON.parse(diagnosisText as string)

    return {
      high: diagnosisTextParse.high,
      medium: diagnosisTextParse.medium,
      low: diagnosisTextParse.low,
    };
  }
}

export default new OpenAIAdapter();
