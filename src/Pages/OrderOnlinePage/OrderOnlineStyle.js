import styled from "styled-components";

export const OrderOnlinePage = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
    padding-bottom: 60px;
    background: #fefbdc;
`;

export const MainBody = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 120px);
    justify-content: center;
    margin-top: 60px;
    gap: 60px;
`;

export const ProductFilters = styled.div`
    display: flex;
    flex-direction: column;
    width: 280px;
    gap: 16px;
    padding: 0px 8px;

    .filter{
        font-size: 18px;
        font-weight: 500;
        padding: 12px 0px;
        border-bottom: 1px solid #4b471930;
    }

    p{
        font-size: 16px;
        font-weight: 500;
        margin: 4px 0px;
    }

    .general-div{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 8px 0px;
    }

    .search-box{
        display: flex;
        width: 100%;
        height: 40px;
        padding: 0px 16px;
        border-radius: 30px;
        border: 2px solid #4b471930;
    }

    .search-box:focus {
        outline: 1px solid #4b471960;
    }

    ul{
        list-style: none;
    }

    li{
        display: flex;
        padding: 4px 0px;
        align-items: center;
    }

    input{
        width: 16px;
        height: 16px;
    }

    span{
        padding: 0px 12px;
    }

    @media(max-width: 1024px){
        display: none;
    }
`;

export const ProductView = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 600px;
    height: calc(100vh - 120px);
    align-items: flex-start;
    overflow: scroll;
    scrollbar-width: none;

    @media (max-width: 1024px){
        width: 90%;
        max-width: 800px;
    }

    @media (min-width: 1400px){
        width: 800px;
    }
`;

export const PageTitle = styled.div`
    position: sticky;
    width: 100%;
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 20px;
    background: #fefbdc;
    z-index: 10;
`;

export const ProductSkeletonContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
`;

export const ProductContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: max-content;
    align-items: flex-start;
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