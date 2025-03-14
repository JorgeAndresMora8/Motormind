// src/services/socket.ts
import { io, Socket } from "socket.io-client";
import { ServerToClientEvent } from "../types/socket";
import { API_HOST } from "../config";

// Variable para guardar la instancia del socket
let socket: Socket<ServerToClientEvent>;

export const connectSocket = () => {
  if (!socket) {
    socket = io(API_HOST, { // URL de tu servidor Socket.io
      transports: ["websocket"],
    });
  }

  return socket;
};