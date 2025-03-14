import { createContext, useContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

interface ISocketContext {
  socket: Socket | null;
}

const SocketContext = createContext<ISocketContext | undefined>(undefined);

export const SocketProvider = ({ children }: { children: React.ReactNode }) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const newSocket = io("http://localhost:8080"); 
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return <SocketContext.Provider value={{ socket }}>{children}</SocketContext.Provider>;
};

export const useSocket = () => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error("useSocket debe usarse dentro de un SocketProvider");
  }
  return context;
};
