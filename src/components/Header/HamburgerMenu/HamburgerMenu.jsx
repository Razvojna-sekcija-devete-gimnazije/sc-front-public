import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './HamburgerMenu.css';

function HamburgerMenu({ navLinks }) {
    const [isOpen, setIsOpen]             = useState(false);
    const [isClosing, setIsClosing]       = useState(false);
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [openSection, setOpenSection]   = useState(null);

    const openMenu = () => {
        setIsOpen(true);
        setIsClosing(false);
        setHamburgerOpen(true);
    };

    const closeMenu = () => {
        setHamburgerOpen(false);
        setIsClosing(true);
        setOpenSection(null);
        setTimeout(() => {
            setIsOpen(false);
            setIsClosing(false);
        }, 700);
    };

    const toggleMenu = () => {
        if (isOpen && !isClosing) closeMenu();
        else if (!isOpen) openMenu();
    };

    const toggleSection = (id) => {
        setOpenSection(prev => prev === id ? null : id);
    };

    return (
        <>
            <button
                className={`hamburger ${hamburgerOpen ? 'open' : ''}`}
                onClick={toggleMenu}
                aria-label="Otvori navigaciju"
                aria-expanded={isOpen}
            >
                <span className='bar'></span>
                <span className='bar'></span>
                <span className='bar'></span>
            </button>

            <nav className={`hamburger-nav ${isOpen && !isClosing ? 'open' : ''}`}>
                <ul className="hb-list">
                    {navLinks
                        .filter(link => link.showInMenu)
                        .map(link => {
                            if (link.children?.length > 0) {
                                const isExpanded = openSection === link.id;
                                return (
                                    <li key={link.id} className="hb-item">
                                        <button
                                            className={`hb-section-btn ${isExpanded ? 'expanded' : ''}`}
                                            onClick={() => toggleSection(link.id)}
                                            aria-expanded={isExpanded}
                                        >
                                            {link.name}
                                            <svg className="hb-chevron" width="14" height="14" viewBox="0 0 12 12" fill="none">
                                                <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                            </svg>
                                        </button>
                                        <ul className={`hb-children ${isExpanded ? 'open' : ''}`}>
                                            {link.children
                                                .filter(child => child.showInMenu)
                                                .map(child => (
                                                    <li key={child.id}>
                                                        <NavLink
                                                            to={`${link.path}/${child.path}`}
                                                            className={({ isActive }) =>
                                                                isActive ? 'hb-child-link active' : 'hb-child-link'
                                                            }
                                                            onClick={closeMenu}
                                                        >
                                                            {child.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                        </ul>
                                    </li>
                                );
                            }

                            return (
                                <li key={link.id} className="hb-item">
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            isActive ? 'hb-link active' : 'hb-link'
                                        }
                                        onClick={closeMenu}
                                    >
                                        {link.name}
                                    </NavLink>
                                </li>
                            );
                        })}
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