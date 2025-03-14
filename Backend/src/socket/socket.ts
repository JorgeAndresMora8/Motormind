import { Server } from "socket.io";
import { Server as HttpServer } from "http";

let io: Server;

export const initializeSocket = (server: HttpServer) => {
  io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"],
    },
  });

  io.on("connection", (socket) => {
    console.log("Un usuario se ha conectado");

    socket.on("disconnect", () => {
      console.log("Usuario desconectado");
    });
  });

  return io;
};

export const getSocketInstance = (): Server => {
  if (!io) {
    throw new Error("Socket.io no ha sido inicializado.");
  }
  return io;
};
