import { Router } from 'express';
import { AddCar, GetCar, GetCars } from '../controller';
import { catchedAsync } from '../utilities';

const CarRouter = Router();

CarRouter.get("/", catchedAsync(GetCars));
CarRouter.post("/", catchedAsync(AddCar));
CarRouter.get('/:id', catchedAsync(GetCar));

export default CarRouter;