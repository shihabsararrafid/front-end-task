import React from 'react';
import headerImage from './../../Images/header.jpg';
import './Header.css'
const Header = () => {
    return (
        <div id='header'>
            
            <img id='header-img' src={headerImage} alt="" srcset="" />
            <p>HootStory</p>
        </div>
    );
};

export default Header;