import DishCarousel from "../DishCatalogue/DishCarousel";
import { ContactCard } from "../UtilityComponents/Cards/ContactCard";
import { Banner, BannerContact, BannerImg, HeroCol1, HeroCol2, HeroColSubCol, HeroImg, HeroSection, HomeMain, MenuContainer } from "./HomeStyle";


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