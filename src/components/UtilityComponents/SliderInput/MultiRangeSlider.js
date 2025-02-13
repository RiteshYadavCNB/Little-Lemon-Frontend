import { useEffect, useRef, useState } from "react";
import { MultiRangeSliderDiv, SliderLabels, SliderRange, SliderTrack } from "./MultiRangeSliderStyle";

const MultiRangeSlider = ({min, max, step, minVal, maxVal, handleMinVal, handleMaxVal}) => {
    const rangeRef = useRef(null);

    // update range background fill
    useEffect(() => {
        if (rangeRef.current) {
            const minPercent = ((minVal - min) / (max - min)) * 100;
            const maxPercent = ((maxVal - min) / (max - min)) * 100;
            rangeRef.current.style.left = `${minPercent}%`;
            rangeRef.current.style.width = `${maxPercent - minPercent}%`;
        }
    }, [minVal, maxVal, min, max]);

    return(
        <MultiRangeSliderDiv>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={minVal}
                onChange={handleMinVal}
                className="thumb thumb-left"
            />

            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={maxVal}
                onChange={handleMaxVal}
                className="thumb thumb-right"
            />

            <SliderTrack/>

            <SliderRange ref={rangeRef} className="slider-range"/>

            <SliderLabels className="slider-labels">
                <span>₹ {minVal}</span>
                <span>₹ {maxVal}</span>
            </SliderLabels>

        </MultiRangeSliderDiv>
    );

};

export default MultiRangeSlider;