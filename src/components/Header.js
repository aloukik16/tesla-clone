import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                {/* Add logo image or text here if needed */}
            </div>
            <nav className='nav'>
                <ul>
                    <li><Link to="/model-s">Model S</Link></li>
                    <li><Link to="/model-3">Model 3</Link></li>
                    <li><Link to="/model-x">Model X</Link></li>
                    <li><Link to="/model-y">Model Y</Link></li>
                    <li><Link to="/model-ct">CyberTruck</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;
