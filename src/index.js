import app from "./app";
import { Server as WebSocketServer } from "socket.io";
import http from "http";
import sockets from "./sockets";
import { connectDB } from "./db";
import config from "./config";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(config.port, () => {
    return console.log(`Server listening in port ${config.port}`);
});

const io = new WebSocketServer(httpServer);
sockets(io);