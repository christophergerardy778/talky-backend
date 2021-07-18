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

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.resolve(__dirname, '../public')))

const server = http.createServer(app);

const mServer = app.listen(process.env.PORT || 3000);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:4200"],
    }
});

io.on("connection", SocketHandler)
io.listen(mServer);