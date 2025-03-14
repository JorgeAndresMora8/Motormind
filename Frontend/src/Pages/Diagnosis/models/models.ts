// Interfaz para los datos de la API
export interface ApiDiagnosis {
    carId: string;
    id: string;
    date: string;
    symptoms: string;
    diagnosis: {
      high: string;
      medium: string;
      low: string;
    };
  }