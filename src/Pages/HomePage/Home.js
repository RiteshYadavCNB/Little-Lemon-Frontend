import DishCarousel from "../../components/DishCatalogue/DishCarousel";
import { ContactCard } from "../../components/UtilityComponents/Cards/ContactCard";
import { DisplayCard } from "../../components/UtilityComponents/Cards/DisplayCards";
import { Banner, BannerContact, BannerImg, DisplayCardContainer, HeroAnimation, HeroSection, HeroTitle, HomeMain, MenuContainer } from "./HomeStyle";


const Homepage = () => {

    return (
        <HomeMain>
            <HeroSection>
                <div style={{display: 'flex', flexDirection: 'row', width: '100%',
                        gap: '20px', justifyContent: 'center', alignItems: 'center'}}>
                    <HeroAnimation>
                        <img style={{height: '60px'}} src="./Animation.gif" alt="animation"/>
                    </HeroAnimation>
                    <HeroTitle>Order food or Dine out<br/>Let the Taste... Lemon!</HeroTitle>
                </div>

                <DisplayCardContainer>
                    <DisplayCard title="Dine Out" subHead="Experience Dining" value="20%" imgSource="./DineOut.png" />
                    <DisplayCard title="Order Online" subHead="Lemon Cravings" value="40%" imgSource="./Order.png" />
                    <DisplayCard title="Gift a Lemon" subHead="Taste, that Joys!" last="true" imgSource="./Gift.png" value="30%"
                        customStyle={{width: '180px', height: '180px', right: '20px'}} />
                </DisplayCardContainer>

            </HeroSection>

            <MenuContainer>
                <h1>What we Serve!</h1>
                <DishCarousel/>
            </MenuContainer>

            <Banner>
                <BannerImg src="./banner-home.webp" alt="banner"/>
                <BannerContact>
                    <ContactCard/>
                </BannerContact>
            </Banner>

        </HomeMain>
    )
}

export default Homepage;