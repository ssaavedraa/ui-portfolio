import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../../assets/img/Firma-02.png'
import { GiHamburgerMenu } from 'react-icons/gi'
import './NavBar.scss'

export default function NavBar(){

    const [isMenuHidden, setIsMenuHidden] = useState(true)

    const handleShowMenu = () => {
        setIsMenuHidden(!isMenuHidden)
        if(!isMenuHidden){
            document.getElementById('menu').classList.add('hidden')
        }
        else{
            document.getElementById('menu').classList.remove('hidden')
        }
    }

    return(
        <nav className='nav-bar'>
            <NavLink to='/'>
                <img src={logo} alt="logo" />
            </NavLink>
            <GiHamburgerMenu className='menu-icon' onClick={() => handleShowMenu()}/>
            <ul className="menu hidden" id='menu'>
                <NavLink to=''>
                    <li className="nav-link">Home</li>
                </NavLink>
                <NavLink to=''>
                    <li className="nav-link">About me</li>
                </NavLink>
                <NavLink to=''>
                    <li className="nav-link">My projects</li>
                </NavLink>
                <NavLink to=''>
                    <li className="nav-link">Education</li>
                </NavLink>
                <NavLink to=''>
                    <li className="nav-link">Skills</li>
                </NavLink>
                <NavLink to=''>
                    <li className="nav-link">Contact</li>
                </NavLink>
            </ul>
        </nav>
    )
}