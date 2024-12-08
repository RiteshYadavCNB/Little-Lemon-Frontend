import styled from "styled-components";
import CallIcon from "@mui/icons-material/Call";
import NearMeIcon from '@mui/icons-material/NearMe';

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 20px 20px 10px 20px;
    background: white;
    border-radius: 16px;
    border: 2px solid #493e07;
    box-radius: 0px 0px 4px inset rgb(199, 196, 191);
    gap: 8px;
    box-sizing: border-box;

    @media (max-width: 768px){
        width: 358px;
        padding: 12px 20px;
    }
`;

const Title = styled.p`
    font-family: "Monsieur La Doulaise", cursive;
    font-size: 20px;
    font-weight: 700;
    color: #475E17;
`;

const Text = styled.p`
    font-size: 15px;
    color: grey;
    font-weight: 500;

    @media (max-width: 768px){
        font-size: 13px;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: ${(props) => props.align ? props.align : 'center'};
`;

const Status = styled.div`
    display: block;
    width: max-content;
    padding: 6px 10px;
    text-align: center;
    font-size: 14px;
    line-height: 16px;
    font-weight: 600;
    color: #25a174;
    background: #D0F0C0;
    border-radius: 4px;
`;

const Divider = styled.div`
    display: block;
    width: ${(props) => props.width ? props.width : '100%'};
    height: ${(props) => props.height ? props.height : '2px'};
    background: #C7C4BF;
    opacity: 0.3;
    margin: 4px 0px;
`;

const ActionContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    gap: 16px;
    padding: 0px 16px;
    box-sizing: border-box;

    @media (max-width: 768px){
        gap: 8px;
        padding: 0px;
    }
`;

const ActionButton = styled.button`
    display: flex;
    flex: 1;
    height: 40px;
    border: none;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    gap: 4px;
    padding: 8px;
    color: grey;
    background: none;
    box-sizing: border-box;
    cursor: pointer;

    &:hover{
        color: #493e07;
        background: #EDEADE;
        border-radius: 8px;
    }

    @media (max-width: 768px){
        font-size: 14px;
        background: ${(props) => props.bgColor ? props.bgColor : 'none'};
        border-radius: 8px;
    }
`;


export const ContactCard = () => {
    return (
        <ContactContainer>
            <Title>Little Lemon Restaurant</Title>
            <TextContainer>
                <Text>Mediterranean Cuisine</Text>
                <Text>4.1⭐</Text>
                <Status>Open now</Status>
            </TextContainer>
            <TextContainer align='flex-start'>
                <Text><b>Location:</b></Text>
                <Text>CyberHub IT Complex Ground Floor Gate No-8, Gurugram.</Text>
            </TextContainer>
            <Divider />
            <ActionContainer>
                <ActionButton bgColor='#F5F5DC'><CallIcon sx={{width: '20px'}}/>Call</ActionButton>
                <Divider width='2px' height='24px' />
                <ActionButton><NearMeIcon sx={{width: '20px'}}/>Direction</ActionButton>
            </ActionContainer>
        </ContactContainer>
    )
};