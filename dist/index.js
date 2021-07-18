"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var dotenv_1 = __importDefault(require("dotenv"));
var socket_io_1 = require("socket.io");
var SocketHandler_1 = require("./application/SocketHandler");
var clear_1 = __importDefault(require("clear"));
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
var app = express_1.default();
app.use(cors_1.default());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
var server = http_1.default.createServer(app);
var io = new socket_io_1.Server(server, {
    cors: {
        origin: "*"
    }
});
io.on("connection", SocketHandler_1.SocketHandler);
server.listen(process.env.PORT, function () {
    clear_1.default();
    console.log("server ready");
});
//# sourceMappingURL=index.js.map