

function Header() {
    return (
        <header className="header">
            <div className="logo-container">
                <img className='logo' url='https://github.com/RiteshYadavCNB/Little-Lemon-Repo/blob/main/public/logo.png' alt='little lemon logo'/>
            </div>
            <nav>
                <ul className="nav">
                    <li><a className="nav-link" href='/'>Home</a></li>
                    <li><a className="nav-link" href='/'>Contact</a></li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;