import React from 'react';
import styled from 'styled-components';

//styled component

    //style

    const CardContainer = styled.div`
        display: flex;
        flex-direction: cloumn;
        width: 320px;
        height: 420px;
        padding: 16px;
        gap: 20px;
        font-size: 14px;
        box-sizing: border-box;
        background-color: #ffffff;
        border-radius: 16px;
    `;

    const CardImage = styled.img`
        width: auto;
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
    `;

    const CardInfo = styled.p`
        font-size: 13px;
        font-weight: 500;
        margin-right: 6px;
    `;

    const CardDescription = styled.div`
        dispplay: flex;
        width: 100%;
        padding: 0px 6px;
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
                {rating && <CardInfo>Rated: {rating}</CardInfo>}
                {type && <CardInfo>Meal Type: {type}</CardInfo>}
                {serveDays && <CardInfo>Served On: {serveDays}</CardInfo>}
            </CardContent>

            <CardDescription>
                {description && <Description>{description}</Description>}
            </CardDescription>
        </CardContainer>
    );
};

export default Card;