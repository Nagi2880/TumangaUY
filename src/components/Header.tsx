import React from 'react'
import Webpagelogo from '../elements/webpagelogo';
import style from './Components.module.css';
function Header() {
  return (
    <header id={style.header}>
        <Webpagelogo />
    </header>
 );
};

export default Header;