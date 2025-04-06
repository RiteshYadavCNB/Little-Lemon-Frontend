import styled from "styled-components";
import { FormControlLabel, styled as muiStyled } from "@mui/material";

// Page main Container

export const CartPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: calc(100vh - 100px);
    align-items: center;
    margin-top: 60px;
    background: #fefbdc;
    padding-bottom: 40px;

`;

// Progress Container

export const CheckoutProgressDiv = styled.div`
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    margin: 40px 0px;
    gap: 16px;

    @media(max-width: 1080px){
        width: 60%;
    }

    @media(max-width: 768px){
        width: 80%;
    }
`;

export const CheckoutProgressStatus = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CheckoutProgressText = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #596e2e;

    @media(max-width: 768px){
        font-size: 12px;
        font-weight: 500;
    }
`;

export const ProgressBar = styled.div`
    display: flex;
    flex: 1;
    width: 100%;
    height: 2px;
    border-radius: 8px;
    background: #596e2e;
`;

// All Dynamics Component Container

export const CheckoutContainer = styled.div`
    display: flex;
    width: 100%;
    gap: 40px;
    padding: 40px 40px;
    align-items: center;
    justify-content: center;

    @media(max-width: 1080px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 40px 16px;
    }
`;

// Cart Items Container

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
    gap: 40px;
    align-items: flex-start;
    justify-content: flex-start;

    @media(max-width: 1080px){
        width: 100%;
        align-items: center;
        margin: 40px 0px;
    }

    @media(max-width: 768px){
        margin: 0px;
    }
`;

export const CartOfferContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 600px;
    max-width: 800px;
    align-items: flex-start;
    padding: 20px;
    background: linear-gradient(to right, #fdf49730, #fefbdc);
    border-radius: 12px;
    box-shadow: 0px 1px 8px 0px #7e762920;
    gap: 16px;

    font-size: 16px;
    font-weight: 600;
    color: #2b380e;

    div{
        display: flex;
        widht: 100%;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    h2{
        font-size: 18px;
        font-weight: 600;
    }

    p{
        font-size: 14px;
        font-weight: 400;
    }

    @media(max-width: 1080px){
        width: 100%;
        min-width: 0;
        max-width: 800px;
    }

`;

export const CartitemsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 800px;
    align-items: center;
    gap: 20px;

    & >:last-child{
        display: none;
    }

    @media(max-width: 1080px){
        width: 100%;
        align-items: center;
        justify-content: center;
    }
`;

export const ProductDivider = styled.div`
    width: 100%;
    height: 1px;
    background: linear-gradient(0.25turn, #fefbdc, #645e21, 80%,#fefbdc);
    border-radius: 4px;
`;

export const Divider = styled.div`
    width: 100%;
    height: 1px;
    background: #645e2160;
    border-radius: 4px;
`;

export const EmptyCartContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 400px;
    align-items: center;
    gap: 40px;

    img{
        width: 150px;
    }

    p{
        font-size: 16px;
        font-weight: 600;
        color: #2b380e;
    }
`;

export const LinkStyle = {
    width: "200px",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "16px",
    fontWeight: "600",
    color: "#ffffff",
    padding: "12px 16px",
    background: "#2b380e",
    borderRadius: "8px",
};

// Billing Container

export const BillingContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 1080px){
        width: 100%;
        max-width: none;
        margin-bottom: 40px;
    }
`;

export const CouponDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    align-items: flex-start;
    padding: 20px;
    border: 2px solid #7e762980;
    border-radius: 12px;
    gap: 16px;

    font-size: 16px;
    font-weight: 600;
    color: #2b380e;

    div{
        display: flex;
        width: 100%;
        gap: 16px;
    }

    & div:last-child{
        display: flex;
        justify-content: flex-end;
        width: 100%;
        gap: 16px;
    }

    h2{
        font-size: 18px;
        font-weight: 600;
    }

    @media(max-width: 1080px){
        width: 100%;
        max-width: 800px;
    }
`;

export const CouponCodeInput = styled.input`
    width: 100%;
    border: 1px solid #7e762940;
    height: 40px;
    padding: 0px 16px;
    font-size: 14px;
    font-weight: 500;
    background: #ffffff80;
    border-radius: 8px;
    color: #7e7629;

    input::placeholder {
        font-weight: 400;
    }

    input:focus{
        outline: 1px solid #7e7629;
    }
`;

export const CouponCodeButton = styled.button`
    width: 200px;
    height: 40px;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #756300;
    background: none;
    text-align: center;
    border: 2px solid #756300;

    &:hover{
        color: #ffffff;
        background: #756300;
        cursor: pointer;
    }
`;

export const BillBreakUp = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 600px;
    align-items: flex-start;
    padding: 20px;
    border: 2px solid #7e762980;
    border-radius: 12px;
    gap: 16px;

    font-size: 16px;
    font-weight: 400;
    color: #2b380e;

    dl{
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 16px;
    }

    h2{
        font-size: 18px;
        font-weight: 600;
    }

    dl > first-child {
        align-self: flex-start;
    }

    dl > last-child {
        align-self: flex-end;
    }

    > dl:last-child > dt{
        font-weight: 600;
        align-self: center;
    }

    @media(max-width: 1080px){
        width: 100%;
        max-width: 800px;
    }
