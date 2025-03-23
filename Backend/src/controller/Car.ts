import { Request, Response, NextFunction } from "express";
import { carService } from "../modules";
import { getSocketInstance } from "../socket";
import { response } from "../utilities";
import { SOCKET_CHANNELS } from "../constant/socket";

const GetCars = async (req: Request, res: Response, next: NextFunction) => {
  const resp = await carService.getCars();
  response(res, 200, resp);
};

const AddCar = async (req: Request, res: Response, next: NextFunction) => {
    await carService.createCar(req.body);
    const resp = await carService.getCars();
    const io = getSocketInstance();
    io.emit(SOCKET_CHANNELS.NEW_CAR_LIST, resp);
    response(res, 200, resp);
};

const GetCar = async (req: Request, res: Response, next: NextFunction) => {
    const resp = await carService.getCarById(req.params.id);
    response(res, 200, resp);
};

export { GetCars, AddCar, GetCar };
