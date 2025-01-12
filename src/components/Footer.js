import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    background-color: #191808;
    position: relative;
    bottom: 0px;
    align-items: center;
    color: #FBF9C2;
    gap: 20px;
    box-sizing: border-box;
    padding: 20px;

`;

const CompanyInfo = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
  align-items: center;
  gap: 6px;
  padding-bottom: 20px;
`;

const FooterH3 = styled.h3`
    font-size: 24px;
    font-weight: 500;

`;

const Tag = styled.p`
  white-space: nowrap;
  font-size: 14px;
  font-weight: 400px;
  padding: 0px 16px 8px 16px;
  margin-bottom: 8px;
  border-bottom: 1px solid #FBF9C280;

  @media (max-width: 768px) {
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.5px;
  }
`;

const Address = styled.p`
  font-size: 15px;
  font-weight: 400px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 14px;
    font-weight: 400;
  }
`;

const IconCollectionContainer = styled.div`
  display: flex;
  width: max-content;
  height: max-content;
  gap: 20px;
  background-color:rgb(44, 42, 16, 0.6);
  padding: 12px 30px;
  box-sizing: border-box;
  border-radius: 30px;
`;

const IconContainer = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 4px;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border-radius: 50%;

  img{
    width: 20px;
    height: 20px;
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 0px;

  ul{
    display: flex;
    justify-content: center;
    gap: 40px;
  }

  li{
    display: flex;
    width: auto;
    text-decoration: none;
    color: #FBF9C2;
    font-size: 16px;
    font-weight: 500;
    padding: 8px 16px;
    border: 1px solid;
    border-radius: 30px;
  }

  & li:hover{
    color: #756300;
    background-color: #FBF9C2;
  }

  .LinkStyle{
    text-decoration: none;
  }
`;

const FooterVectorContainer = styled.div`
  display: flex;
  width: 100%;
  padding-bottom: 8px;
  border-bottom: 1px solid #ffffff80;

  img{
    width: 100%;
  }
`;

const Copyright = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;

  p{
    font-size: 14px;
    font-weight: 400;

    @media (max-width: 768px){
    font-size: 12px;
    font-weight: 300;
    letter-spacing: 0.5px;
    }

  }
`;

export default function Footer(){
    return(
        <FooterContainer>
            <CompanyInfo>
              <FooterH3>Little Lemon Restaurant</FooterH3>
              <Tag>Serving Mediterranean Cuisine with Love</Tag>
              <Address>CyberHub IT Complex Ground Floor Gate No-08, Gurugram, Haryana.</Address>
            </CompanyInfo>

            <IconCollectionContainer>
              <IconContainer><img src="./instagram.png" alt="instagram"/></IconContainer>
              <IconContainer><img src="./facebook.png" alt="facebook"/></IconContainer>
              <IconContainer><img src="./youtube.png" alt="youtube"/></IconContainer>
            </IconCollectionContainer>

            <NavigationContainer>
              <ul>
                <Link className="LinkStyle" to='/order-online'><li>Order Online</li></Link>
                <Link className="LinkStyle" to='/table-booking'><li>Book Table</li></Link>
              </ul>
            </NavigationContainer>

            <FooterVectorContainer>
              <img src="./footerVector.png" alt="vectorimg"/>
            </FooterVectorContainer>

            <Copyright>
              <p>&copy; Little Lemon Restaurant | All Rights Reserved</p>
            </Copyright>

        </FooterContainer>
    )
}