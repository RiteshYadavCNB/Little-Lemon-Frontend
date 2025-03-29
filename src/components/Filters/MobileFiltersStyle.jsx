import styled from "styled-components";

// Mobile Filter Pop-up
export const MobileFilterPopupContainer = styled.div`
    position: fixed;
    bottom: 0px;
    display: ${(prop) => prop.display === true ? 'flex' : 'none'};
    flex-direction: column;
    width: 100vw;
    height: 200px;
    padding-bottom: 20px;
    background: #fefbdc;
    box-shadow: 0px -2px 20px 12px #4b471940;
    border-radius: 16px 16px 0px 0px;
    z-index: 10;

    p{
        font-size: 18px;
        font-weight: 500;
        padding: 18px;
        border-bottom: 1px solid #4b471930;
    }
`;

export const FilterPopupOptions = styled.div`
    display: flex;
    flex-direction: column;
    width: 120px;
    align-items: center;

    div{
        display: flex;
        width: 100%;
        height: 40px;
        padding: 16px;
        font-size: 14px;
        font-weight: 400;
        align-items: center;
    }

    div:focus {
        font-weight: 500;
        color: #645e21;
        background: #645e2120;
    }
`;

export const FilterSelections = styled.div`
    display: flex;
    flex-direction: column;
    
`;