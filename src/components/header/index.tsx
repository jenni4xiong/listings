import React from 'react';
import logo from "../../assets/logo.png";
import {AppHeader} from '../styles';

const Header = () => (
  <AppHeader>
    <img src={logo} alt="weedmaps logo" />
  </AppHeader>
);

export default Header;