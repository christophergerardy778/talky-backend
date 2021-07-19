import {Socket} from "socket.io";

interface RoomParticipants {
    socketId: string,
    roomName: string & number,
    peerId: string
};

let participants: RoomParticipants[] = [];

export function SocketHandler(socket: Socket) {    
    console.log('Nuevo socket conectado');

    socket.on("join-room", (payload: RoomParticipants) => {

        console.log("antes:");
        console.table(participants);

        participants.push({
            socketId: socket.id,
            roomName: payload.roomName,
            peerId: payload.peerId
        });

        console.log("Actuales");
        console.table(participants);        

        socket.join(payload.roomName)        
        socket.broadcast
            .to(payload.roomName)
            .emit("user-connected", payload)        
    });

    socket.on("disconnect", () => {

        const metadata = participants.find(item => item.socketId === socket.id);

        if (metadata && metadata.roomName) {
            socket.broadcast
            .to(metadata.roomName)
            .emit("user-leave", metadata.peerId);
            participants = participants.filter(item => item.socketId !== socket.id);

            console.log("Quedan");
            console.table(participants);    
        }    
    });
}