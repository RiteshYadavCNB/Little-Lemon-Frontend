import { ProductCard } from "../UtilityComponents/Cards/ProductCard";
import { OrderOnlinePage, ProductContainer, ProductDivider } from "./OrderOnlineStyle";
import orderDishList from "../../data/orderDishList";



const OrderOnline = () => {


    return(
        <OrderOnlinePage>
            <ProductContainer>
                {orderDishList.map((meal) => <><ProductCard/> <ProductDivider/></>)}
            </ProductContainer>
        </OrderOnlinePage>
    );
};

export default OrderOnline;