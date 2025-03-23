import { carRepository, ICarRepository } from "./Repository";
import {ICar} from "../../types";
import {createID} from "../../utilities";

export interface ICarService {
    getCars(): Promise<ICar[]>;
    getCarById(id: string): Promise<ICar | void>;
    createCar(data: ICar): Promise<ICar>;
    deleteCar(id: string): Promise<any>;
  }

export class CarService implements ICarService {
  private repository: ICarRepository;

  constructor(repository: ICarRepository) {
    this.repository = repository;
  }

  async getCars(): Promise<ICar[]> {
    return await this.repository.getAllCars() as ICar[];
  }

  async getCarById(id: string): Promise<ICar | void> {
    return await this.repository.getCarById(id);
  }

  async createCar(car: ICar): Promise<ICar> {
    car.id = createID()
    return await this.repository.addCar(car) as ICar;
  }

  async deleteCar(id: string): Promise<any> {
    return await this.repository.deleteCar(id);
  }
}

export const carService = new CarService(carRepository);