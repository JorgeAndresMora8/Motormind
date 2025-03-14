interface ICar {
    id: string;
    brand: string;
    year: string;
    model: string;
    milaege: number;
    image: string;
}

interface ICreateCar { 
    brand: string;
    year: string;
    model: string;
    milaege: number;
    image: string;
}

export {ICar, ICreateCar}