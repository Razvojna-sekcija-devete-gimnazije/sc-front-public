import { useState } from 'react';
import './HamburgerMenu.css';

function HamburgerMenu({ navLinks }) {
    const [isOpen, setIsOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);

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
        <>
            <button
                className={`hamburger ${hamburgerOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Toggle navigation"
                aria-expanded={isOpen}
            >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>

            <nav className={`hamburger-nav ${isOpen && !isClosing ? 'open' : ''}`}>
                <ul>
                    {navLinks.map((link) => (
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
        </>
    );
}

export default HamburgerMenu;