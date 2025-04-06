import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { useEffect, useState } from 'react';
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { useCartItemContext } from 'src/context/CartItemsContext';


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

    @media (max-width: 768px){
        display: flex;
        width: 100%;
        padding: 10px;
        gap: 10px;
        justify-content: flex-start;
    }
`;

const LogoContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: flex-start;
    padding-left: 2vw;

    @media (max-width: 768px){
        width: 100%;
        align-items: center;
        justify-content: flex-start;
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
// mobile header nav
const MediaNavContainer = styled.div`
    display: none;
    right: 0px;
    gap: 20px;

    @media(max-width: 768px){
        display: flex;
    }
`;

const Hamburger = styled.button`
    display: none;

    @media (max-width: 768px){
        display: flex;
        background: #475e17;
        border: none;
        border-radius: 4px;
        padding: 4px;
    }
`;

const HamburgerMenu = styled.div`
    position: absolute;
    display: flex;
    top: 60px;
    right: 0px;
    padding: 20px;
    background: #fcf286;
    border-radius: 0px 0px 0px 8px;
`;

const NavList = styled.ul`
    display: flex;
    white-space: nowrap;
    align-items: center;
    gap: 20px;
    list-style-type: none;

    @media (max-width: 768px){
        flex-direction: column;
    }
`;

const LogoText = styled.h1`
    font-family: "Monsieur La Doulaise", cursive;
    font-size: 24px;
    font-weight: 700;
    color: #475E17;
`;

const CartContainer = styled.div`
    position: relative;
    display: flex;
    width: 30px;
    height: 30px;
    align-items: center;
    justify-content: center;
`;

const CartValue = styled.p`
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    verticle-align: middle;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #edefe8;
    background: #475e17;
    border-radius: 50%;
    top: -12px;
    right: -12px;
`;

const LinkStyle = {
    textDecoration: "none",
    color: "#756300",
    fontSize: "16px",
    fontWeight: "600"
};



const Header = () => {

    const [hamburgerMenuState, sethamburgerMenuState] = useState(false);

    // eslint-disable-next-line no-undef
    const { pathname } = useLocation();

    useEffect(()=> {
        sethamburgerMenuState(false)
    },[pathname])

    const { cartItems } = useCartItemContext();


    return (
        <HeaderContainer>
            <LogoContainer>
                <Link style={{textDecoration: "none"}} to='/'><LogoText>Little Lemon</LogoText></Link>
            </LogoContainer>
            <NavContainer>
                <NavList>
                    <Link style={LinkStyle} to='/cart'>
                        <CartContainer>
                        <LocalMallRoundedIcon sx={{fontSize: 30, color: '#756300'}}/>
                        {cartItems.length !== 0 && <CartValue>{cartItems.length}</CartValue>}
                        </CartContainer>
                    </Link>
                    <Link style={LinkStyle} to='/order-online'>Order Online</Link>
                    <Link style={LinkStyle} to='/table-booking'>Book Table</Link>
                    <Link style={LinkStyle} to='/contact'>Contact</Link>
                </NavList>
            </NavContainer>

            <MediaNavContainer>
                <Link style={LinkStyle} to='/cart'>
                        <CartContainer>
                        <LocalMallRoundedIcon sx={{fontSize: 30, color: '#756300'}}/>
                        {cartItems.length !== 0 && <CartValue>{cartItems.length}</CartValue>}
                        </CartContainer>
                </Link>

                <Hamburger onClick={() => sethamburgerMenuState(prevState => !prevState)}>
                    <MenuRoundedIcon sx={{color: 'wheat'}}/>
                </Hamburger>
            </MediaNavContainer>

            {hamburgerMenuState && <HamburgerMenu>
                <NavList>
                    <Link style={LinkStyle} to='/table-booking'>Book Table</Link>
                    <Link style={LinkStyle} to='/order-online'>Order Online</Link>
                    <Link style={LinkStyle} to='/contact'>Contact</Link>
                </NavList>
            </HamburgerMenu>}

        </HeaderContainer>
    );
}

export default Header;