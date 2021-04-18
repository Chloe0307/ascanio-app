// NPM imports
import React from 'react';

// Styles imports
import './header.css';
import AscanioLogo from '../../assets/images/ascanio-logo.png';

function Header () {
    return(
        <header className="header-content">
            <img src={AscanioLogo} className="ascanio-logo" alt="logo entreprise ascanio"></img>
            <h1 className="header-title">Application de recherche par ville</h1>
        </header>
    )
};

export default Header;