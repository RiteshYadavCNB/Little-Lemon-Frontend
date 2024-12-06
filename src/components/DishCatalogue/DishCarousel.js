import { useRef } from "react";
import Catalogue from './DishCatalogue';
import ScrollButton from "../UtilityComponents/Buttons/ScrollButton";
import { Carousel, CarouselButton, CatalogueStyle } from "./DishCarouselStyle";



//keep the styled components outside the function scope
//so when the component re-renders the styles are not duplicated or renrendered

const DishCarousel = () => {

    const carouselRef = useRef(null);

    const cardRef = useRef(null);

    const scrollLeft = () => {
        if (carouselRef.current && cardRef.current){
            const cardWidth = cardRef.current.offsetWidth + 20;
            carouselRef.current.scrollBy({left: -cardWidth, behavior: "smooth"})
        };
    };

    const scrollRight = () => {
        if (carouselRef.current && cardRef.current){
            const cardWidth = cardRef.current.offsetWidth + 20;
            carouselRef.current.scrollBy({left: cardWidth, behavior: "smooth"})
        };
    };


    return (
        <Carousel>
            <CarouselButton onClick={scrollLeft}>
                <ScrollButton degrees="left" alt={undefined} />
            </CarouselButton>

            <CatalogueStyle ref={carouselRef} >
                <Catalogue cardWidth={cardRef} />
            </CatalogueStyle>

            <CarouselButton onClick={scrollRight}>
                <ScrollButton alt={undefined} degrees={undefined}/>
            </CarouselButton>
        </Carousel>
    )
};

export default DishCarousel;