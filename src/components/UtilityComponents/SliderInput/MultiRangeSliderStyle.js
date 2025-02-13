import styled from "styled-components";

export const MultiRangeSliderDiv = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    padding: 16px 0;

    /* Hide default range sliders */
    .thumb {
        position: absolute;
        top: 50%;
        transform:  translate(0, -50%);
        width: 100%;
        height: 10px;
        background: none;
        pointer-events: none;
        appearance: none;
        Z-index: 10;
    }

    /* Chrome, Safari, Edge */
    .thumb::-webkit-slider-thumb {
        appearance: none;
        width: 18px;
        height: 18px;
        background: #4b4719;
        border-radius: 50%;
        cursor: pointer;
        pointer-events: auto;
    }

    /* Firefox */
    .thumb::-moz-range-thumb {
        width: 18px;
        height: 18px;
        background: #4b4719;
        border-radius: 50%;
        cursor: pointer;
        pointer-events: auto;
    }
`;


/* Slider track */
export const SliderTrack = styled.div`
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 4px;
    background: #ccc;
    border-radius: 6px;
    transform: translateY(-50%);
`;

/* Active range highlight */
export const SliderRange = styled.div`
    position: absolute;
    top: 50%;
    height: 4px;
    background: #978e31;
    border-radius: 6px;
    transform: translateY(-50%);
`;



/* Labels */
export const SliderLabels = styled.div`
    position: absolute;
    top: 100%;
    display: flex;
    width: 100%;
    justify-content: space-between;
    font-size: 14px;

    span{
        padding: 0px !important;
        font-size: 14px;
        font-weight: 500;
    }
`;
