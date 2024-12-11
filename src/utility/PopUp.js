import styled from "styled-components";

const PopUpOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    background: white;
    justify-content: center;
    padding: 40px;
    border-radius: 8px;
    width: max-content;
    max-width: fit-content;
    flex-grow: 0;
    flex-shrink: 0;
    flex-wrap: 0;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    position: relative;

    @media (max-width: 480px){
        padding: 20px;
    }
`;

const CloseButton = styled.button`
    width: 60px;
    background: transparent;
    border: none;
    font-size: 14px;
    color: white;
    font-weight: 400;
    letter-spacing: 0.03cm;
    cursor: pointer;
    position: absolute;
    top: -24px;
    right: 10px;
`;


const PopUp = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;
    return (
        <PopUpOverlay>
            <ContentContainer>
                <CloseButton onClick={onClose}>Close</CloseButton>
                {children}
            </ContentContainer>
        </PopUpOverlay>
    );
}

export default PopUp;