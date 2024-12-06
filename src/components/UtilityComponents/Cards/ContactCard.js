import styled from "styled-components";

const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    background: white;
    border-radius: 16px;
`;

const Title = styled.p`
    font-family: "Monsieur La Doulaise", cursive;
    font-size: 20px;
    font-weight: 700;
    color: #475E17;
`;

const Text = styled.p`
    font-size: 16px;
    color: grey;
    font-weight: 500;
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
`;

const Status = styled.p`
    font-size: 18px;
    font-weight: 700;
    color: #25a174;
`;

const ActionButton = styled.button`
    display: flex;
    flex: 1;
    height: 40px;
    border: none;
    font-size: 18px;
    font-weight: 700;
    align-items: center;
    justify-content: center;
`;


export const ContactCard = () => {
    return (
        <ContactContainer>
            <Title>Little Lemon Restaurant</Title>
            <TextContainer>
                <Text>Mediterranean Cuisine</Text>
                <Text>4.1⭐</Text>
            </TextContainer>
            <TextContainer>
                <Text><b>Location:</b></Text>
                <Text>CyberHub IT Complex Ground Floor Gate No-8, Gurugram.</Text>
            </TextContainer>
            <Status>Open now</Status>
            <TextContainer>
                <ActionButton>Call</ActionButton>
                <ActionButton>Direction</ActionButton>
            </TextContainer>
        </ContactContainer>
    )
};