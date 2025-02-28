import styled from "styled-components";


const ButtonDiv = styled.button`
    display: flex;
    border: none;
    width: 30px;
    height: 30px;
    background: #fcf075;
    padding: 4px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    cursor: pointer;

    &:hover{
        box-shadow: ${(props) => props.shadow ? props.shadow : 'none'};
    }
`;

const ButtonImg = styled.img`
    width: 100%;
    height: 100%;
    transform: rotate(${(props) => (props.degrees === "left" ? "180deg" : "0deg")});
`;


const ScrollButton = ({alt, degrees, shadow}) => {
    return (
        <>
            <ButtonDiv shadow={shadow}>
                <ButtonImg src="./next.png" alt={alt} degrees={degrees}/>
            </ButtonDiv>
        </>
    );
};

export default ScrollButton;