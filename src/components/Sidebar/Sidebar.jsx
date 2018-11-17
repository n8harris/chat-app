import React from 'react';
import { StyledSidebar, MenuSection } from './Sidebar.styled';
import SidebarItem from './SidebarItem';
import HamburgerMenu from './HamburgerMenu';

/**
 * Sidebar component for chat members
 */
class Sidebar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <StyledSidebar 
        collapsed={this.props.collapsedMenu}
        toggleCollapsed={this.props.toggleCollapsed}
        explicitlyToggled={this.props.explicitlyToggled}
      >
        <MenuSection onClick={this.props.toggleCollapsed}>
          <HamburgerMenu />
        </MenuSection>
        {
          this.props.availableChatMembers.map((member, index) => {
            return (
              <SidebarItem
                key={index}
                selectedIndex={this.props.selectedIndex}
                index={index}
                name={member.name}
                setActiveItem={this.props.setActiveItem}
                collapsed={this.props.collapsedMenu}
                explicitlyToggled={this.props.explicitlyToggled}
              />
            );
          })
        }
      </StyledSidebar>
    )
  }
}

export default Sidebar;