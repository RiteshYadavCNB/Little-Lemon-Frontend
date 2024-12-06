import DishCarousel from "./DishCatalogue/DishCarousel";
import styled from "styled-components";

const HomeMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    margin-top: 60px;
    align-items: center;

    @media screen and (max-width: 768px) {
        .home-main{
        margin-top: 70px;
    }
  }
`;

const HeroSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 600px;
    gap: 30px;
    margin: 40px 0px;

    @media (max-width: 7680px) {
        height: 400px;
    }
`;

const HeroCol1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;
`;

const HeroCol2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    gap: 30px;
`;

const HeroColSubCol = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 0;
`;

const HeroImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    border: 2px solid #79650b;
    box-shadow: -6px 6px 0px #d6b315;
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 40px 0px;
    gap: 40px;
  }

  &.h1{
    font-size: 38px;
    font-weight: 800;
    letter-spacing: 0.5px;
    color: rgb(3, 41, 44);
  }

  @media screen and (max-width: 600px) {
    .heading-div h1{
      font-size: 32px;
    }
  }
`;



const Homepage = () => {

    return (
        <HomeMain>
            <HeroSection>

                <HeroCol1>
                    <HeroColSubCol><HeroImg src="/HeroDish-1.jpg" alt="hero"/></HeroColSubCol>
                </HeroCol1>

                <HeroCol2>
                    <HeroColSubCol><HeroImg src="/HeroSubDish-1.jpg" alt="hero"/></HeroColSubCol>
                    <HeroColSubCol><HeroImg src="/HeroSubDish-2.jpg" alt="hero"/></HeroColSubCol>
                </HeroCol2>

            </HeroSection>

            <MenuContainer className="heading-div">
                <h1>Little Lemon menu</h1>
                <DishCarousel/>
            </MenuContainer>

        </HomeMain>
    )
}

export default Homepage;