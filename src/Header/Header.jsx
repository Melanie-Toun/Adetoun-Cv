import React, { useContext, useState } from 'react';
import './Header.css';
import { PortfolioContext } from '../Context/PortfolioContext'; 
import { Link } from 'react-router-dom';

function Header() {
    const { theme, setTheme, themes } = useContext(PortfolioContext); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const handleThemeChange = (event) => {
        const selectedTheme = event.target.value;
        setTheme(selectedTheme); 
        localStorage.setItem('theme', selectedTheme); 
    };

    // Define colors for each theme
    const themeColors = {
        light: { background: '#837c7c', color: 'black' },
        dark: { background: 'black', color: 'white' },
        red: { background: '#800000', color: 'white' },
        blue: { background: '#178582', color: 'white' },
        green: { background: '#accf34', color: 'white' },
        yellow: { background: '#c4c44e', color: 'black' },
        purple: { background: '#4b0082', color: 'white' },
    };

    return (
        <div id="header" className={theme}>
            {/* Mobile Menu Overlay */}
            {isMenuOpen && <div className="menu-overlay active" onClick={closeMenu}></div>}
            
            <div className="container">
                <nav>
                    <img src="images/Goodluck.png" className="logo" alt="Logo" />
                    
                    {/* Mobile Menu Icon - This replaces both hamburger and close icon */}
                    <i 
                        className={`menu-icon fa-regular ${isMenuOpen ? 'fa-circle-xmark' : 'fa-bars'}`}
                        onClick={toggleMenu}
                    ></i>

                    <ul className={isMenuOpen ? 'active' : ''}>
                        <li>
                            <select 
                                id="theme-selector" 
                                className="theme-toggle" 
                                value={theme} 
                                onChange={handleThemeChange} 
                                style={{
                                    background: themeColors[theme]?.background, 
                                    color: themeColors[theme]?.color
                                }}
                            >
                                {themes.map((themeOption) => (
                                    <option key={themeOption} value={themeOption}>
                                        {themeOption.charAt(0).toUpperCase() + themeOption.slice(1)}
                                    </option>
                                ))}
                            </select>
                        </li>
                        
                        <li onClick={closeMenu}>
                            <Link to='/'><a href="#header">Home</a></Link>
                        </li>
                        <li className='heading' onClick={closeMenu}>
                            <a href="#about">About</a>
                        </li>
                        <li className='heading' onClick={closeMenu}>
                            <a href="#services">Services</a>
                        </li>
                        <li className='heading' onClick={closeMenu}>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className='heading' onClick={closeMenu}>
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                
                <div className="header-text">
                    <p>Full Stack Developer</p>
                    <h1>
                        Hi, I'm <br /> 
                        <span>Omotolani Adetoun Goodluck</span>
                        <span className="toun-animation">
                            <h6 className="floating-toun">Toun</h6>
                        </span> 
                        <br /> 
                        based in the UK
                    </h1>
                </div>
            </div>
        </div>
    );
}

export default Header;