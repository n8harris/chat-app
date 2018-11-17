import types from './types';

class Socket {
  constructor(socket) {
    this.socket = socket;
    this.registerEvent = this.registerEvent.bind(this);
    this.changeRooms = this.changeRooms.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.disconnectSocket = this.disconnectSocket.bind(this);
    this.setRoom = this.setRoom.bind(this);
    this.setUser = this.setUser.bind(this);
  }

  registerEvent(event, callback) {
    this.socket.on(event, callback);
  }

  changeRooms(user, room) {
    this.setUser(user);
    if (this.socket.room) {
      this.disconnectSocket();
    }
    this.socket.join(room);
    this.setRoom(room);
  }

  sendMessage(message) {
    this.socket.broadcast.to(this.socket.room).emit(types.UPDATE_CHAT, message);
  }

  disconnectSocket() {
    this.socket.leave(this.socket.room);
  }

  setRoom(room) {
    this.socket.room = room;
  }

  setUser(user) {
    this.socket.user = user;
  }
}

export default Socket;