import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";


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

  const { cartItems } = useCartItemContext();

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
          {cartItems.length > 0 ? cartItems.map((item) => (
            <>
              <ProductCard key={item.id}
                product={item}
              />
            </>
          )) : `No Items in the Bag`}
        </CartitemsDiv>
        <BillingContainer>bill here</BillingContainer>
      </CartItemContainer>
    </CartPageContainer>
  );
};

export default CartCheckout;
