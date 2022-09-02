import React from 'react';

import logo from '../../assets/img/Firma-02.png';
import './Navbar.scss';

export default function Navbar() {

  return (
    <nav className="navbar">
      <img className='navbar__logo' src={logo} alt="santiago saavedra logo" />
    </nav>
  );
}
