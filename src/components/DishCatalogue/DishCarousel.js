import { useRef } from "react";
import Catalogue from './DishCatalogue';

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
        <div className="carousel">
            <div className="carousel-btn">
            <button onClick={scrollLeft}><img alt="next button" style={{transform: "rotate(180deg)"}} src="./next.png"></img></button>
            </div>

            <div ref={carouselRef} className="card-container">
                <Catalogue cardWidth={cardRef}/>
            </div>

            <div className="carousel-btn">
            <button onClick={scrollRight}><img alt="next button" src="./next.png"></img></button>
            </div>

            <div className="carousel-scroll-indicator">
                <div className="carousel-scroll-dot" style={{width: "40px"}}></div>
                <div className="carousel-scroll-dot" style={{width: "20px"}}></div>
            </div>
        </div>
    )
};

export default DishCarousel;