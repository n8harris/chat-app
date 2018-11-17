import React from 'react';
import { Item, Name, ActiveStatus } from './SidebarItem.styled';

/**
 * Sidebar Item for member name and active status
 */
const SidebarItem = props => (
  <Item
    collapsed={props.collapsed}
    onClick={() => props.setActiveItem(props.index, props.name)}
    selected={props.selectedIndex === props.index}
    explicitlyToggled={props.explicitlyToggled}
  >
    <Name>{props.name}</Name>
  </Item>
);

export default SidebarItem;