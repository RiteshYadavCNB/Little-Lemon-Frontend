import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useEffect, useState } from 'react';


const HeaderContainer = styled.header`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 60px;
    background: #fcf075;
    position: fixed;
    top: 0;
    align-items: center;
    z-index: 100;
    box-sizing: border-box;

    @media (max-width: 768px){
        display: flex;
        padding: 10px;
        gap: 10px;
        justify-content: flex-start;
        box-sizing: border-box;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    padding-left: 2vw;
    box-sizing: border-box;

    @media (max-width: 768px){
        width: max-content;
        align-items: center;
        justify-content: center;
        height: 40px;
    }
`;

const NavContainer = styled.nav`
    position: absolute;
    display: flex;
    width: max-content;
    right: 0px;
    flex-shrink: 0;
    flex-grow: 0;
    padding-right: 2vw;

    @media (max-width: 768px){
        display: none;
    }
`;

const Hamburger = styled.button`
    position: absolute;
    display: none;

    @media (max-width: 768px){
        display: flex;
        right: 16px;
        z-index: 10;
        background: #475e17;
        border: none;
        border-radius: 4px;
        padding: 4px;
    }
`;

const HamburgerMenu = styled.div`
    position: absolute;
    display: ${(props) => props.burgermenu ? 'flex' : 'none'};
    top: 60px;
    right: 0px;
    padding: 20px;
    background: #fcf286;
    border-radius: 0px 0px 0px 8px;
`;

const NavList = styled.ul`
    display: flex;
    white-space: nowrap;
    gap: 20px;
    list-style-type: none;

    @media (max-width: 768px){
        flex-direction: column;
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

    const [hamburgerMenuState, sethamburgerMenuState] = useState(false);

    // eslint-disable-next-line no-undef
    const { pathname } = useLocation();

    useEffect(()=> {
        sethamburgerMenuState(false)
    },[pathname])


    return (
        <HeaderContainer>
            <LogoContainer>
                <Link style={{textDecoration: "none"}} to='/'><LogoText>Little Lemon</LogoText></Link>
            </LogoContainer>
            <NavContainer>
                <NavList>
                    <Link style={LinkStyle} to='/table-booking'><NavLink>Book Table</NavLink></Link>
                    <Link style={LinkStyle} to='/order-online'><NavLink>Order Online</NavLink></Link>
                    <Link style={LinkStyle} to='/'><NavLink>Contact</NavLink></Link>
                </NavList>
            </NavContainer>

            <Hamburger onClick={() => sethamburgerMenuState(prevState => !prevState)}>
                <MenuRoundedIcon sx={{color: 'wheat'}}/>
            </Hamburger>

            <HamburgerMenu burgermenu={hamburgerMenuState}>
                <NavList>
                    <Link style={LinkStyle} to='/table-booking'><NavLink>Book Table</NavLink></Link>
                    <Link style={LinkStyle} to='/order-online'><NavLink>Order Online</NavLink></Link>
                    <Link style={LinkStyle} to='/'><NavLink>Contact</NavLink></Link>
                </NavList>
            </HamburgerMenu>

        </HeaderContainer>
    );
}

export default Header;