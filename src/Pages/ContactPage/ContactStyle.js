import styled from "styled-components";

export const ContactMain = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    margin-top: 60px;
    align-items: center;
    justify-content: center;
    background: #fefbdc;
`;

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 800px;
    padding: 40px 0px;
    gap: 20px;

    @media(max-width: 720px){
        width: 100%;
        padding: 40px 16px;
    }
`;

export const ProfileImg = styled.img`
    width: 300px;
    height: 300px;
    border-radius: 50%;

    @media(max-width: 720px){
        width: 200px;
        height: 200px;
    }
`;

export const ProfileDescription = styled.div`
    display: flex;
    flex-direction: column;
    width: 600px;
    align-items:center;
    justify-content: center;
    gap: 16px;

    .profile-name {
        font-family: roboto;
        font-size: 24px;
        font-weight: 500;
        color: #191808;
    }

    .profile-description{
        display: flex;
        flex-direction: column;
        gap: 4px;
    }

    p{
        text-align: center;
    }

    div{
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 16px;
    }

    @media(max-width: 720px){
        width: 100%;
        margin: 0px 16px;
    }
`