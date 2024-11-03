import DishCarousel from "./DishCatalogue/DishCarousel"

function Homepage(){
    return (
        <div className="home-main">
            <div className="heading-div">
                <h1>Little Lemon menu</h1>
            </div>

            <DishCarousel/>
        </div>
    )
}

export default Homepage;