import React from "react";
import styled from "styled-components";

const InputContainer = styled.div`
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

const InputFieldStyle = styled.input`
    width: 280px;
    height: 54px;
    font-size: 16px;
    padding: 16px;
    color: rgb(139, 139, 139);
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    box-sizing: border-box;
`;



const InputField = ({label, placeholder, username, actions}) => {
    return (
        <InputContainer>
        {label && <Label>{label}</Label>}
        <InputFieldStyle placeholder={placeholder} value={username} onChange={actions}/>
    </InputContainer>
    );
};

export default InputField;