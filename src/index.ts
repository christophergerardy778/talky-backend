import dotEnv from "dotenv";
import {Server} from "socket.io";
import {SocketHandler} from "./application/SocketHandler";
import express from "express";
import cors from "cors";

dotEnv.config();

const app = express();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

const server = app.listen(process.env.PORT);

const io = new Server(server, {
    cors: {
        origin: ["http://localhost:4200"],
    }
});

io.on("connection", SocketHandler)
io.listen(server);