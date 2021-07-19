import http from "http";
import dotEnv from "dotenv";
import {Server} from "socket.io";
import {SocketHandler} from "./application/SocketHandler";
import clear from "clear";
import express from "express";
import cors from "cors";
import { ExpressPeerServer } from "peer";
import path from "path";

dotEnv.config();

const app = express();
const server = new http.Server(app);
const io = new Server(server, {
    cors: {
        origin: 'http://localhost:4200'
    }
});
const peerServer = ExpressPeerServer(server);

app.use(cors());
app.use(express.static(path.resolve(__dirname, '../public')));
app.use('/peerjs', peerServer);

io.on("connection", SocketHandler);

server.listen(process.env.PORT || 3000, () => {
    clear();
    console.log("SERVER ONLINE");
})