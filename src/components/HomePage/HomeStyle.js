import styled from "styled-components";

export const HomeMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    margin: 60px 0px;
    align-items: center;

    @media (max-width: 768px) {
      margin: 90px 0px 60px 0px;
    }
`;

export const HeroSection = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: 600px;
    gap: 30px;
    margin: 40px 0px;

    @media (max-width: 768px) {
      flex-direction: column;
      width: 90%;
      height: max-content;
      margin: 40px 0px;
    }
`;

export const HeroCol1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    height: 100%;

    @media (max-width: 768px) {
      width: 100%;
      height: 220px;
    }
`;

export const HeroCol2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    height: 100%;
    gap: 30px;

    @media (max-width: 768px) {
      flex-direction: row;
      width: 100%;
      height: 180px;
      gap: 20px;
    }
`;

export const HeroColSubCol = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 0;

    @media (max-width: 768px) {
      height: 100%;
    }
`;

export const HeroImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    border: 2px solid #79650b;
    box-shadow: -6px 6px 0px #d6b315;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    padding: 40px 0px 40px 0px;
    gap: 40px;
  }

  h1{
    font-size: 32px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: rgb(3, 41, 44);
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
  padding-top: 40px;
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

  @media (max-width: 768px){
    display: none;
  }

`;

export const BannerContact = styled.div`
  position: absolute;
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  z-index: 1;
  left: -40px;

  @media (max-width: 768px){
    position: static;
  }
`;
