import React from 'react';
import { HamburgerBar, HamburgerMenuWrapper } from './HamburgerMenu.styled';

/**
 * Sidebar Item for member name and active status
 */
const HamburgerMenu = props => (
  <HamburgerMenuWrapper>
    <HamburgerBar />
    <HamburgerBar />
    <HamburgerBar />
  </HamburgerMenuWrapper>
);

export default HamburgerMenu;