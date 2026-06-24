import './Header.css';
import logoImg from "../../assets/deveta.png";
import HamburgerMenu from "./HamburgerMenu/HamburgerMenu"

function Header() {

    const NAV_LINKS = [
        { label: 'Ucitelji', path: '/' },
        { label: 'Opste info', path: '/' },
        { label: 'Casopis', path: '/' },
        { label: 'Maturski radovi', path: '/' }
    ];


    return (
        <header className='header'>
            <div className='logo'>
                <a href="/"><img src={logoImg} alt='logo devete' /></a>
            </div>

            <nav className='nav-menu'>
                <ul>
                    {NAV_LINKS.map((link) => (
                        <li key={link.label}>
                            <a href={link.path}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <HamburgerMenu navLinks={NAV_LINKS} />
        </header>
    );
}

export default Header;