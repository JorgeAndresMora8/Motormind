import {ICar} from "./car";


// ESTABLECER UNA ESTRUCTURA DE COMO MANEJAR LOS SOCKETS EN LA APLICACION
  export interface ServerToClientEvent {
    "new-list": (carList: ICar[]) => void; // Evento que escucha el cliente
  }
  