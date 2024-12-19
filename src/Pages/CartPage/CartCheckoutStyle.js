import styled from "styled-components";

export const CartPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100%;
    align-items: center;
    margin-top: 60px;
    background: #fefbdc;

`;

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

export const CheckoutContainer = styled.div`
    display: flex;
    width: max-content;
    gap: 40px;
    padding: 0 130px;

    @media(max-width: 1080px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        padding: 0 16px;
    }
`;

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
    max-width: 400px;
    border: 1px solid #7e762940;
    height: 40px;
    padding: 0px 16px;
    font-size: 16px;
    font-weight: 600;
    background: #ffffff80;
    border-radius: 8px;
    color: #7e7629;
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

    div{
        display: flex;
        width: 100%;
        justify-content: space-between;
        gap: 16px;
    }

    h2{
        font-size: 18px;
        font-weight: 600;
    }

    div > span:first-child {
        align-self: flex-start;
    }

    div > span:last-child {
        align-self: flex-end;
    }

    > div:last-child > span{
        font-weight: 600;
        align-self: center;
    }

    @media(max-width: 1080px){
        width: 100%;
        max-width: 800px;
    }
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