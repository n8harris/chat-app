import styled from 'styled-components';
import colors from '../../shared/colors';

const Item = styled.div`
  background: ${props => props.selected ? `${colors.brightOrange} !important` : colors.grey};
  padding: 1rem;
  opacity: ${props => props.collapsed ? '0' : '1' }${props => props.explicitlyToggled ? '!important' : ''};
  transition: 0.4s ease-out opacity;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background: ${colors.darkGrey};
    cursor: pointer;
  }

  @media (max-width: 768px) {
    opacity: 0;
  }
`;

const Name = styled.span`
  color: ${colors.white};
  font-size: 1.5rem;
  margin-left: 0.75rem;
`;

const ActiveStatus = styled.span`
  height: 1rem;
  width: 1rem;
  background: ${props => props.active ? colors.activeGreen : colors.lightGrey};
  border-radius: 50%;
  display: inline-block;
`;

export {
  Item,
  Name,
  ActiveStatus
}