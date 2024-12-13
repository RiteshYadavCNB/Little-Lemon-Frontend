import styled from "styled-components";

export const OrderOnlinePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    justify-content: center;
    align-items: center;
    margin-top: 60px;
    margin bottom: 40px;
    background: #fefbdc;
`;


export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 800px;
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