import { useEffect, useState } from "react";
import {Loading} from "../../../../Components";
import {useFetch} from "../../../../hooks";
import {IDiagnosis} from "../../../../types";
import DiagnosisList from "./DiagnosisList";
import SymptomsModal from "./Modal";
import { useSocket } from "../../../../context";
import {API_ROUTES} from "../../../../config";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { SOCKET_CHANNELS } from "../../../../Constant";

interface DiagnosisProps {
  id: string;
}

function Diagnosis({ id }: DiagnosisProps) {
  const [list, setList] = useState<IDiagnosis[]>([]);
  const { loading } = useFetch<IDiagnosis[]>(
    API_ROUTES.DIAGNOSIS_CAR_RELATED(id),
    (data) => setList(data)
  );

  const { socket } = useSocket();

  useEffect(() => {
    if (!socket) return;

    const handleNewDiagnosis = (msg: string) => {
      try {
        const newDiagnostic: IDiagnosis = JSON.parse(msg);

        setList((prevList) => {
          const exists = prevList.some((d) => d.id === newDiagnostic.id);
          return exists ? prevList : [...prevList, newDiagnostic];
        });

        toast.success(
          <div>
            ✅ Diagnóstico generado
            <br />
            <Link to={`/diagnosis/${newDiagnostic.id}`} style={{ color: "white", textDecoration: "underline" }}>
              Ver detalles
            </Link>
          </div>,
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: false, // Evita que el toast se cierre al hacer clic en el link
            pauseOnHover: true,
            draggable: true,
            theme: "colored",
          }
        );
      } catch (error) {
        console.error("Error parsing diagnostic message:", error);
      }
    };

    

    socket.on(SOCKET_CHANNELS.DIAGNOSTIC, handleNewDiagnosis);

    return () => {
      socket.off(SOCKET_CHANNELS.DIAGNOSTIC, handleNewDiagnosis);
    };
  }, [socket]);

  return (
    <>
    <ToastContainer />
    <div className="d-flex justify-content-start align-items-start flex-column flex-wrap">
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <div
          style={{ width: "30rem" }}
          className="d-flex justify-content-between align-items-center mb-2"
        >
          <h3>Diagnosis</h3>
          <SymptomsModal carId={id} />
        </div>

        {loading ? <Loading /> : <DiagnosisList list={list} />}
      </div>
    </div>
    </>
  );
}

export default Diagnosis;
