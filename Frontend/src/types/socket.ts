import {ICar} from "./car";


  export interface ServerToClientEvent {
    "new-list": (carList: ICar[]) => void; 
  }
  