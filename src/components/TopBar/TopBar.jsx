import React from 'react';
import { TopBarStyled, CurrentChat, CurrentUserInitials, MemberDropDown, MemberDropDownItem } from './TopBar.styled';

/**
 * Top Bar for app
 */
const TopBar = props => (
  <TopBarStyled collapsed={props.collapsedMenu}>
    <CurrentChat>Chat with {props.name ? props.name : 'someone!'}</CurrentChat>
    <CurrentUserInitials onClick={props.toggleMemberDropdown}>
      {props.createInitials(props.currentUser)}
      <MemberDropDown activeDropdown={props.activeMemberDropdown}>
        {
          props.members.map((member, index) => {
            return (
              <MemberDropDownItem
                key={`${String.prototype.toLowerCase(member.name.trim())}-${index}`}
                selected={props.currentUserSelectedIndex === index}
                onClick={() => props.selectCurrentUser(index, member.name)}
              >{member.name}</MemberDropDownItem>
            );
          })
        }
      </MemberDropDown>
    </CurrentUserInitials>
  </TopBarStyled>
);

export default TopBar;