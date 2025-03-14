// src/services/socket.ts
import { io, Socket } from "socket.io-client";
import { ServerToClientEvent } from "../types/socket";

// Variable para guardar la instancia del socket
let socket: Socket<ServerToClientEvent>;

export const connectSocket = () => {
  if (!socket) {
    socket = io("http://localhost:8080", { // URL de tu servidor Socket.io
      transports: ["websocket"],
    });
  }

  return socket;
};