import React from 'react';
import './Header.scss'
import Navbar from "../Navbar/Navbar";

const Header = () => {
    return (
        <div className='header'>
            <h1 className='header__heading'>Work Chat</h1>
            <Navbar />
        </div>
    );
};

export default Header;