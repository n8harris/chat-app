import styled from 'styled-components';
import colors from '../../shared/colors';

const MessageBubble = styled.div`
  position: relative;
  background: ${props => props.fromCurrentUser ? colors.blue : colors.lightGrey};
  border-radius: 0.4rem;
  margin: 1rem 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    width: 0;
    height: 0;
    border: 0.875rem solid transparent;
    border-right-color: ${props => props.fromCurrentUser ? colors.blue : colors.lightGrey};
    border-left: 0;
    border-top: 0;
    margin-top: -0.437rem;
	  margin-left: -0.875rem;
  }
`;

const MessageContent = styled.div`
  color: ${props => props.fromCurrentUser ? colors.white : colors.black};
  font-size: 1.5rem;
`;

const MessageInitials = styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  flex-direction: column;
  margin-top: 1.8rem;
  text-align: center;
  line-height: 4rem;
  background: ${props => props.fromCurrentUser ? colors.blue : colors.lightGrey};
  color: ${props => props.fromCurrentUser ? colors.white : colors.black}
  font-weight: 700;
  border-radius: 50%;
  display: inline-block;
`;

const MessageWrapper = styled.div`
  display: flex;
  margin-left: 1rem;
`;

export {
  MessageBubble,
  MessageContent,
  MessageInitials,
  MessageWrapper
}