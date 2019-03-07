import React from 'react';
import './Navbar.css';
import logo from 'assets/marvel.svg';

const Navbar = () => (
  <header className="navbar">
    <img src={logo} className="marvel-logo" alt="logo" />
  </header>
);

export default Navbar;
