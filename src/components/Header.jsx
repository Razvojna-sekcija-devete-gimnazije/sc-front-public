import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { appRoutes } from '../config/AppRoutes'; 
import './Header.css';
import logoImg from "../assets/deveta.png";

function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (routeId) => {
    if (openDropdown === routeId) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(routeId);
    }
  };

  return (
    <header className='header'>
        <div className='logo'>
            <NavLink to="/" onClick={() => setOpenDropdown(null)}>
                <img src={logoImg} alt='logo devete' />
            </NavLink>
        </div>

        <nav className='nav-menu'>
            <ul>
                {appRoutes
                    .filter(route => route.showInMenu)
                    .map(route => {
                        
                        if (route.children && route.children.length > 0) {
                            const isCurrentOpen = openDropdown === route.id;

                            return (
                                <li key={route.id} className="dropdown">
                                    <span 
                                        className={`dropdown-trigger ${isCurrentOpen ? 'active-trigger' : ''}`}
                                        onClick={() => toggleDropdown(route.id)}
                                    >
                                        {route.name} {isCurrentOpen ? '▴' : '▾'}
                                    </span>
                                    <ul className={`dropdown-menu ${isCurrentOpen ? 'open' : ''}`}>
                                        {route.children
                                            .filter(child => child.showInMenu)
                                            .map(child => (
                                                <li key={child.id}>
                                                    <NavLink 
                                                        to={`${route.path}/${child.path}`}
                                                        onClick={() => setOpenDropdown(null)}>
                                                        {child.name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                    </ul>
                                </li>
                            );
                        }

                        return (
                            <li key={route.id}>
                                <NavLink to={route.path} onClick={() => setOpenDropdown(null)}>
                                    {route.name}
                                </NavLink>
                            </li>
                        );
                    })}
            </ul>
        </nav>
    </header>
  );
}

export default Header;