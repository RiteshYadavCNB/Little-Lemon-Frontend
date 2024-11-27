import React from "react";
import styled from "styled-components";

const Button = styled.button`
    width: 200px;
    height: 40px;
    font-size: 15px;
    font-weight: 500;
    border-radius: 10px;
    border: none;
    background-color: black;
    color: white;
    cursor: pointer;
    box-shadow: -3px 3px 0px 1px rgb(100, 100, 100);
`;

const CTAButton = ({buttonText, actions}) => {
    return(
        <Button onClick={actions}>{buttonText}</Button>
    )
};

export default CTAButton;

