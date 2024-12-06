import { useRef } from "react";
import Catalogue from './DishCatalogue';
import styled from "styled-components";
import ScrollButton from "../Buttons/ScrollButton";

const Carousel = styled.div`
    display: flex;
    flex-direction: row;
    width: 80%;
    height: max-content;
    align-items: center;
    gap: 16px;

    @media (max-width: 480px) {
        flex-direction column;
        width: 100%;
    }
`;


const CatalogueStyle = styled.div`
    display: flex;
    flex-direction: row;
    Width: 100%;
    height: max-content;
    gap: 20px;
    align-items: flex-start;
    overflow: hidden;
    overflow-x: auto;
    scrollbar-width: none;

    @media (max-width: 480px) {
        align-items: flex-start;
        padding: 0px 16px;
    }
`;

const CarouselButton = styled.div`
    display: block;
    width: max-content;

    @media (max-width: 480px) {
        display: none;
    }
`;

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
                <ScrollButton degrees="left" />
            </CarouselButton>

            <CatalogueStyle ref={carouselRef} >
                <Catalogue cardWidth={cardRef} />
            </CatalogueStyle>

            <CarouselButton onClick={scrollRight}>
                <ScrollButton/>
            </CarouselButton>
        </Carousel>
    )
};

export default DishCarousel;