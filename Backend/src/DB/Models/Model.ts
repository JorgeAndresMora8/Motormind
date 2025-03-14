import { Schema, model } from 'mongoose';
import {ICar} from '../../types';
import {IDiagnosis} from '../../types';
import {DB_COLLECTION_NAMES} from '../../constant';


const CarSchema = new Schema<ICar>({
    id: { type: String, required: true },
    brand: { type: String, required: true },
    year: { type: String, required: true },
    model: { type: String, required: true },
    milaege: { type: Number, required: true },
    image:{type: String, required: true}
});

const DiagnosisSchema = new Schema<IDiagnosis>({
    id: { type: String, required: true },
    carId: { type: String, required: true },
    date: { type: String, required: true },
    diagnosis: { type: Object, required: true },
    symptoms: { type: String, required: true }, 
});
export const CarModel = model<ICar>(DB_COLLECTION_NAMES.CARS, CarSchema);
export const DiagnosisModel = model<IDiagnosis>(DB_COLLECTION_NAMES.DIAGNOSIS, DiagnosisSchema);
