export const API_HOST = 'http://localhost:8080'

export const API_BASE_URL = "http://localhost:8080/api/v1";

export const API_ROUTES = {
  DIAGNOSIS: () => `${API_BASE_URL}/diagnosis`,
  DIAGNOSIS_DETAIL: (id: string) => `${API_BASE_URL}/diagnosis/${id}`,
  DIAGNOSIS_CAR_RELATED:(id: string) => `${API_BASE_URL}/diagnosis/car/${id}`,
  CARS: (id?: string) => id ? `${API_BASE_URL}/car/${id}` : `${API_BASE_URL}/car`,
  USERS: (id?: string) => id ? `${API_BASE_URL}/users/${id}` : `${API_BASE_URL}/users`,
};

