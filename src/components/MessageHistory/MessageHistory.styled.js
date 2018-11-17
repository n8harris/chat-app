import styled from 'styled-components';
import colors from '../../shared/colors';
import { COLLAPSED_WIDTH, REGULAR_WIDTH } from '../../shared/constants';

const MessageHistoryStyled = styled.div`
  background: ${colors.white};
  margin-left: ${props => props.collapsed ? COLLAPSED_WIDTH : REGULAR_WIDTH}${props => props.explicitlyToggled ? '!important' : ''};
  margin-bottom: 7rem;
  margin-top: 4rem;
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: hidden;
  transition: 0.4s ease-out margin;

  @media (max-width: 768px) {
    margin-left: ${COLLAPSED_WIDTH};
  }
`;

export {
  MessageHistoryStyled
}