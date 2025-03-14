import { API_ROUTES } from "../config";

export const generateDiagnosis = async (carId: string, symptoms: string) => {
  try {
    const response = await fetch(API_ROUTES.DIAGNOSIS(), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms, carId }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al generar diagnóstico");
    }

    return await response.json();
  } catch (error) {
    throw error; // Manejo de error en el componente
  }
};
