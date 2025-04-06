import { useState } from "react";
import styled from "styled-components";
import countryDialCodes from "../data/countryDialCodes.json";

const OTPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  min-width: 280px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin: 20px 0px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const InputContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: Column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

const HeadLine = styled.h1`
  width: 100%;
  font-size: 20px;
  font-weight: 600;
`;

const Label = styled.p`
  width: 100%;
  font-size: 15px;
  font-weight: 500;
`;

const MobileNumberContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
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

const MobileNumberInputField = styled.input`
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

const InputError = styled.p`
  font-size: 12px;
  color: darkred;
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

const MobileOTP = ({actionCall}) => {
  const [otpRequest, setOtpRequest] = useState(false);
  const [otpAddress, setOTPAddress] = useState({countryCode: '+91', phoneNumber:''});
  const [phoneNumbererror, setPhoneNumberError] = useState(false);
  const [otpRequestError, setOTPRequestError] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(false);
  const [inputOTP, setInputOTP] = useState(["", "", "", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);


  const handleOTPInput = (e, index) => {
    if(isNaN(e)) return;
    const updatedOTP = [...inputOTP];
    updatedOTP[index] = e;
    setInputOTP(updatedOTP);

    if (e !== "" && index < 5){
      document.getElementById(`otp-input-${index+1}`).focus();
    }
  };

  //mapping OTP Fields to display

  const mapOTPFields = (inputOTP) => {
    if (inputOTP.length !== 6) return false;
    return inputOTP.map((item, index) => {
      return (
        <OTPInputField
          key={index}
          type="number"
          id={`otp-input-${index}`}
          maxLength={1}
          onChange={(e) => handleOTPInput(e.target.value, index)}
        />
      );
    });
  };

  // updating otpAddress state

  const updateOtpAddress = (obj) =>{
    setOTPAddress((prev) => (
       {...prev, ...obj}
    ));
  }

  //validating mobile number && setting phone number state && settign phone number error state

  const handlePhoneNumber = (e, otpAddress) => {
    const isValid =  /^[0-9]*$/.test(e);
    if (e === "" || isValid) {
      setOTPAddress((otpAddress) => (
        {...otpAddress, phoneNumber: e}
      ));
      setPhoneNumberError(false);
      setOTPRequestError(false);
    } else {
      setPhoneNumberError(true);
    };
  };


  // Temp OTP Verification

  const tempVerifyOTP = (inputOTP, actionCall) => {
    const sentOTP = "123456";
    const intOTP = inputOTP.join("");
    if (sentOTP === intOTP){
      setConfirmationResult(true);
      if(actionCall){
        actionCall();
      }
    };
  };


  //handle OTP request

  const handleOTPRequest = (actionCall) => {
    if (!phoneNumbererror &&
      otpAddress.phoneNumber !== "" &&
      otpAddress.phoneNumber.length === 10 &&
      !confirmationResult
    ){
      setOtpRequest(true);
      setIsOtpSent(true);
      if (otpRequest && isOtpSent && !confirmationResult) {
        tempVerifyOTP(inputOTP, actionCall);
      }
    } else {
      setOTPRequestError(true);
    }
  };



  return (
    <OTPContainer>
      <InputContainer>

        <HeadLine>We are Ready to Serve You!</HeadLine>

        <MobileNumberContainer>

          <CountryCode value={otpAddress.countryCode}
            onChange={(e)=> updateOtpAddress({countryCode:e.target.value})}>
            {countryDialCodes.map((country) => (
              <option key={country.code} value={country.dial_code}>{country.dial_code}</option>
            ))}
          </CountryCode>

          <MobileNumberInputField type="tel" maxLength={10}
            onChange={(e)=> handlePhoneNumber(e.target.value, {otpAddress})}
            placeholder="mobile number"/>

        </MobileNumberContainer>
        <p>use mobile no: 9452730213</p>

        {phoneNumbererror && otpRequestError && <InputError>incorrect mobile number</InputError>}

      </InputContainer>

      <Label>Verify Mobile Number</Label>

      {otpRequest && <><OTPInputContainer>{mapOTPFields(inputOTP)}</OTPInputContainer> <p>use otp: 123456</p></>}

      {isOtpSent && confirmationResult === 'false' && otpRequestError === 'false' && <InputError>Wrong OTP</InputError>}

      <RequestOTPButton onClick={()=>handleOTPRequest(actionCall)}>
        {otpRequest ? "Verify OTP" : "Request OTP"}
      </RequestOTPButton>

    </OTPContainer>
  );
};

export default MobileOTP;
