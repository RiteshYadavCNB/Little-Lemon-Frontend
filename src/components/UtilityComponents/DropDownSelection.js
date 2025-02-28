import React from "react";
import styled from "styled-components";
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown';


const DropDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 0px;
    flex-grow: 0;
    flex-shrink: 0;
    font-size: 16px;
    gap: 10px;
    position: relative;
`;

const Label = styled.label`
    display: block;
`;

const Selection = styled.select`
    appearance: none;
    width: 300px;
    height: 54px;
    font-size: 16px;
    padding: 16px;
    color: rgb(139, 139, 139);
    background-color: white;
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    box-sizing: border-box;
    cursor: pointer;

    &:hover {
        border: 1px solid rgb(0, 0, 0);
    }
`;

const DropdownIcon = styled(ExpandCircleDownIcon)`
    position: absolute;
    right: 16px;
    top: 68%;
    transform: translateY(-50%);
    pointer-events: none;
    color: lightgrey;
`;

const DropDownSelection = ({label, value, placeholder, mapParameter, actions }) => {
    return(
        <DropDownContainer>
            {label && <Label>{label}</Label>}
            <DropdownIcon/>
            <Selection required value={value} onChange={actions}>
                <option value="" disabled>{placeholder}</option>
                {mapParameter && mapParameter.length > 0 ? (mapParameter.map((slots) => (
                    <option key={slots} value={slots}>{slots}</option>
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
