import styled from 'styled-components';
import colors from '../../shared/colors';
import { COLLAPSED_WIDTH, REGULAR_WIDTH } from '../../shared/constants';

const MessageFieldWrapper = styled.div`
  background: ${colors.white};
  margin-left: ${props => props.collapsed ? COLLAPSED_WIDTH : REGULAR_WIDTH}${props => props.explicitlyToggled ? '!important' : ''};
  transition: 0.4s ease-out margin;
  position: fixed;
  bottom: 0;
  left: 0;
  width: ${props => props.collapsed ? `calc(100vw - ${COLLAPSED_WIDTH})` : ` calc(100vw - ${REGULAR_WIDTH})`}${props => props.explicitlyToggled ? '!important' : ''};
  padding: 2rem;
  box-shadow: 0px -2px 18px -4px rgba(0,0,0,0.25);

  @media (max-width: 768px) {
    margin-left: ${COLLAPSED_WIDTH};
    width: calc(100vw - ${COLLAPSED_WIDTH});
  }
`;

const MessageFieldStyled = styled.input`
  background: ${colors.white};
  border-radius: 4rem;
  flex-direction: column;
  display: flex;
  width: 90%;
  height: 3rem;
  border: 0.2rem solid ${colors.lightGrey};
  outline: 0;
  padding: 0.625rem 0.625rem 0.625rem 1.5rem;
  font-size: 1rem;
  cursor: text;
`;

const SubmitButton = styled.button`
  font-size: 1rem;
  padding: 0.75em 1em;
  font-family: sans-serif;
  font-weight: 800;
  text-align: center;
  letter-spacing: -0.04em;
  text-transform: uppercase;
  box-shadow: none;
  background-image: 'none';
  outline: none;
  border: 0;
  background-color: ${colors.green};
  color: ${colors.white};

  &:hover {
    background-color: ${colors.darkGreen};
    cursor: pointer;
  }
`;

const ButtonWrapper = styled.span`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0.1rem 0 0 1rem;
`;

const Form = styled.form`
  display: flex;
`;

export {
  MessageFieldStyled,
  MessageFieldWrapper,
  SubmitButton,
  ButtonWrapper,
  Form
}