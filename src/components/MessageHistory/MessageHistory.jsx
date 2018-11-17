import React from 'react';
import { MessageHistoryStyled } from './MessageHistory.styled';
import Message from '../Message/Message';

/**
 * Message history container
 */
const MessageHistory = props => (
  <MessageHistoryStyled collapsed={props.collapsedMenu}>
    {
      props.messages.map((message, index) => {
        return (
          <Message
            key={`message-${index}`}
            ref={index === props.messages.length - 1 ? props.lastMessage : null}
            initial={props.createInitials(message.fromUser)}
            message={message.content}
            fromCurrentUser={message.fromUser === props.name} 
          />
        );
      })
    }
  </MessageHistoryStyled>
);

export default MessageHistory;