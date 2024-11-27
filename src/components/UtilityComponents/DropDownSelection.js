import React from "react";
import styled from "styled-components";


const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    padding: 0px;
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

const DropDownSelection = ({label, value, placeholder, mapParameter, actions }) => {
    return(
        <DropDownContainer>
            {label && <Label>{label}</Label>}
            <Selection required value={value} onChange={actions}>
                <option value="" disabled>{placeholder}</option>

                {mapParameter && mapParameter.length > 0 ? (mapParameter.map((slots) => (
                    <option value={slots}>{slots}</option>
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
