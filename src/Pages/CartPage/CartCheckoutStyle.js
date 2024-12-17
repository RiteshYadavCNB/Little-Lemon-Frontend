import styled from "styled-components";

export const CartPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    align-items: center;
    margin-top: 60px;
    background: #fefbdc;
    padding: 0px 130px;

    @media(max-width: 768px){
        padding: 0px;
    }
`;

export const CheckoutProgressDiv = styled.div`
    display: flex;
    width: 40%;
    justify-content: center;
    align-items: center;
    margin: 40px 0px;
    gap: 16px;

    @media(max-width: 1080px){
        width: 80%;
    }

    @media(max-width: 768px){
        width: 80%;
        gap: 12px;
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
    radius: 8px;
    background: #596e2e;
`;

export const CheckoutContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0px 130px;
    align-items: center;
    justify-content: center;

    @media(max-width: 1080px){
        flex-direction: column;
        width: 800px;
        margin: 40px 16px;
    }

    @media(max-width: 600px){
        width: 100%;
        margin: 0;
    }
`;

export const CartItemsContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
    gap: 40px;
    margin-bottom: 40px;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px){
        width: 100%;
    }
`;

export const CartOfferContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
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

    p{
        font-size: 14px;
        font-weight: 400;
    }

    @media(max-width: 768px){
        width: 90%;
    }
`;

export const CartitemsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 800px;
    align-items: center;
    gap: 20px;

    @media(max-width: 768px){
        width: 90%;
    }

`;

export const ProductDivider = styled.div`
    width: 100%;
    height: 1px;
    background: linear-gradient(0.25turn, #fefbdc, #645e21, 80%,#fefbdc);
    border-radius: 4px;
`;

export const BillingContainer =styled.div`
    display: flex;
    flex-direction: column;
    width: max-content;
    gap: 20px;
    align-items: center;
    justify-content: center;

    div{
        display: flex;
        widht: 100%;
        align-items: center;
        justify-content: center;
        gap: 16px;
    }

    p{
        font-size: 14px;
        font-weight: 400;
    }

    @media(max-width: 768px){
        width: 90%;
    }
`;

export const CouponDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    padding: 16px;
    border: 2px solid #7e762980;
    border-radius: 12px;

    h2{
        font-size: 16px;
        font-weight: 600;
        color: #2b380e;
    }

    p{
        font-size: 14px;
        font-weight: 600;
    }
`;

