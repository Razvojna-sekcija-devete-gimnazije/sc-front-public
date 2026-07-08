import { NavLink } from 'react-router-dom';
import { appRoutes } from '../../config/AppRoutes';
import './Header.css';
import logoImg from "../../assets/deveta.png";
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';

function Header() {
  return (
    <header className='header'>
        <div className='logo'>
            <NavLink to="/">
                <img src={logoImg} alt='Logo Devete gimnazije' />
            </NavLink>
        </div>

        <nav className='nav-menu'>
            <ul>
                {appRoutes
                    .filter(route => route.showInMenu)
                    .map(route => {
                        if (route.children?.length > 0) {
                            return (
                                <li key={route.id} className="nav-item has-dropdown">
                                    <span className="nav-link dropdown-trigger">
                                        {route.name}
                                        <svg className="chevron" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                            <path d="M2 4L6 8L10 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </span>
                                    <div className="dropdown-panel">
                                        <ul className="dropdown-list">
                                            {route.children
                                                .filter(child => child.showInMenu)
                                                .map(child => (
                                                    <li key={child.id}>
                                                        <NavLink
                                                            to={`${route.path}/${child.path}`}
                                                            className={({ isActive }) =>
                                                                isActive ? 'dropdown-link active' : 'dropdown-link'
                                                            }
                                                        >
                                                            {child.name}
                                                        </NavLink>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </li>
                            );
                        }

                        return (
                            <li key={route.id} className="nav-item">
                                <NavLink
                                    to={route.path}
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'
                                    }
                                >
                                    {route.name}
                                </NavLink>
                            </li>
                        );
                    })}
            </ul>
        </nav>

        <HamburgerMenu navLinks={appRoutes} />
    </header>
  );
}

export default Header;