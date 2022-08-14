import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/img/Firma-02.png';
import './Navbar.scss';

export default function Navbar() {

  return (
    <nav className="navbar">
      <Link to='/'>
        <img className='navbar__logo' src={logo} alt="santiago saavedra logo" />
      </Link>
    </nav>
  );
}
