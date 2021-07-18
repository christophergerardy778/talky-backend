"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketHandler = void 0;
;
var participants = [];
function SocketHandler(socket) {
    console.log('Nuevo socket conectado');
    socket.on("join-room", function (payload) {
        console.log("antes:");
        console.table(participants);
        participants.push({
            socketId: socket.id,
            roomName: payload.roomName,
            peerId: payload.peerId
        });
        console.log("Actuales");
        console.table(participants);
        socket.join(payload.roomName);
        socket.broadcast
            .to(payload.roomName)
            .emit("user-connected", payload);
    });
    socket.on("disconnect", function () {
        var metadata = participants.find(function (item) { return item.socketId === socket.id; });
        socket.broadcast
            .to(metadata.roomName)
            .emit("user-leave", metadata.peerId);
        participants = participants.filter(function (item) { return item.socketId !== socket.id; });
        console.log("Quedan");
        console.table(participants);
    });
}
exports.SocketHandler = SocketHandler;
//# sourceMappingURL=SocketHandler.js.map