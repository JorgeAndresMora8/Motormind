import http from "http"
import {app} from "./app"
import { initializeSocket } from "../socket"
import {connectDB} from "../DB"

export default async function InitializeServer(PORT: any = 3000): Promise<void>{ 

    connectDB()

    const httpServer = http.createServer(app)
    const server = await httpServer.listen(PORT, ()=> { 
        console.log(`Server running at PORT => ${PORT}`)
    })

    initializeSocket(server);
}