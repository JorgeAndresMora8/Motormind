import { diagnosisDAO, IDiagnosisDAO } from "./DAO";
import { IDiagnosis } from '../../types'
import Diagnosis from './model'

export interface IDiagnosisRepository {
    getAllDiagnosis(): Promise<IDiagnosis[]>;
    getDiagnosisById(id: string): Promise<IDiagnosis | null>;
    getDiagnosisByCarId(id: string): Promise<IDiagnosis[] | null>;
    createDiagnosis(data: IDiagnosis): Promise<IDiagnosis>;
    deleteDiagnosis(id: string): Promise<any>;
  }

export class DiagnosisRepository implements IDiagnosisRepository {
  private diagnosisDAO: IDiagnosisDAO;

  constructor(diagnosisDAO: IDiagnosisDAO) {
    this.diagnosisDAO = diagnosisDAO;
  }

  async getAllDiagnosis(): Promise<IDiagnosis[]> {
    const resp = await this.diagnosisDAO.findAllDiagnosis();
    const diagnosisList = resp.map((d) => { 
      let diagnosisItem = new Diagnosis(d.id, d.carId, d.date, d.diagnosis, d.symptoms)

      return diagnosisItem.asDTO()
    })


    return diagnosisList as IDiagnosis[];
  }

  async getDiagnosisById(id: string): Promise<IDiagnosis | null> {
    const resp = await this.diagnosisDAO.findDiagnosisById(id) as IDiagnosis;
    const diagnosis = new Diagnosis(resp.id, resp.carId, resp.date, resp.diagnosis, resp.symptoms);
    return diagnosis.asDTO() as IDiagnosis | null;
  }

  async getDiagnosisByCarId(carId: string): Promise<IDiagnosis[] | null> {
    const resp = await this.diagnosisDAO.findDiagnosisByCarId(carId) as IDiagnosis[];
    const diagnosisList = resp.map((d) => { 
      let diagnosisItem = new Diagnosis(d.id, d.carId, d.date, d.diagnosis, d.symptoms)

      return diagnosisItem.asDTO()
    })


    return diagnosisList as IDiagnosis[];
  }

  async createDiagnosis(diagnosis: IDiagnosis): Promise<IDiagnosis> {
    const resp = await this.diagnosisDAO.createDiagnosis(diagnosis);
    return resp as IDiagnosis;
  }

  
// ESTABLECER LA FUNCIONALIDAD DE ELIMINAR
  async deleteDiagnosis(id: string): Promise<any> {
    // return await this.diagnosisDAO.(id);
  }
}

export const diagnosisRepository = new DiagnosisRepository(diagnosisDAO)