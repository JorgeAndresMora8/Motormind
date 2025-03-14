class CarModel { 
    id: string; 
    brand: string; 
    year: string; 
    model: string; 
    milaege: number; 
    image: string;

    constructor(id: string, brand: string, year: string, model: string, mileage: number, image: string){
        this.id = id;
        this.brand = brand;
        this.year = year;
        this.model = model;
        this.milaege = mileage;
        this.image = image;
    }

    asDTO(){ 
        return Object.freeze({ 
            id: this.id,
            brand: this.brand,
            year: this.year,
            model: this.model,
            milaege: this.milaege,
            image: this.image
        })
    }
}

export default CarModel;