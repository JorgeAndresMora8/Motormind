export const validateDiagnosisInput = (symptoms: string, carId: string): { valid: boolean; error?: string } => {
    if (!symptoms || !carId) {
        return { valid: false, error: "Faltan datos." };
    }
    if (symptoms.trim().length < 14) {
        return { valid: false, error: "El mensaje de síntomas debe tener al menos 14 caracteres." };
    }
    return { valid: true };
};
