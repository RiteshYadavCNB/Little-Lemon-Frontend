import React from "react";
import { useState } from "react";
import styled from "styled-components";
import countryDialCodes from "../data/countryDialCodes.json";

const OTPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 280px;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: Column;
  gap: 12px;
`;

const Label = styled.label`
  display: block;
  font-size: 16px;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 10px;
`;

const CountryCode = styled.select`
  display: flex;
  width: 60px;
  height: 54px;
  text-align: center;
  border-radius: 4px;
  border: 1px solid rgb(206, 206, 206);
  appearance: none;
  cursor: pointer;

  &.options {
   display: flex;
   width: 120px;
  }

  @media (max-width: 480px){
    min-width: 50px;
  }
`;

const AddressInputField = styled.input`
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
  cursor: pointer;
`;
const OTPInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: max-content;
  gap: 16px;
`;

const OTPInputField = styled.input`
  display: flex;
  width: 50px;
  height: 54px;
  text-align: center;
  border: 1px solid rgb(139, 139, 139);
  border-radius: 6px;
`;

//component

const MobileOTP = ({ label, placeholder, actions }) => {
  const [otpRequest, setOtpRequest] = useState(false);
  const [inputOTP, setInputOTP] = useState([0, 0, 0, 0]);
  const [otpAddress, setOTPAddress] = useState({countryCode: '+91', phoneNumber:''});
  const [phoneNumbererror, setPhoneNumberError] = useState(false);


  const handleOTPRequest = () => {
    setOtpRequest(true);
  };

  const handleOTPInput = (e, key) => {
    let updateOtpValue = inputOTP;
    updateOtpValue[key] = e;
    setInputOTP(updateOtpValue);
    console.log("updatedOTP", inputOTP)
  };

  const mapOTPFields = (inputOTP) => {
    if (inputOTP.length !== 4) return false;
    return inputOTP.map((item, index) => {
      return (
        <OTPInputField
          key={index}
          maxLength={1}
          onChange={(e) => handleOTPInput(e.target.value, index)}
        />
      );
    });
  };

  const updateOtpAddress = (obj) =>{
    setOTPAddress(prev => {
      return {...prev, ...obj}
    })
  }

  const handlePhoneNumber = (e, otpAddress) => {
    /^[6-9]\d{9}$/.test(otpAddress.phoneNumber) ?
      setPhoneNumberError(true) :
      setOTPAddress(otpAddress => {
        return {...otpAddress, phoneNumber: e}
      });
    console.log("state: ",otpAddress.phoneNumber);
  };


  return (
    <OTPContainer>
      <InputContainer>
        <Label>{label ? label : "Enter OTP Address"}</Label>
        <AddressContainer>
          <CountryCode value={otpAddress.countryCode} onChange={(e)=> updateOtpAddress({countryCode:e.target.value})}>
            {countryDialCodes.map((country) => (
              <option key={country.code} value={country.dial_code}>{country.dial_code}</option>
            ))}
          </CountryCode>
          <AddressInputField type="tel" onChange={(e)=> handlePhoneNumber(e.target.value, otpAddress)} placeholder="mobile number"/>
          <p>{phoneNumbererror && "incorrect mobile number"}</p>
        </AddressContainer>
      </InputContainer>

      <div>we are into it together 😁</div>
      <OTPInputContainer>
        {otpRequest && mapOTPFields(inputOTP)}
      </OTPInputContainer>

      <RequestOTPButton onClick={handleOTPRequest}>
        {otpRequest ? "Verify OTP" : "Request OTP"}
      </RequestOTPButton>
    </OTPContainer>
  );
};

export default MobileOTP;
