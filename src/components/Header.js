import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {

    return (
        <header className="header">
            <div className="logo-container">
                <Link to='/'><img className='logo' src={logo} size='2xl' alt='little lemon logo'/></Link>
            </div>
            <nav className='nav-container'>
                <ul className="nav-list">
                    <li><Link to='/booking' className="nav-link" >Book Table</Link></li>
                    <li><Link to='/' className="nav-link" >Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;