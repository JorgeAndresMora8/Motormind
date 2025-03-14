import { Request, Response, NextFunction } from 'express';
import { carService } from '../modules';
import { getSocketInstance } from '../socket';
import { SOCKET_CHANNELS } from '../constant/socket';

const GetCars = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const resp = await carService.getCars();
        res.status(200).json(resp);
    } catch (error) {
        next(error);
    }
};

const AddCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        await carService.createCar(req.body);
        const newList = await carService.getCars();
        const io = getSocketInstance();
        io.emit(SOCKET_CHANNELS.NEW_CAR_LIST, newList);
        res.status(201).json(newList);
    } catch (error) {
        next(error);
    }
};

const GetCar = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const resp = await carService.getCarById(req.params.id);
        if (!resp) {
            const err = new Error("Car not found");
            (err as any).statusCode = 404;
            throw err;
        }
        res.status(200).json(resp);
    } catch (error) {
        next(error);
    }
};

export { GetCars, AddCar, GetCar };
