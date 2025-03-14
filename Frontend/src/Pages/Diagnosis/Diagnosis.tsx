import { useState } from "react";
import { Button } from "react-bootstrap";
import { ArrowLeft } from "react-bootstrap-icons";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../../Components";
import { useFetch } from "../../hooks";
import { IDiagnosis } from "../../types";
import { Detail } from "./Components";
import { ApiDiagnosis } from "./models/models";
import { adaptDiagnosisFromAPI } from "./adapters/adapter";
import { API_ROUTES } from "../../config";

function DiagnosisDetail() {
  const [diagnosis, setDiagnosis] = useState<IDiagnosis>();

  const { id } = useParams();
  const { loading, error } = useFetch<ApiDiagnosis>(
    API_ROUTES.DIAGNOSIS_DETAIL(id as string),
    (data) => setDiagnosis(adaptDiagnosisFromAPI(data))
  );

  if (error) return <div>Error: {error}</div>;

  return (
    <div
      style={{ height: "40rem",  }}
      className="d-flex justify-content-center align-items-center flex-column pt-5 mt-5"
    >
      <Button disabled={!diagnosis} variant="dark">
        <Link
          style={{ color: "#fff", textDecoration: "none" }}
          to={`/car/${diagnosis?.carId}`}
        >
          <ArrowLeft color="#fff" size={20} className="ml-4" /> Volver
        </Link>
      </Button>
      {loading ? (
        <Loading />
      ) : (
        <Detail
          carId={diagnosis!.carId}
          id={diagnosis!.id}
          date={diagnosis!.date}
          symptoms={diagnosis!.symptoms}
          diagnosis={diagnosis!.diagnosis}
        />
      )}
    </div>
  );
}

export default DiagnosisDetail;
