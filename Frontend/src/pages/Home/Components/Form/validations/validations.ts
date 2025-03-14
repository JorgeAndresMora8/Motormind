export const validateCarForm = (formData: any): string | null => {
    if (
      formData.brand.length < 2 ||
      formData.model.length < 2 ||
      formData.year.length < 2 ||
      formData.image.length < 5
    ) {
      return "Todos los campos deben tener al menos 2 caracteres (imagen 5).";
    }
    return null;
  };
  