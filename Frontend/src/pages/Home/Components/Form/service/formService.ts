import { API_ROUTES } from "../../../../../config";
import {CarFormData} from "../Model";

export const createCar = async (formData: CarFormData) => {
  try {
    const response =  await fetch(API_ROUTES.CARS(), { 
        method:"POST", 
        body: JSON.stringify({...formData, id: '12345'}), 
        headers:{"Content-type":"Application/json"}
      })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al generar diagnóstico");
    }

    return await response.json();
  } catch (error) {
    throw error; // Manejo de error en el componente
  }
};