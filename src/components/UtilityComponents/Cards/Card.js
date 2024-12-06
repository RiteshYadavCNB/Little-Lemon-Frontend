import React from 'react';
import styled from 'styled-components';



    const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 320px;
        padding: 16px;
        gap: 16px;
        font-size: 14px;
        box-sizing: border-box;
        background-color: #ffffff;
        border-radius: 16px;
    `;

    const CardImage = styled.img`
        width: 100%;
        height: 210px;
        border-radius: 12px;
    `;

    const CardTitle = styled.h2`
        font-size: 18px;
        font-weight: 600;
    `;

    const CardContent = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 8px 12px;
        background-color: #edd04a;
        gap: 8px;
        border-radius: 8px;
        box-shadow: 0px 4px #493e07;
    `;

    const CardSubContent = styled.div`
        display: flex;
        flex-direction: ${(props) => (props.direction ? props.direction : "column")};
        justify-content: space-between;
        gap: 4px;
    `;

    const CardInfo = styled.p`
        width: max-content;
        font-size: 13px;
        font-weight: 400;
    `;

    const Heading = styled.h4`
        display: inline;
        font-size:13px;
        font-weight:500;
    `;

    const CardDescription = styled.div`
        dispplay: flex;
        width: 100%;
        box-sizing: border-box;
    `;

    const Description = styled.p`
        text-align: center;
        font-size: 13px;
        font-weight: 400;
    `;



const Card = ({image, title, rating, type, serveDays, description}) => {

    return(
        <CardContainer>
            {image && <CardImage src={image} alt={title}/>}
            <CardContent>
                {title && <CardTitle>{title}</CardTitle>}
                <CardSubContent direction="row">
                    {rating && <CardInfo><Heading>Ratings: </Heading>{rating}</CardInfo>}
                    {type && <CardInfo><Heading>Meal type: </Heading>{type}</CardInfo>}
                </CardSubContent>
                {serveDays && <CardInfo><Heading>Served On: </Heading>{serveDays}</CardInfo>}
            </CardContent>

            <CardDescription>
                {description && <Description>{description}</Description>}
            </CardDescription>
        </CardContainer>
    );
};

export default Card;