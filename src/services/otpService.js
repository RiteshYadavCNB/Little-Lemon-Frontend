import React from "react";
import { useState } from "react";
import styled from "styled-components";
import countryDialCodes from "../data/countryDialCodes.json";
//import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
//import { auth } from "../firebaseConfig";

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

const MobileNumberContainer = styled.div`
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

const MobileOTP = ({ label, placeholder, actions }) => {
  const [otpRequest, setOtpRequest] = useState(false);
  const [otpAddress, setOTPAddress] = useState({countryCode: '+91', phoneNumber:''});
  const [phoneNumbererror, setPhoneNumberError] = useState(false);
  const [otpRequestError, setOTPRequestError] = useState(false);
  const [confirmationResult, setConfirmationResult] = useState(false);
  const [inputOTP, setInputOTP] = useState(["", "", "", "", "", ""]);
  const [isOtpSent, setIsOtpSent] = useState(false);


  const handleOTPInput = (e, key) => {
    //let updateOtpValue = inputOTP;
    //updateOtpValue[key] = e;
    const updatedOTP = [...inputOTP];
    updatedOTP[key] = e;
    setInputOTP(updatedOTP);

    if (e !== "" && key < 5){
      document.getElementById(`otp-input-${key+1}`).focus();
    }
  };

  //mapping OTP Fields to display

  const mapOTPFields = (inputOTP) => {
    if (inputOTP.length !== 6) return false;
    return inputOTP.map((item, index) => {
      return (
        <OTPInputField
          key={index}
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


  //firebase SMS OTP authentication


  // const setupRecaptcha = () => {
  //   window.recaptchaVerifier = new RecaptchaVerifier(
  //     "recaptcha-container",
  //     {
  //       size: 'invisible',
  //       callback: (response) => {
  //         console.log("reCAPTCHA solved!");
  //       },
  //     },
  //     auth
  //   );
  // };


  //send firebase OTP
/*
  const sendOTP = () => {
    const phoneNumber = "+919452730213";
    console.log(phoneNumber);

    // setupRecaptcha();
    auth.settings.appVerificationDisabledForTesting = true;
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        const verificationCode = "123456";
        setIsOtpSent(true);
        return confirmationResult.confirm(verificationCode);
        //setConfirmationResult(confirmationResult);
        //console.log("OTP sent successfully!")
      })
      .catch((error) => {
        console.log("OTP not sent: ", error);
      });
    };
*/

  //verify firebase OTP
/*
  const verifyOTP = () => {
    const otp = inputOTP.join("");

    if (!otp || !confirmationResult){
      alert('Enter OTP');
      return;
    }

    confirmationResult
      .confirm(otp)
      .then(() => {
        console.log("OTP verified Successfully");
        alert("Phone number verified");
      })
      .catch((error) => {
        console.log("Error verifying OTP: ", error);
        alert("Invalid OTP!");
      });
  };
*/

  // Temp OTP Verification

  const tempVerifyOTP = () => {
    const sentOTP = "123456";
    const intOTP = inputOTP.join();
    if (sentOTP === intOTP){
      setConfirmationResult(true);
    };
  };


  //handle OTP request

  const handleOTPRequest = () => {
    if ((phoneNumbererror === false) &&
      (otpAddress.phoneNumber !== "") &&
      (otpAddress.phoneNumber.length === 10) &&
      (otpRequest === false)
    ){
      setOtpRequest(true);
      setIsOtpSent(true);
      //sendOTP();
    } if ((otpRequest === true) && (isOtpSent === true)) {
      tempVerifyOTP();
    } else {
      setOTPRequestError(true);
    }
  };



  return (
    <OTPContainer>
      <InputContainer>

        <Label>{label ? label : "Enter OTP Address"}</Label>

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

        {phoneNumbererror && <InputError>incorrect mobile number</InputError>}
        {otpRequestError && <InputError>input mobile number</InputError>}

      </InputContainer>

      <div>we are into it together 😁</div>

      <OTPInputContainer>
        {otpRequest && mapOTPFields(inputOTP)}
      </OTPInputContainer>

      <div id="recaptcha-container"></div>

      <RequestOTPButton onClick={handleOTPRequest}>
        {otpRequest ? "Verify OTP" : "Request OTP"}
      </RequestOTPButton>

    </OTPContainer>
  );
};

export default MobileOTP;
