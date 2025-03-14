class Diagnosis { 
    id: string; 
    carId: string; 
    date: string; 
    diagnosis: object; 
    symptoms: string;

    constructor(id: string, carId: string, date: string, diagnosis: object, symptoms: string){
        this.id = id;
        this.carId = carId;
        this.date = date;
        this.diagnosis = diagnosis;
        this.symptoms = symptoms;
    }

    asDTO(){ 
        return Object.freeze({ 
            id: this.id,
            carId: this.carId,
            date: this.date,
            diagnosis: this.diagnosis,
            symptoms: this.symptoms,
        })
    }
}

export default Diagnosis