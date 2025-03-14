 interface IDiagnosis { 
    id: string;
    carId: string;
    date: string;
    diagnosis: { 
        high: string, 
        medium: string, 
        low: string
    },
    symptoms: string, 
}

export {IDiagnosis}