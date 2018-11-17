import * as firebase from 'firebase';

class Firebase {
  constructor(fb, url, projectId) {
    this.dbUrl = url || "chat-app-bb038.firebaseapp.com";
    this.projectId = projectId || "chat-app-bb038";
    this.fb = fb || (!firebase.apps.length && firebase.initializeApp({
      databaseURL: this.dbUrl,
      projectId: this.projectId,
    }).firestore());
  }

  getMembers() {
    return new Promise((resolve) => {
      this.fb.collection('members').get().then((result) => {
        const members = [];
        result.forEach((member) => members.push(member.data()));
        resolve(members);
      });
    });
  }

  getChatRoom(id) {
    return new Promise((resolve) => {
      this.fb.collection(`chat-rooms`).doc(id).get().then((result) => {
        resolve(result.data ? result.data() : null);
      });
    });
  }

  createChatRoom(id) {
    this.fb.collection('chat-rooms').doc(id).set({
      id,
      messages: []
    });
  }

  addMessage(message, id) {
    const messageWithTimestamp = {...message, added: new Date().getTime()};
    this.fb.collection('chat-rooms').doc(id).update({
      messages: firebase.firestore.FieldValue.arrayUnion(messageWithTimestamp)
    });
  }
}

export default Firebase;