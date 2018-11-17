import styled from 'styled-components';
import colors from '../../shared/colors';
import { COLLAPSED_WIDTH, REGULAR_WIDTH } from '../../shared/constants';

const TopBarStyled = styled.div`
  background: ${colors.white};
  z-index: 1;
  display: flex;
  justify-content: space-between;
  margin-left: ${props => props.collapsed ? COLLAPSED_WIDTH : REGULAR_WIDTH}${props => props.explicitlyToggled ? '!important' : ''};
  padding: 0 2rem 0;
  position: fixed;
  top: 0;
  transition: 0.4s ease-out margin;
  width: ${props => props.collapsed ? `calc(100vw - ${COLLAPSED_WIDTH})` : ` calc(100vw - ${REGULAR_WIDTH})`}${props => props.explicitlyToggled ? '!important' : ''};
  border-bottom: 0.07rem solid ${colors.lightGrey};
  height: 4rem;

  @media (max-width: 768px) {
    margin-left: ${COLLAPSED_WIDTH};
    width: calc(100vw - ${COLLAPSED_WIDTH});
  }
`;

const CurrentChat = styled.h2`
  color: ${colors.black};
  display: flex;
  flex-direction: column;
  margin: 0;
  font-weight: 700;
  font-size: 1.3rem;
  letter-spacing: 0.1rem;
  padding: 1rem 0;
`;

const CurrentUserInitials = styled.div`
  margin: 0.5rem 0;
  postion: relative;
  height: 3rem;
  width: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  line-height: 3rem;
  background: ${colors.green};
  color: ${colors.white}
  font-weight: 700;
  border-radius: 50%;
  display: inline-block;
  cursor: pointer;
`;

const MemberDropDown = styled.div`
  display: ${props => props.activeDropdown ? 'block' : 'none'}
  position: absolute;
  top: 5rem;
  right: 1.4rem;
  width: 20rem;
  background: ${colors.white};
  border: 0.07rem solid ${colors.lightGrey};
  border-radius: 1rem;
  &::after {
    content: '';
    position: absolute;
    display: block;
    top: -0.6rem;
    right: 1.5rem;
    width: 1rem;
    height: 1rem;
    background: ${colors.white};
    border-right: 0.07rem solid ${colors.lightGrey};
    border-bottom: 0.07rem solid ${colors.lightGrey};
    transform:rotate(225deg);
  }
`;

const MemberDropDownItem = styled.p`
  background: ${props => props.selected ? colors.lightGrey : colors.white};
  color: ${colors.black};

  &:hover {
    background: ${colors.lightGrey};
    cursor: pointer;
  }
`;

export {
  TopBarStyled,
  CurrentChat,
  CurrentUserInitials,
  MemberDropDown,
  MemberDropDownItem
}