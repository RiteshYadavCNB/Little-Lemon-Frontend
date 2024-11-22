import React from 'react';
import styled from 'styled-components';

//styled component

    //style

    const CardContainer = styled.div`
        display: flex;
        flex-direction: column;
        width: 320px;
        height: 420px;
        padding: 16px;
        gap: 4px;
        font-size: 14px;
        box-sizing: border-box;
        background-color: #ffffff;
        border-radius: 16px;
    `;

    const CardImage = styled.img`
        width: 100%;
        height: 210px;
        border-radius: 4px;
        margin-bottom: 10px;
    `;

    const CardTitle = styled.h2`
        font-size: 18px;
        font-weight: 600;
    `;

    const CardContent = styled.div`
        display: flex;
        flex-direction: ${(props) => (props.direction ? props.direction : "column")};
        justify-content: space-between;
        gap: 4px;
    `;

    const Heading = styled.h4`
        display: inline;
        font-size:13px;
        font-weight:500;
    `;

    const CardInfo = styled.p`
        width: max-content;
        font-size: 13px;
        font-weight: 400;
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


    //already asked chat GPT refer to its reponse and than write the code with full understanding of each and every line what it is doing 

    const Card = ({image, title, rating, type, serveDays, description, actions}) => {

    return(
        <CardContainer>
            {image && <CardImage src={image} alt={title}/>}
            <CardContent>
                {title && <CardTitle>{title}</CardTitle>}
                <CardContent direction="row">
                    {rating && <CardInfo><Heading>Ratings: </Heading>{rating}</CardInfo>}
                    {type && <CardInfo><Heading>Meal type: </Heading>{type}</CardInfo>}
                </CardContent>
                {serveDays && <CardInfo><Heading>Served On: </Heading>{serveDays}</CardInfo>}
            </CardContent>

            <CardDescription>
                {description && <Description>{description}</Description>}
            </CardDescription>
        </CardContainer>
    );
};

export default Card;