import React from 'react';
import { MessageFieldWrapper, MessageFieldStyled, SubmitButton, ButtonWrapper, Form, TypingIndicator } from './MessageField.styled';

/**
 * Message field for entering messages to other users
 */
const MessageField = props => (
  <MessageFieldWrapper collapsed={props.collapsedMenu}>
    <Form onSubmit={props.submitMessage}>
      <MessageFieldStyled onChange={props.handleMessageChange} ref={props.messageInput} placeholder={`Say something to ${props.name ? props.name : 'someone. Click a name to get started!'}`} />
      <ButtonWrapper>
        <SubmitButton type='submit'>Send</SubmitButton>
      </ButtonWrapper>
    </Form>
  </MessageFieldWrapper>
);

export default MessageField;