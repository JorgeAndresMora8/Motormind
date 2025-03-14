import { carDAO, ICarDAO } from "./DAO";
import {ICar} from '../../types'
import CarModel from "./model";

export interface ICarRepository {
    getAllCars(): Promise<ICar[]>;
    getCarById(id: string): Promise<ICar | null>;
    addCar(data: ICar): Promise<ICar>;
    deleteCar(id: string): Promise<any>;
  }

export class CarRepository implements ICarRepository {
  private carDao: ICarDAO;

  constructor(carDao: ICarDAO) {
    this.carDao = carDao;
  }

  async getAllCars(): Promise<ICar[]> {
    const resp = await this.carDao.findAll();
    const carList = resp.map((car) => { 
      let carItem = new CarModel(car.id, car.brand, car.year, car.model, car.milaege, car.image)
      return carItem.asDTO() as ICar
    })


    return carList as ICar[];
  }

  async getCarById(id: string): Promise<ICar | null> {
    const resp = await this.carDao.findById(id) as ICar;
    const car = new CarModel(resp.id, resp.brand, resp.year, resp.model, resp.milaege, resp.image);
    return car.asDTO() as ICar | null;
  }

  async addCar(car: ICar): Promise<ICar> {
    const resp = await this.carDao.create(car);
    return resp as ICar;
  }

  async deleteCar(id: string): Promise<any> {
    return await this.carDao.delete(id);
  }
}

export const carRepository = new CarRepository(carDAO)