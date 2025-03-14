import { Router } from 'express'
import { AddCar, GetCar, GetCars } from '../controller'

const CarRouter = Router()

CarRouter.get("/", GetCars)
CarRouter.post("/", AddCar)
CarRouter.get('/:id', GetCar)

export default CarRouter