// src/hooks/useSocket.ts
import { useEffect, useState } from "react";
import { connectSocket } from "../Service";
import { ServerToClientEvent} from "../types";
import { Socket } from "socket.io-client";

const useSocket = () => {
  const [socket, setSocket] = useState<Socket<ServerToClientEvent> | null>(null);

  useEffect(() => {
    const socket = connectSocket(); 
    setSocket(socket);

    return () => {
      socket.disconnect();
    };
  }, []);

  return { socket };
};

export default useSocket;