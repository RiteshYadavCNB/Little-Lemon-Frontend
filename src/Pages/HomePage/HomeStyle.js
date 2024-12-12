import styled from "styled-components";

export const HomeMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    margin-top: 60px;
    align-items: center;
    background: #fefbdc;
`;

export const HeroSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 600px;
    gap: 50px;
    align-items: center;
    padding: 80px 0px 20px 0px;
    background: #fcf075;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;

    @media (max-width: 768px) {
      width: 100%;
      height: max-content;
    }
`;

export const HeroAnimation = styled.div`
    display: flex;
    width: 60px;
    height: 60px;
    align-items: center;
    border-radius: 100%;
    background: #fef9cb;
    overflow: hidden;
`;

export const HeroTitle = styled.h1`
    font-family: "Monsieur La Doulaise", cursive;
    font-size: 40px;
    font-weight: 800px;
    color: #645e21;

    @media (max-width: 768px){
      font-size: 22px;
    }
`;

export const DisplayCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    align-items: center;
    justify-content: center;
    gap: 80px;

    @media (max-width: 768px){
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
      gap: 16px;

      & > * {
        margin-bottom: 20px;
      }
    }
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    margin: 60px 0px 60px 0px;
    gap: 40px;
  }

  h1{
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #645e21;
  }

  @media (max-width: 768px) {
    h1{
      font-size: 24px;
      font-weight: 700px;
    }
  }
`;

export const Banner = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  max-width: 1200px;
  height: 300px;
  margin: 60px 0px 60px 0px;
  align-items: center;


  @media (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: max-content;
    padding: 20px 0px;
  }
`;

export const BannerImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: inset 0px 0px 12px 4px #000000;

  @media (max-width: 768px){
    display: none;
  }

`;

export const BannerContact = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  max-width: 520px;
  align-items: center;
  justify-content: center;
  z-index: 1;
  left: -40px;
  background: linear-gradient( #fefbdc -6.71%,
    rgb(235, 235, 242, 0.5) 56.19%,
    rgb(223, 223, 231, 0.5) 106.56%);
  padding: 16px 16px;
  border-radius: 32px;

  @media (max-width: 768px){
    position: static;
  }
`;
