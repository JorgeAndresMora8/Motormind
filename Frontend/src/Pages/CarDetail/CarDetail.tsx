import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import useFetch from "../../hooks/useFetch";
import {ICar} from "../../types/car";
import Detail from "./Components/detail/Detail";
import Diagnosis from "./Components/diagnosis/Diagnosis";
import {API_ROUTES} from "../../config/apiRoutes";

function CarDetail() {

  const { id } = useParams()
  const { loading, data, error } = useFetch<ICar>(API_ROUTES.CARS(id), () => {})

  if(error){ 
    console.error(error);
    return <div>Error al cargar la información del vehículo</div>
  }

  return (
    <div className="d-flex justify-content-center align-items-start flex-wrap gap-5 h-75 pt-5 pb-5 mt-5">
        { loading ? <Loading /> : <Detail {...data!} />}
        <Diagnosis id={id as string}/>
    </div>
  )
}

export default CarDetail
