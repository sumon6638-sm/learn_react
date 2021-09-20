import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <nav className='menu'>
                <a href="#home">HOME</a>
                <a href="#countries">COUNTRIES</a>
                <a href="#about">ABOUT</a>
            </nav>

            <p className='sub-title'>Visit us</p>
        </div>
    );
};

export default Header;