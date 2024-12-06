import styled from "styled-components";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 40px;
    background-color: #d6b315;
    position: relative;
    bottom: 0px;
    align-items: center;
    color: #FBF9C2;
    gap: 10px;
    box-sizing: border-box;
    padding-left: 10px;

    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 60px;
      padding: 10px;
      bottom: 0;
      align-items: center;
      justify-content: center;
      gap: 4px;
      color: #FBF9C2;
      box-sizing: border-box;
    }
`;

const FooterH3 = styled.h3`
    display: flex;
    width: auto;
    font-size: 18px;
    font-weight: 500;

    @media (max-width: 768px) {
      flex: 1;
      display: flex;
      font-size: 16px;
      font-weight: 600;
    }
`;

const Line = styled.div`
    width: 2px;
    height: 40%;
    background-color: #FBF9C2;

    @media (max-width: 768px) {
      width: 0px;
      height: 0px;
      background-color: none;
    }
`;

const FooterP = styled.p`
    flex: 1;
    display: flex;
    width: 100%;
    white-space: nowrap;
    font-size: 15px;
    font-weight: 400px;

    @media (max-width: 768px) {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 12px;
      font-weight: 400;
    }
`;



export default function Footer(){
    return(
        <FooterContainer>
            <FooterH3>Little Lemon Restaurant</FooterH3>
            <Line className="line"></Line>
            <FooterP>Serving Mediterranean Quisine with Love</FooterP>
        </FooterContainer>
    )
}