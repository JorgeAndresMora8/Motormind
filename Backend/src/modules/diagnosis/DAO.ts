import {IDiagnosis} from "../../types";
import { Model } from "mongoose"; 
import { DiagnosisModel } from "../../DB"

export interface IDiagnosisDAO {
  findAllDiagnosis(): Promise<IDiagnosis[]>;
  findDiagnosisByCarId(carId: string): Promise<IDiagnosis[]>
  findDiagnosisById(id: string): Promise<IDiagnosis | null>;
  createDiagnosis(diagnosis: IDiagnosis): Promise<IDiagnosis | null>;
}

export class DiagnosisDAO implements IDiagnosisDAO {
  private schema: Model<any>;

  constructor(schema: Model<any>) {
    this.schema = schema;
  }

  async findDiagnosisByCarId(carId: string): Promise<IDiagnosis[]>{ 
    const resp = await this.schema.find({carId: carId})
    return resp
  }

  async findAllDiagnosis(): Promise<IDiagnosis[]> {
    const resp = await this.schema.find({});
    return resp;
  }

  async findDiagnosisById(id: string): Promise<IDiagnosis | null> {
    const resp = await this.schema.findOne({id: id})
    return resp;
  }

  async createDiagnosis(diagnosis: IDiagnosis): Promise<IDiagnosis | null> {
    const created = await this.schema.create({
            id: diagnosis.id,
            carId: diagnosis.carId,
            date: diagnosis.date,
            diagnosis: diagnosis.diagnosis,
            symptoms: diagnosis.symptoms
    });
    return created;
  }
}


export const diagnosisDAO = new DiagnosisDAO(DiagnosisModel)