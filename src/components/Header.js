import React from 'react';
import pageLogo from '../images/logo.svg';

function Header() {
  return (
    <header className="header">
      <img className="logo" src={pageLogo} alt="logo of the webpage having text around the US" />
    </header>
  );
}

export default Header;