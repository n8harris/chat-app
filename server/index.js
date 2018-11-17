import express from 'express';
import http from 'http';
import SocketIO from 'socket.io';
import Socket from './Socket';
import types from './types';

const app = express();
const server = http.Server(app);
const socketInit = new SocketIO(server);

server.listen(8080);

socketInit.sockets.on('connection', (socket) => {
  const socketInstance = new Socket(socket);
  socketInstance.registerEvent(types.CHANGE_ROOMS, socketInstance.changeRooms);
  socketInstance.registerEvent(types.SEND_MESSAGE, socketInstance.sendMessage);
  socketInstance.registerEvent(types.DISCONNECT, socketInstance.disconnectSocket);
});