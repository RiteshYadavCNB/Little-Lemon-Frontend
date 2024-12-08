import styled from "styled-components";

export const Carousel = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 80%;
    max-width: 1200px;
    height: max-content;
    align-items: center;
    gap: 16px;

    @media (max-width: 480px) {
        flex-direction column;
        width: 100%;
    }
`;


export const CatalogueStyle = styled.div`
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



export const CarouselButton = styled.div`
    position: absolute;
    display: block;
    width: max-content;
    right: ${(props) => props.right !== undefined && typeof props.right === 'number'
        ? `${props.right - 40}px` : 'auto'};
    left: ${(props) => props.left !== undefined && typeof props.left === 'number'
        ? `${props.left - 40}px` : 'auto'};
    z-index: 1;

    @media (max-width: 480px) {
        display: none;
    }
`;