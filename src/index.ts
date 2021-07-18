import http from "http";
import dotEnv from "dotenv";
import {Server} from "socket.io";
import {SocketHandler} from "./application/SocketHandler";
import clear from "clear";
import express from "express";
import cors from "cors";
import { ExpressPeerServer } from "peer";

dotEnv.config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

io.on("connection", SocketHandler)

server.listen(process.env.PORT, () => {
    clear();
    console.log("server ready")
});