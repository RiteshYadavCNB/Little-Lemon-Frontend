import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'

function Header() {

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo-container">
                    <Link to='/'><img className='logo' src={logo} size='2xl' alt='little lemon logo'/></Link>
                </div>
                <nav>
                    <ul className="nav">
                        <li><Link to='/booking' className="nav-link" >Book Table</Link></li>
                        <li><Link to='/' className="nav-link" >Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;