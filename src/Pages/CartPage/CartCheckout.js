import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import orderDishList from "../../data/orderDishList";
import { useState, useEffect } from "react";
import {
  BillingContainer,
  CartItemContainer,
  CartitemsDiv,
  CartPageContainer,
  CheckoutProgressDiv,
  ProgressBar,
} from "./CartCheckoutStyle";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import { useCartItemContext } from "src/Context/CartItemsContext";

const CartCheckout = () => {
  const { cartItems, updateCart, removeFromCart } = useCartItemContext();
  const [cartItemsList, setCart] = useState(cartItems);

  useEffect(() => {
    setCart((prev) => [
      ...prev,
      orderDishList.filter((item) => cartItems.some((e) => e.id === item.id)),
    //   try this method -- you can use for loop but try to do it with some 
    ]);
  }, []);

  return (
    <CartPageContainer>
      <CheckoutProgressDiv>
        <CheckCircleRoundedIcon sx={{ color: "#596e2e" }} />
        <ProgressBar />
        <RadioButtonUncheckedRoundedIcon sx={{ color: "#596e2e" }} />
        <ProgressBar />
        <RadioButtonUncheckedRoundedIcon sx={{ color: "#596e2e" }} />
      </CheckoutProgressDiv>

      <CartItemContainer>
        <CartitemsDiv>
          {cartItemsList.map((product) => (
            <>
              <ProductCard product={product} />
            </>
          ))}
          {cartItems.map((product) => (
            <>{console.log(product)}</>
          ))}
          items here
        </CartitemsDiv>
        <BillingContainer>bill here</BillingContainer>
      </CartItemContainer>
    </CartPageContainer>
  );
};

export default CartCheckout;
