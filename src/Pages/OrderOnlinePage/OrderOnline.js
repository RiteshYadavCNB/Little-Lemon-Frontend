import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import { OrderOnlinePage, ProductContainer, ProductDivider } from "./OrderOnlineStyle";
import orderDishList from "../../data/orderDishList";
import { useCartItemContext } from "src/Context/CartItemsContext";



const OrderOnline = () => {

    const { cartItems, updateCart, removeFromCart } = useCartItemContext();

    const handleCart = (id, name, price, quantity) => {
        updateCart(id, name, price, quantity);
        console.log("works fine", cartItems);
    };

    const removeItemFromCart = (id) => {
        removeFromCart(id);
        console.log("removed item");
    }

    return(
        <OrderOnlinePage>

            <ProductContainer>
                {orderDishList.map((product) => <>
                    <ProductCard
                        product={product}
                        updateCart={handleCart}
                        removeItemFromCart={removeItemFromCart}/>
                    <ProductDivider/>
                </>)}
            </ProductContainer>

        </OrderOnlinePage>
    );
};

export default OrderOnline;