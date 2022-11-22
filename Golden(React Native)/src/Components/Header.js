import React from 'react'

export default function Header({name, navigation}) {
  return (
    <header>
        <div id="header-title">
            <h1>
                <a onClick={() => navigation.navigate('Home')} id="logo">
                    {name}
                </a>
            </h1>
        </div>

        <nav id="dropdown-main">
            <ul className="home-dropdown">
                <li className="dropdown-logo"><i className="fas fa-bars"></i>
                    <ul className="dropdown-content">
                        <li><a onClick={() => navigation.navigate('Home')}>Home</a></li>
                        <li className="services-dropdown"><a href="#services">Services</a><i className="fa fa-caret-down"></i>
                            <ul className="sub-dropdown">
                                <li><a onClick={() => navigation.navigate('Nails')}>Nails</a></li>
                                <li><a onClick={() => navigation.navigate('Waxing')}>Waxing</a></li>
                                <li><a onClick={() => navigation.navigate('Relaxing')}>Relaxation</a></li>
                            </ul>
                        </li>
                        <li><a onClick={() => navigation.navigate('PageNotFound')}>About Us</a></li>
                        <li><a href="/#location">Login</a></li>
                        <li><a onClick={() => navigation.navigate('Contact')}>Signup</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    </header>
  )
}
