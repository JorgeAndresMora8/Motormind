import { IDiagnosis } from "../../types";
import {getDate} from "../../utilities";
import {createID} from "../../utilities";
import GenerateDiagnosisUseCase from "./openAI/GenerateDiagnosisUseCase";
import { IDiagnosisRepository, diagnosisRepository } from "./Repository";

export interface IDiagnosisService {
  getDiagnosisById(id: string): Promise<IDiagnosis | null>;
  getDiagnosisByCarId(carId: string): Promise<IDiagnosis[] | null>;
  createDiagnosis(data: string, carId: string): Promise<IDiagnosis | null>;
  deleteCar(id: string): Promise<any>;
}

export class DiagnosisService implements IDiagnosisService {
  private repository: IDiagnosisRepository;

  constructor(repository: IDiagnosisRepository) {
    this.repository = repository;
  }


  async getDiagnosisByCarId(carId: string): Promise<IDiagnosis[] | null> { 
    const item = await this.repository.getDiagnosisByCarId(carId)
    return item
  }
  async getDiagnosisById(id: string): Promise<IDiagnosis | null> {
    const item = await this.repository.getDiagnosisById(id)
    return item
     
  }

  async createDiagnosis(symptoms: string, carId: string): Promise<IDiagnosis | null>{
        const diagnosis = await GenerateDiagnosisUseCase.execute(symptoms);
        const diagnosisObj: IDiagnosis = { 
            id: createID(),
            carId: carId, 
            date: getDate(),
            diagnosis: diagnosis, 
            symptoms: symptoms
        }

        await this.repository.createDiagnosis(diagnosisObj)
        return diagnosisObj

  }

  async deleteCar(id: string): Promise<any> {
      
  }



}


export const diagnosisService = new DiagnosisService(diagnosisRepository)