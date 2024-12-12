import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import { CartContainer, CartValue, OrderOnlinePage, ProductContainer, ProductDivider } from "./OrderOnlineStyle";
import orderDishList from "../../data/orderDishList";
import { useState } from "react";
import LocalMallRoundedIcon from '@mui/icons-material/LocalMallRounded';
import { useContext } from "react";
import { CartContext } from "src/Context/CartContext";



const OrderOnline = () => {
    const [cart, setCart] = useState([]);
    // const [cartCount, setCartCount] = useState(0);

    const { productCount, setProductCount } = useContext(CartContext);

    const handleCartCount = () => {
        // setCartCount(cartCount + 1);
        setProductCount(productCount + 1);
        console.log(productCount);
    };

    const updateCart = (id, index)=>{
        setCart({});
    }

    return(
        <OrderOnlinePage>
            <CartContainer>
                <LocalMallRoundedIcon sx={{fontSize: 40, color: '#756300'}}/>
                <CartValue>{productCount}</CartValue>
            </CartContainer>

            <ProductContainer>
                {orderDishList.map((product) => <>
                    <ProductCard
                        product={product}
                        updateCart={updateCart}
                        updateCartCount={handleCartCount} />
                    <ProductDivider/>
                </>)}
            </ProductContainer>
        </OrderOnlinePage>
    );
};

export default OrderOnline;