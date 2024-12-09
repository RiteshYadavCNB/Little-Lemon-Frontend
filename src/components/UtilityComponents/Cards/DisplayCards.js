import styled from "styled-components";

const CardContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 210px;
    height: 280px;
    padding: 20px;
    gap: 20px;
    background: #fef9cb;
    border-radius: 24px;
    box-sizing: border-box;

    @media(max-width: 768px) {
        width: ${(props) => props.last ? '356px' : '170px' };
        height: 220px;
        padding: 16px;
        gap: 12px;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const CardTitle = styled.p`
    font-size: 24px;
    line-height: 24px;
    font-weight: 700;
    color: #4b4719;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

const CardSubHead = styled.p`
    font-size: 18px;
    line-height: 18px;
    font-weight: 500;
    color: #7e7629;;

    @media (max-width: 768px) {
        font-size: 16px;
        line-height: 16px;
    }
`;

const Tag = styled.div`
    display: flex;
    height: 28px;
    border-radius: 24px;
    padding-left: 10px;
    margin: 10px 0px;
    align-items: center;
    color: #7e7629;
    background: linear-gradient(to right, #fdf497, #fef9cb);

    p{
        font-size: 14px;
        font-weight: 700;
    }

    @media (max-width: 768px){
        p{
            font-size: 13px;
        }
    }
`;

const Icon = styled.img`
    position: absolute;
    width: 40px;
    height: 40px;
    left: 20px;
    bottom: 20px;
    background: #fdf497;
    border-radius: 100%;
    transform: rotate(-20deg);
`;

const CardImage = styled.img`
    position: absolute;
    width: 200px;
    height: 200px;
    right: -70px;
    bottom: -20px;
    object-fit: cover;
    filter: drop-shadow( 8px 8px 6px rgba(0, 0, 0, 0.35));

    @media (max-width: 768px){
        width: ${(props) => props.customWidth ? props.customWidth : '130px'};
        height: ${(props) => props.customHeight ? props.customHeight : '130px'};
        right: ${(props) => props.customRight ? props.customRight : '-20px'};
    }
`;



export const DisplayCard = ({title, subHead, value, imgSource, last, customStyle = {}}) => {

    const { width, height, right} = customStyle;

    return(
        <CardContainer last={last}>
            <Container>
                <CardTitle>{title}</CardTitle>
                <CardSubHead>{subHead}</CardSubHead>
                <Tag><p>UPTO {value} OFF</p></Tag>
            </Container>
            <Icon src="./arrow.png" alt="navicon"/>
            <CardImage src={imgSource} customWidth={width} customHeight={height} customRight={right} />
        </CardContainer>
    );
}