import React from 'react';
import './Header.css';
import logo from '../../images-ultra/logo.jpg'
const Header = () => {
    return (
        <div>
            <nav className='header'>
            <img src={logo} alt=""/>
                <h1><p>ULTRA-ACTIVE-CLUB</p>                
                </h1>                         
            </nav>
            <h2>Select Todays Exercise:</h2>
            
        </div>
    );
};

export default Header;