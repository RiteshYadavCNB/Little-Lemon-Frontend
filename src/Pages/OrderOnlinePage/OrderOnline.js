import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import { OrderOnlinePage, ProductContainer, ProductDivider } from "./OrderOnlineStyle";
import orderDishList from "../../data/orderDishList";




const OrderOnline = () => {

    return(
        <OrderOnlinePage>

            <ProductContainer>
                {orderDishList.map(product => {
                    return (
                        <>  <ProductCard key={product.id}
                                product={product}
                            />
                            <ProductDivider/>
                        </>
                    );
                })}
            </ProductContainer>

        </OrderOnlinePage>
    );
};

export default OrderOnline;