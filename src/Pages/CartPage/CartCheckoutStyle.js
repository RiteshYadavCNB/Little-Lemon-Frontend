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
    margin: 16px;
    @media(max-width: 768px){
        width: 90%;
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

export const CartItemContainer = styled.div`
    display: flex;
    width: 100%;
    margin: 0px 130px;
    align-items: center;
    justify-content: center;

    @media(max-width: 768px){
        flex-direction: column;
        margin: 0px;
    }
`;

export const CartitemsDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 60%;
    align-items: center;
`;

export const BillingContainer =styled.div`
    display: flex;
    flex-direction: column;
    width: 40%;
    align-items: center;
`;