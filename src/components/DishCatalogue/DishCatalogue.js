

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



    /* mapping card elements using a variable*/

    /*const catalogueCard = catalogueList.map((meal) =>
            <div key={meal} style={card}>
                <div>
                    <h2>{meal.mealName}</h2>;
                    <span>
                        <p>{meal.rating}</p>
                        <p>{meal.mealType}</p>
                    </span>
                    <p>{meal.serveDays}</p>
                </div>

                <div>
                    <p>{meal.mealDescription}</p>
                </div>
            </div>
        );*/



    return (
        <>
            {catalogueList.map((meal) => (
                <div ref={cardWidth} key={meal.mealName} className="card">
                    <div className="card-info">
                        <img alt={meal.mealName} src={meal.mealUrl} ></img>
                        <h2 style={{fontSize: '18px', fontWeight: '600'}}>{meal.mealName}</h2>
                        <div style={{display: "block"}}>
                            <span style={{marginRight: "12px"}}><b style={{fontSize: "13.75px", fontWeight: "500", marginRight: "6px"}}>Rated:</b>{meal.rating}</span>
                            <span><b style={{fontSize: "13.75px", fontWeight: "500", marginRight: "6px"}}>Meal Type:</b>{meal.mealType}</span>
                        </div>
                        <p><b style={{fontSize: "13.75px", fontWeight: "500"}}>Served On:</b> {meal.serveDays}</p>
                    </div>

                    <div style={{display: "flex", width: "100%", padding: "0px 6px", boxSizing: "border-box"}}>
                        <p style={{textAlign: "center", fontSize: "13.75px", fontWeight: "400"}}>{meal.mealDescription}</p>
                    </div>
                </div>
            ))}
        </>
    );


};

