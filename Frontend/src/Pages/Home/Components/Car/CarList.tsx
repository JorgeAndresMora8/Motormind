import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {Loading} from "../../../../Components";
import { API_ROUTES } from "../../../../config";
import { useSocket } from "../../../../context"; 
import {useFetch} from "../../../../hooks";
import { ICar } from "../../../../types";
import CarItem from "./CarItem";
import { SOCKET_CHANNELS } from "../../../../Constant";

function CarList() {
  const [carList, setCarList] = useState<ICar[]>([]);
  const { loading } = useFetch<ICar[]>(API_ROUTES.CARS(), (data) => setCarList(data));

  const { socket } = useSocket(); 

  useEffect(() => {
    if (!socket) return;

    const handleNewList = (newCarList: ICar[]) => {
      setCarList(newCarList);
      
      toast.success(
        <div>
          ✅ Auto Generado
          <br />
        </div>,
        {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false, 
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        }
      );
    };

    socket.on(SOCKET_CHANNELS.NEW_CAR_LIST, handleNewList);

    return () => {
      socket.off(SOCKET_CHANNELS.NEW_CAR_LIST, handleNewList);
    };
  }, [socket]);

  return (
    <>
    <div className="d-flex p-5 flex-column">
      <div className="d-flex p-5 justify-content-center align-items-center flex-wrap">
       { carList.length <= 0 ? <h1>Registra Tu Primer Auto!</h1> : <h1>Autos Registrados!</h1>}
      </div>
      <div className="d-flex justify-content-center align-items-center gap-5 flex-wrap">
        {loading ? <Loading /> : carList.map((car) => <CarItem key={car.id} {...car} />)}
      </div>
    </div>
    </>
  );
}

export default CarList;
