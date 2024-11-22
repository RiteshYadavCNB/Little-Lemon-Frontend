import React from "react";
import Card from "../Cards/Card";

export default function Catalogue({cardWidth}){

    const catalogueList = [
        {
            mealName: "Gyros",
            mealUrl: "./gyros.webp",
            rating: "4.5",
            mealType: "Non-vegeterian",
            serveDays: "Mon, Wed, Fri",
            mealDescription: "Gyro meat is traditionally cooked on a vertical spit, seasoned with fresh oregano and served with fresh vegetables and a tangy yogurt.",
        },

        {
            mealName: "Saganaki Halloumi",
            mealUrl: "./Saganaki-Halloumi.webp",
            rating: "4.2",
            mealType: "Vegeterian",
            serveDays: "Mon, Tue, Wed, Thu, Fri, Sat",
            mealDescription: "Halloumi cheese is fried in clarified butter, brushed in a spiced honey and served with lemon yogurt and fresh tomatoes.",
        },

        {
            mealName: "Ouzo Snapper",
            mealUrl: "./Ouzo-Snapper.webp",
            rating: "4.6",
            mealType: "Non-vegeterian",
            serveDays: "Mon, Wed, Fri",
            mealDescription: "Rub mild whole snapper with licorice-scented ouzo, roasted over a bed of tomatoes, fennel, sweet onions, and flaky fish.",
        },

        {
            mealName: "Chicken Paella",
            mealUrl: "./seafood.webp",
            rating: "4.5",
            mealType: "Non-vegeterian",
            serveDays: "Mon, Wed, Fri",
            mealDescription: "Fresh chorizo, sliced dark meat chicken, and a seafood trio of shrimp, mussels, and cockles on a bed of saffron-infused arborio rice.",
        },

        {
            mealName: "Celery Salad",
            mealUrl: "./Celery-Salad-With-Pine-Nuts.webp",
            rating: "4.5",
            mealType: "Vegeterian",
            serveDays: "Mon, Wed, Fri",
            mealDescription: "Crunchy homemade pita chips, buttery pine nuts, and a creamy feta spread, this fattoush-inspired salad features the earthy, anchoring flavor of crisp celery.",
        },

        {
            mealName: "Spaghetti",
            mealUrl: "./Spaghetti-with-tomatoes-black.webp",
            rating: "4.7",
            mealType: "Vegeterian",
            serveDays: "Mon, Wed, Fri",
            mealDescription: "Inspired by Greek ingredients like fresh tomatoes, briny olives, salty feta cheese, and capers.",
        }
    ];



    return (
        <>
            {catalogueList.map((meal) => (
                <div ref={cardWidth} key={meal.mealName}>
                    <Card
                        title={meal.mealName}
                        image={meal.mealUrl}
                        rating={meal.rating}
                        serveDays={meal.serveDays}
                        type={meal.mealType}
                        description={meal.mealDescription}
                    />
                </div>
            ))}
        </>
    );


};

