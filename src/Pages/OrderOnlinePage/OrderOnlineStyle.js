import styled from "styled-components";

export const OrderOnlinePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin-top: 60px;
    margin bottom: 40px;
    background: #fefbdc;
`;

export const CartContainer = styled.div`
    position: relative;
    display: flex;
    width: 40px;
    height: 40px;
    align-items: center;
    justify-content: center;
    margin-top: 40px;
`;

export const CartValue = styled.p`
    position: absolute;
    width: 20px;
    height: 20px;
    text-align: center;
    verticle-align: middle;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    color: #edefe8;
    background: #475e17;
    border-radius: 50%;
    top: -10px;
    right: -10px;
`;


export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 700px;
    justify-content: center;
    align-items: center;
    margin: 60px 0px;
    gap: 20px;

    & > :last-child{
        display: none;
    }
`;

export const ProductDivider = styled.div`
    width: 100%;
    height: 1px;
    background: linear-gradient(0.25turn, #fefbdc, #645e21, 80%,#fefbdc);
    border-radius: 4px;
`;