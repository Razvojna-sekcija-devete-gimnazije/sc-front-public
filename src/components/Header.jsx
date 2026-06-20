import './Header.css';
import logoImg from "../assets/deveta.png";

function Header() {
    const NAV_LINKS=[
        {label:'Ucitelji', path:'/'},
        {label:'Opste info', path:'/'},
        {label:'Casopis', path:'/'},
        {label:'maturski radovi', path:'/'}
    ]
  return (
    <header className='header'>
        <div className='logo'>
            <a href="/"><img src={logoImg} alt='logo devete' className='logo'/></a>
        </div>
        {/* moze dinamicki da se stavi toggle preko klasa i dugmeta*/}
        <nav className='nav-menu'>
            <ul>
                {NAV_LINKS.map((link)=>(
                    <li>
                        <a href={link.path}>{link.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    </header>
  );
}

export default Header