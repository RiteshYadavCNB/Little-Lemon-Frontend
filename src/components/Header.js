import { Link } from 'react-router-dom';
import styled from 'styled-components';


const HeaderContainer = styled.header`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    background: #FBEC52;
    position: fixed;
    top: 0;
    align-items: center;
    z-index: 100;
    box-sizing: border-box;

    @media (max-width: 768px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90px;
        padding: 10px;
        gap: 10px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        position: sticky;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    padding-left: 2vw;
    box-sizing: border-box;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        justify-content: center;
        height: 40px;
        padding-left: 0;
    }
`;

const NavContainer = styled.nav`
    display: flex;
    width: auto;
    flex-shrink: 0;
    flex-grow: 0;
    padding-right: 2vw;
`;

const NavList = styled.ul`
    display: flex;
    white-space: nowrap;
    gap: 20px;
    list-style-type: none;

    @media (max-width: 768px){
        padding: none;
    }
`;

const NavLink = styled.li`
    display: flex;
    width: auto;
    text-decoration: none;
    color: #756300;
    font-size: 16px;
    font-weight: 600;
`;

const LogoText = styled.h1`
    font-family: "Monsieur La Doulaise", cursive;
    font-size: 24px;
    font-weight: 700;
    color: #475E17;
`;

const LinkStyle = {
    textDecoration: "none",
};



const Header = () => {

    return (
        <HeaderContainer className="header">
            <LogoContainer>
                <Link style={{textDecoration: "none"}} to='/'><LogoText>Little Lemon</LogoText></Link>
            </LogoContainer>
            <NavContainer>
                <NavList>
                    <Link style={LinkStyle} to='/table-booking'><NavLink>Book Table</NavLink></Link>
                    <Link style={LinkStyle} to='/'><NavLink>Contact</NavLink></Link>
                </NavList>
            </NavContainer>
        </HeaderContainer>
    );
}

export default Header;