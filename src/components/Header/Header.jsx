import { useState } from 'react';
import './Header.css';
import logoImg from "../../assets/deveta.png";

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const NAV_LINKS = [
        { label: 'Ucitelji', path: '/' },
        { label: 'Opste info', path: '/' },
        { label: 'Casopis', path: '/' },
        { label: 'Maturski radovi', path: '/' }
    ];

    const openMenu = () => {
        setIsOpen(true);
        setIsClosing(false);
        setHamburgerOpen(true);
    };

    const closeMenu = () => {
        setHamburgerOpen(false);
        setIsClosing(true);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 700);
    };

    const toggleMenu = () => {
        if (isOpen && !isClosing) {
            closeMenu();
        } else if (!isOpen) {
            openMenu();
        }
    };

    return (
        <header className='header'>
            <div className='logo'>
                <a href="/"><img src={logoImg} alt='logo devete' /></a>
            </div>

            <button
                className={`hamburger ${hamburgerOpen  ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
            >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>

            <nav className={`nav-menu ${isOpen && !isClosing ? 'open' : ''}`}>
                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <a href={link.path} onClick={closeMenu}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            {isOpen && (
                <div
                    className={`nav-overlay ${isClosing ? 'closing' : ''}`}
                    onClick={closeMenu}
                ></div>
            )}
        </header>
    );
}

export default Header;