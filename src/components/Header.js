import React        from 'react';
import pageLogo     from '../images/logo.svg';

/**
 * The **Header** component representing the header of the webpage
 *
 * @version 1.0.0
 * @author [Shraddha](https://github.com/5hraddha)
 */
function Header() {
  return (
    <header className="header">
      <img className="logo" src={pageLogo} alt="logo of the webpage having text around the US" />
    </header>
  );
}

export default Header;