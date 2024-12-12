import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import { CartContainer, CartValue, OrderOnlinePage, ProductContainer, ProductDivider } from "./OrderOnlineStyle";
import orderDishList from "../../data/orderDishList";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { useCartItemContext } from "src/Context/CartItemsContext";



const OrderOnline = () => {

    const { cartItems, updateCart, removeFromCart } = useCartItemContext();

    const handleCart = (id, name, price, quantity) => {
        updateCart(id, name, price, quantity);
        console.log("works fine");
    };

    const removeItemFromCart = (id) => {
        removeFromCart(id);
        console.log("removed item");
    }

    return(
        <OrderOnlinePage>
            <CartContainer>
                <LocalMallRoundedIcon sx={{fontSize: 40, color: '#756300'}}/>
                <CartValue>{cartItems.length}</CartValue>
            </CartContainer>

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