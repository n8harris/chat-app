import React, { Component } from 'react';
import io from 'socket.io-client';
import { AppWrapper } from './App.styled';
import Sidebar from './components/Sidebar/Sidebar';
import MessageHistory from './components/MessageHistory/MessageHistory';
import MessageField from './components/MessageField/MessageField';
import TopBar from './components/TopBar/TopBar';
import Firebase from './utils/Firebase';
import types from './types';

class App extends Component {
  constructor() {
    super();
    this.db = new Firebase();
    this.messageInput = React.createRef();
    this.lastMessage = React.createRef();
    this.typingTimeout = null;
    this.state = {
      members: [],
      messages: [],
      message: '',
      selectedIndex: null,
      collapsedMenu: false,
      explicitlyToggled: false,
      activeMemberDropdown: false,
      currentUser: {},
      currentUserSelectedIndex: 0,
      availableChatMembers: [],
      userTyping: false,
      activeMembers: []
    };
    this.socket = io('http://localhost:8080');
    this.registerEvent(this.socket, types.UPDATE_CHAT, this.updateMessagesFromSocket.bind(this));
    this.handleSubmitMessage = this.handleSubmitMessage.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.setActiveItem = this.setActiveItem.bind(this);
    this.toggleCollapsed = this.toggleCollapsed.bind(this);
    this.createInitials = this.createInitials.bind(this);
    this.toggleMemberDropdown = this.toggleMemberDropdown.bind(this);
    this.selectCurrentUser = this.selectCurrentUser.bind(this);
    this.changeRooms = this.changeRooms.bind(this);
  }

  componentDidMount() {
    this.db.getMembers().then((result) => {
      this.setState(() => { return { members: result } } );
      this.selectCurrentUser(0, this.state.members[0].name);
    });
  }

  registerEvent(socket, type, callback) {
    socket.on(type, callback);
  }

  updateMessagesFromSocket(message) {
    this.setState(() => { return { messages: this.state.messages.concat([ message ]) } }, this.scrollToLastMessage);
  }

  setActiveItem(index, name) {
    this.setState(() => { return { selectedIndex: index, currentChatUser: name } }, this.changeRooms);
  }

  toggleCollapsed() {
    this.setState(() => { return { collapsedMenu: !this.state.collapsedMenu, explicitlyToggled: true } });
  }

  handleMessageChange({ target }) {
    const message = target.value;
    this.setState(() => { return { message: {
      content: message,
      fromUser: this.state.currentUser
    } } });
  }

  handleSubmitMessage(event) {
    event.preventDefault();
    this.messageInput.current.value = '';
    if (this.state.message) {
      this.setState(() => { return { messages: this.state.messages.concat([ this.state.message ]) } }, this.scrollToLastMessage);
      this.db.addMessage(this.state.message, this.getCurrentChatRoomName());
      this.socket.emit(types.SEND_MESSAGE, this.state.message);
      this.setState(() => { return { message: '' } });
    }
  }

  scrollToLastMessage() {
    if (this.lastMessage.current) {
      window.scrollTo(0, this.lastMessage.current.offsetTop);
    }
  }

  createInitials(name) {
    return (name && name.split && name.split(' ').map((item) => item[0].toUpperCase()).join('')) || '';
  }

  toggleMemberDropdown() {
    this.setState(() => { return { activeMemberDropdown: !this.state.activeMemberDropdown } });
  }

  selectCurrentUser(index, name) {
    this.setState(() => { return {
      currentUserSelectedIndex: index,
      currentUser: name
    } }, () => {
      this.setState(() => { return {
        availableChatMembers: this.state.members.filter((member) => member.name !== this.state.currentUser)
      } }, () => {
        this.setState(() => { return {
          selectedIndex: null,
          currentChatUser: null,
          messages: []
        } });
      })
    });
  }

  getCurrentChatRoomName() {
    return [this.state.currentUser, this.state.currentChatUser].sort().join('-').replace(/ /g, '').toLowerCase();
  }

  changeRooms() {
    this.db.getChatRoom(this.getCurrentChatRoomName()).then((result) => {
      if (result) {
        this.setState(() => { return { messages: result.messages } }, this.scrollToLastMessage);
      } else {
        this.db.createChatRoom(this.getCurrentChatRoomName());
      }
      this.socket.emit(types.CHANGE_ROOMS, this.state.currentUser, this.getCurrentChatRoomName());
    });
  }

  render() {
    return (
      <AppWrapper>
        <Sidebar
          members={this.state.members}
          setActiveItem={this.setActiveItem}
          selectedIndex={this.state.selectedIndex}
          toggleCollapsed={this.toggleCollapsed}
          collapsedMenu={this.state.collapsedMenu}
          explicitlyToggled={this.state.explicitlyToggled}
          currentUser={this.state.currentUser}
          availableChatMembers={this.state.availableChatMembers}
        />
        <TopBar
          name={this.state.currentChatUser}
          collapsedMenu={this.state.collapsedMenu}
          createInitials={this.createInitials}
          members={this.state.members}
          activeMemberDropdown={this.state.activeMemberDropdown}
          toggleMemberDropdown={this.toggleMemberDropdown}
          currentUserSelectedIndex={this.state.currentUserSelectedIndex}
          currentUser={this.state.currentUser}
          selectCurrentUser={this.selectCurrentUser}
        />
        <MessageHistory
          messages={this.state.messages}
          collapsedMenu={this.state.collapsedMenu}
          explicitlyToggled={this.state.explicitlyToggled}
          name={this.state.currentUser}
          lastMessage={this.lastMessage}
          createInitials={this.createInitials}
        />
        <MessageField
            submitMessage={this.handleSubmitMessage}
            handleMessageChange={this.handleMessageChange}
            name={this.state.currentChatUser}
            messageInput={this.messageInput}
            collapsedMenu={this.state.collapsedMenu}
            explicitlyToggled={this.state.explicitlyToggled}
          />
      </AppWrapper>
    );
  }
}

export default App;