`;

export const DeliveryFee = styled.dd`
    text-decoration: ${(prop) => (prop.$decoration === 0) ? 'line-through' : 'none'};
    color: ${(prop) => prop.color === 0 ? '#2b380e96': '#2b380e'};
`;

export const CheckoutButton = styled.button`
    display: flex;
    width: 320px;
    height: 48px;
    align-items: center;
    justify-content: center;
    background: #756300;
    border: none;
    border-radius: 8px;
    font-size: 16px;
    font-weight: 600;
    color: #ffffff;
    cursor: pointer;
`;

// Address Component

export const CheckoutAddressContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 1080px){
        width: 100%;
        max-width: none;
        margin-bottom: 40px;
    }
`;

export const ContactField = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    padding: 20px;
    border: 2px solid #7e762980;
    border-radius: 12px;
    gap: 16px;

    div{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 16px;
    }

    label{
        font-size: 16px;
        font-weight: 600;
        color: #2b380e;
    }

    input{
        width: 100%;
        border: 1px solid #7e762940;
        height: 40px;
        padding: 0px 16px;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        background: #ffffff80;
        border-radius: 8px;
        color: #7e7629;
        appearance: none;
    }

    input::placeholder{
        font-size: 14px;
        font-weight: 400;
    }

    input:focus{
        outline: 1px solid #7e7629;
    }

    @media(max-width: 1080px){
        width: 100%;
        max-width: 800px;
    }

`;

export const Address = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    padding: 20px;
    border: 2px solid #7e762980;
    border-radius: 12px;
    gap: 30px;

    @media(max-width: 1080px){
        width: 100%;
        max-width: 800px;
    }
`;

export const AddressFields = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 16px;

    label{
        font-size: 16px;
        font-weight: 600;
        color: #2b380e;
    }

    input{
        width: 100%;
        border: 1px solid #7e762940;
        height: 40px;
        padding: 0px 16px;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        background: #ffffff80;
        border-radius: 8px;
        color: #7e7629;
        appearance: none;
    }

    input::placeholder{
        font-size: 14px;
        font-weight: 400;
    }

    input:focus{
        outline: 1px solid #7e7629;
    }
`;

export const StyledFormControlLabel = muiStyled(FormControlLabel)(({ theme }) => ({
    width: 'max-content',
    height: '30px',
    padding: '4px 12px 4px 0px',
    borderRadius: '30px',
    backgroundColor: '#fefbdc',
    border: '1px solid #4b4719',
    cursor: 'pointer',
    '& .MuiFormControlLabel-label': {
    fontSize: '14px',
    fontWeight: 500,
    color: '#4b4719',
  },
}));

// Payment Component

export const PaymentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 20px;
    align-items: center;
    justify-content: flex-start;

    @media(max-width: 1080px){
        width: 100%;
        max-width: none;
        margin-bottom: 40px;
    }
`;

export const PaymentMode = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    padding: 10px 20px;
    gap: 10px;
    border: 2px solid #7e762980;
    border-radius: 12px;
    overflow: hidden;

    @media(max-width: 1080px){
        width: 100%;
        max-width: 800px;
    }
`;


export const PaymentModeDescription = styled.div`
    display: flex;
    width: 100%;
    padding: 20px;

    input{
        width: 100%;
        border: 1px solid #7e762940;
        height: 40px;
        padding: 0px 16px;
        font-size: 16px;
        font-weight: 600;
        line-height: 16px;
        background: #ffffff80;
        border-radius: 8px;
        color: #7e7629;
        appearance: none;
    }

    input::placeholder{
        font-size: 14px;
        font-weight: 400;
    }

    input:focus{
        outline: 1px solid #7e7629;
    }
`;


// Confirmation Component

export const ConfirmationContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    gap: 30px;
    margin-bottom: 10px;
    align-items: center;
    justify-content: center;

    @media(max-width: 1080px){
        width: 100%;
        max-width: 800px;
        margin-bottom: 40px;
    }
`;

export const OrderStatus = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    justify-content: center;
    align-items: center;

    p{
        font-Size: 18px;
        font-weight: 600;
    }

    img{
        width: 80px;
        height: 80px;
    }

    div{
        display: flex;
        gap: 8px;
        align-items: center;
    }

    .preparation{
        font-size: 13px;
        font-weight: 600;
        letter-spacing: 0.25px;
        padding: 8px 12px;
        text-align: center;
        color: #ffffff;
        background-color: #756300;
        border-radius: 6px;
    }

    .refresh{
        width: max-content;
        padding: 8px 8px;
        color: #ffffff;
        background-color: #756300;
        border-radius: 6px;
    }
`;

export const DeliveryPartner = styled.div`
    display: flex;
    width: 100%;
    border: 1px solid #7e762980;
    border-radius: 12px;
    padding: 20px;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #4b4719;
    gap: 8px;

    div{
        display: flex;
        width: 40px;
        height: 40px;
        align-items: center;
        justify-content: center;
        background: #7e762980;
        border-radius: 50%;
        overflow: hidden;
    }

    span:last-child{
        font-weight: 500;
    }
`;