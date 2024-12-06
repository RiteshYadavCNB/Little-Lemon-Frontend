// @ts-nocheck
import Card from "../UtilityComponents/Cards/Card";
import styled from "styled-components";
import dishList from "../../data/dishList.json";

export default function Catalogue({cardWidth}){

    const CardDiv = styled.div`
        display: flex;
    `;


    return (
        <>
            {dishList.map((meal) => (
                <CardDiv ref={cardWidth} key={meal.mealName}>
                    <Card
                        title={meal.mealName}
                        image={meal.mealUrl}
                        rating={meal.rating}
                        serveDays={meal.serveDays}
                        type={meal.mealType}
                        description={meal.mealDescription}
                    />
                </CardDiv>
            ))}
        </>
    );


};

