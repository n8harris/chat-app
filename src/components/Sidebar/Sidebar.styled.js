import styled from 'styled-components';
import colors from '../../shared/colors';
import { COLLAPSED_WIDTH, REGULAR_WIDTH } from '../../shared/constants';

const StyledSidebar = styled.div`
  width: ${props => props.collapsed ? COLLAPSED_WIDTH : REGULAR_WIDTH}${props => props.explicitlyToggled ? '!important' : ''};
  height: 100vh;
  position: fixed;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  overflow-x: hidden;
  transition: 0.4s ease-out width;
  background: ${colors.grey};
  z-index: 2;

  @media (max-width: 768px) {
    width: ${COLLAPSED_WIDTH};
  }
`;

const MenuSection = styled.div`
  padding: 1rem 0 1rem 1rem;
`;

export {
  MenuSection,
  StyledSidebar
}