import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Header({name}) {
  return (
    <header>
        <div id="header-title">
            <h1>
                <NavLink to='/' id="logo">
                    {name}
                </NavLink>
            </h1>
        </div>

        <nav id="dropdown-main">
            <ul className="home-dropdown">
                <li className="dropdown-logo"><i className="fas fa-bars"></i>
                    <ul className="dropdown-content">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li className="services-dropdown"><a href="#services">Services</a><i className="fa fa-caret-down"></i>
                            <ul className="sub-dropdown">
                                <li><NavLink to="/nails">Nails</NavLink></li>
                                <li><NavLink to="/waxing">Waxing</NavLink></li>
                                <li><NavLink to="/relaxion">Relaxation</NavLink></li>
                            </ul>
                        </li>
                        <li><NavLink to="/#about-us">About Us</NavLink></li>
                        <li><NavLink to="/#location">Login</NavLink></li>
                        <li><NavLink to="/contact">Signup</NavLink></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
  )
}
