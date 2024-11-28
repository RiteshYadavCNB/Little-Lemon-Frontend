import React from "react";
import { useState } from "react";
import styled from "styled-components";

const OTPContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    gap: 20px;

    @media (max-width: 768px) {
        width: 80%;
    }
`;

const InputContainer = styled.div`
    display: flex;
    flex-direction: Column;
    gap: 12px;
`;

const InputField = styled.input`
    width: 100%;
    height: 54px;
    font-size: 16px;
    padding: 16px;
    color: rgb(139, 139, 139);
    border: 1px solid rgb(206, 206, 206);
    border-radius: 4px;
    box-sizing: border-box;
    outline: none;

    &::placeholder {
        color: rgb(139, 139, 139);
    }

    &:hover {
        border: 1px solid rgb(0, 0, 0);
    }
`;

const Label = styled.label`
    display: block;
    font-size: 16px;
`;

const RequestOTPButton = styled.button`
    display: flex;
    width: 100%;
    height: 54px;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 18px;
    font-weight: 500;
    background-color: black;
    border: none;
    border-radius: 8px;
`;

const OTPInputField = styled.input`
    display: flex;
    width: 50px;
    height: 40px;
    border: none;
    border-radius: 6px;
`;

//component

const MobileOTP = ({label, placeholder, actions}) => {

    const[otpRequest, setOtpRequest] = useState(false);
    const[inputOTP, setInputOTP] = useState("000000");


    const handleOTPRequest = () => {
        setOtpRequest(true);
        mapOTPFields();
    };

    const handleOTPInput = (e) => {
        setInputOTP((prev) => ({...prev, e}));
    }

    const mapOTPFields = (inputOTP) => {
       const Fields = inputOTP.split('');
       console.log("idhar tak sab changa si!")
       Fields.length.map((index)=>{
        return (
            <OTPInputField type="integer" key={index}/>
        );
    })
    };

    return(
        <OTPContainer>
            <InputContainer>
                <Label>{label ? label : "Enter OTP Address"}</Label>
                <InputField placeholder={placeholder ? placeholder : "your details"}/>
            </InputContainer>

            <div>we are into it together 😁</div>

            {otpRequest || mapOTPFields}

            <RequestOTPButton onClick={handleOTPRequest}>{otpRequest ? "Verify OTP" : "Request OTP"}</RequestOTPButton>
        </OTPContainer>
    );
};

export default MobileOTP;