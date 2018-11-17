import styled from 'styled-components';
import colors from '../../shared/colors';

const HamburgerBar = styled.div`
  width: 2rem;
  height: 0.3rem;
  background-color: ${colors.white};
  margin: 0.3rem 0;
`;

const HamburgerMenuWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

export {
  HamburgerMenuWrapper,
  HamburgerBar
}