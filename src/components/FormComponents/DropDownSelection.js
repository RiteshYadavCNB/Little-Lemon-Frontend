import React from "react";
import styled from "styled-components";


const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 280px;
    padding: 0;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    gap: 10px;
`;

const Label = styled.label`
    display: block;
`;

const Selection = styled.select`
    width: 280px;
    height: 54px;
    font-size: 16px;
    padding: 16px;
    color: rgb(139, 139, 139);
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    box-sizing: border-box;
`;

const DropDownSelection = ({label, placeholder, mapParameter, actions }) => {
    return(
        <DropDownContainer>
            {label && <Label>{label}</Label>}
            <Selection onChange={actions}>
                <option>{placeholder}</option>
                {mapParameter ? (mapParameter.map((slots, index) => (
                    <option key={index} value={slots}>{slots}</option>
                     ))
                ) : (
                    <option disabled>sorry! all tables are booked</option>
                )
                }
            </Selection>
        </DropDownContainer>
    );
};

export default DropDownSelection;
