import { API_ROUTES } from "../config";
import { CarFormData } from "../Pages/Home/Components/Form/Model";


export const createCar = async (formData: CarFormData) => {
  try {
    const response =  await fetch(API_ROUTES.CARS(), { 
        method:"POST", 
        body: JSON.stringify({...formData}), 
        headers:{"Content-type":"Application/json"}
      })

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "Error al generar diagnóstico");
    }

    return await response.json();
  } catch (error) {
    throw error; 
  }
};