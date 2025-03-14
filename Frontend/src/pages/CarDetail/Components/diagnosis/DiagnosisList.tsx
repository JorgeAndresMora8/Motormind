import { Alert } from "react-bootstrap";
import {IDiagnosis} from "../../../../types";
import DiagnosisItem from "./DiagnosisItem";

interface DiagnosisListProps { 
  list: IDiagnosis[]
}

function DiagnosisList({list}: DiagnosisListProps) {

  return (
    <div className="d-flex justify-content-center align-items-center flex-column gap-2">
      { list.length <= 0 && <Alert className="mt-5" variant="dark">Genera tu primer diagnostico</Alert> }
      { list.map((diagnosis) => <DiagnosisItem {...diagnosis}/>) }
    </div>
  );
}

export default DiagnosisList;
