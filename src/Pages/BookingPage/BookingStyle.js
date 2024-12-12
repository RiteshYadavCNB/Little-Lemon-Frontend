import styled from "styled-components";

export const BookingPage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    padding-bottom: 60px;
    background: #fefbdc;
`;

export const BookingHead = styled.div`
    position: relative;
    display: flex;
    width: 90%;
    max-width: 1200px;
    height: 300px;
    align-items: center;
    overflow: hidden;
    border-radius: 24px;
    

    @media(max-width: 768px){
        width: 90%;
    }
`;

export const BookingBgImageStyle = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const BookingHeadingContainer = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    Z-index: 1;
`;

export const BookingHeading = styled.h1`
    font-size: 60px;
    font-weight: 700;
    color: white;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
        font-size: 40px;
    }
`;

export const BookingHeadingTag = styled.h4`
    font-size: 32px;
    font-weight: 600;
    color: white;
    text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.8);

    @media (max-width: 768px) {
        font-size: 24px;
    }
`;

export const BookingSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    position: relative;
`;

export const BookingSection = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 700px;
    justify-content: center;
    gap: 20px;
    margin: 60px 0px 40px 0px;
    padding: 30px 40px;
    background-color: white;
    border-radius: 8px;
    box-sizing: border-box;
    box-shadow: 0px 0px 6px 2px hsl(0, 0%, 90%);


    @media (max-width: 768px){
        flex-direction: column;
        width: max-content;
        padding: 20px;
        margin: 40px 0px 60px 0px;
    }

    @media (max-width: 360px){
        flex-direction: column;
        width: max-content;
        padding: 20px;
        margin: 40px 0px 60px 0px;
    }
`;

export const SelectDate = styled.div`
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 0;
    gap: 10px;
    box-sizing: border-box;
`;

export const MuiDatePickerStyles = {
    "& .MuiInputBase-root":{fontSize: "14px", height: "54px"},
    "& .MuiFormLabel-root":{fontSize: "14px", color: "rgb(139, 139, 139)"},
    "& .MuiOutlinedInput-root": {height: "54px"},
    "& .MuiSvgIcon-root": {color: "lightgrey"},
}