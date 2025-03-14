import { CarModel } from "../../DB"
import { Model } from "mongoose"; 
import {ICar} from '../../types'

export interface ICarDAO {
    findAll(): Promise<ICar[]>;
    findById(id: string): Promise<ICar | null>;
    create(data: ICar): Promise<ICar>;
    delete(id: string): Promise<any>;
  }

export class CarDAO implements ICarDAO {
  private schema: Model<any>;

  constructor(schema: Model<any>) {
    this.schema = schema;
  }

  async findAll(): Promise<ICar[]> {
    const resp = await this.schema.find({});
    return resp
  }

  async findById(id: string): Promise<ICar | null> {
    const resp = await this.schema.findOne({ id });
    return resp
  }

  async create(data: ICar): Promise<ICar> {
    const resp = await this.schema.create({
      id: data.id,
      brand: data.brand,
      year: data.year,
      model: data.model,
      milaege: data.milaege,
      image: data.image,
    });
    return resp
  }

  async delete(id: string): Promise<any> {
    return await this.schema.deleteOne({ id });
  }
}

export const carDAO = new CarDAO(CarModel)