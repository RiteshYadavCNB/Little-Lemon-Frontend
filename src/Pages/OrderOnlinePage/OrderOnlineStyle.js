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

    @media(max-width: 720px){
        position: relative;
    }
`;

export const MainBody = styled.div`
    display: flex;
    width: 100%;
    height: calc(100vh - 120px);
    justify-content: center;
    margin-top: 60px;
    gap: 60px;

    @media(max-width: 720px){
        margin-top: 74px;
    }
`;

// Filter Component Styles ---Desktop---
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

// Filter Components ---Mobile---
export const MobileFilterContainer = styled.div`
    position: absolute;
    top: 0px;
    display: flex;
    width: 100vw;
    align-items: center;
    padding: 16px 16px;
    gap: 16px;
    background: #fefbdc;
    font-size: 18px;
    font-weight: 500;
`;

export const MobileFilterSearch = styled.div`
    display: none;
    width: 100%;
    height: max-content;

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

    @media(max-width: 720px){
        display: flex;
    }
`;

export const MobileFilterButton = styled.div`
    display: flex;
    width: max-content;
    height: 40px;
    align-items: center;
    gap: 8px;
    padding: 8px 16px;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 1px;
    color: #fefbdc;
    background: #4b4719;
    border-radius: 30px;
    border: 2px solid #4b471930;
`;

// Mobile Filter Pop-up
export const MobileFilterPopup = styled.div`
    position: fixed;
    bottom: 0px;
    display: ${(prop) => prop.display === true ? 'flex' : 'none'};
    flex-direction: column;
    width: 100vw;
    background: #fefbdc;
    box-shadow: 0px -2px 20px 12px #4b471940;
    border-radius: 16px 16px 0px 0px;
    z-index: 10;
`;

export const MobileFilterPopupHeader = styled.div`
    display: flex;
    width: 100%;
    padding: 16px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #4b471930;

    p{
        font-size: 18px;
        font-weight: 500;
    }
`;

export const MobileFilterMain = styled.div`
    display: flex;
    width: 100%;
`;

export const FilterPopupOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    align-items: center;
    border-right: 1px solid #4b471930;
    padding-bottom: 20px;

    ul{
        display: flex;
        width: 100%;
        flex-direction: column;
        list-style: none;
    }

    li{
        display: flex;
        width: 100%;
        height: 44px;
        font-size: 14px;
        font-weight: 400;
        align-items: center;
        padding-left: 16px;
    }

    li:focus {
        outline: none;
        font-weight: 500;
        color: #645e21;
        background: #645e2120;
    }
`;

export const FilterSelections = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 20px 16px;

    .general-div{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 8px 0px;
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
`;

// Product Components
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