import React from 'react';
import { MessageBubble, MessageContent, MessageInitials, MessageWrapper } from './Message.styled';

/**
 * Message component
 */
const Message = React.forwardRef((props, ref) => {
  return (
    <MessageWrapper ref={ref}>
      <MessageInitials fromCurrentUser={props.fromCurrentUser}>{props.initial}</MessageInitials>
      <MessageBubble fromCurrentUser={props.fromCurrentUser}>
        <MessageContent fromCurrentUser={props.fromCurrentUser}>{props.message}</MessageContent>
      </MessageBubble>
    </MessageWrapper>
  );
});

export default Message;