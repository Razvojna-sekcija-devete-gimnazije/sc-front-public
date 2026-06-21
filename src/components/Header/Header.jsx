import { useState } from 'react';
import './Header.css';
import logoImg from "../../assets/deveta.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const NAV_LINKS = [
        { label: 'Ucitelji', path: '/' },
        { label: 'Opste info', path: '/' },
        { label: 'Casopis', path: '/' },
        { label: 'Maturski radovi', path: '/' }
    ];

    const toggleMenu = () => {
        setIsOpen(prev => !prev);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <header className='header'>
            <div className='logo'>
                <a href="/"><img src={logoImg} alt='logo devete' /></a>
            </div>

            <button
                className={`hamburger ${isOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
            >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>

            <nav className={`nav-menu ${isOpen ? 'open' : ''}`}>
                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <a href={link.path} onClick={closeMenu}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {isOpen && <div className='nav-overlay' onClick={closeMenu}></div>}
        </header>
    );
}

export default Header;