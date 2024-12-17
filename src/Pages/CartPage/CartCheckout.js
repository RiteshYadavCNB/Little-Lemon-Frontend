import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import {
  BillingContainer,
  CheckoutContainer,
  CartitemsDiv,
  CartPageContainer,
  CheckoutProgressDiv,
  CheckoutProgressStatus,
  CheckoutProgressText,
  ProductDivider,
  ProgressBar,
  CartItemsContainer,
  CartOfferContainer,
  CouponDiv,
} from "./CartCheckoutStyle";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import { useCartItemContext } from "src/Context/CartItemsContext";
import InputField from "src/components/UtilityComponents/InputField";

const CartCheckout = () => {

  const { cartItems } = useCartItemContext();

  return (
    <CartPageContainer>

      <CheckoutProgressDiv>

        <CheckoutProgressStatus>
          <CheckCircleRoundedIcon sx={{ color: "#596e2e" }} />
          <CheckoutProgressText>Billing</CheckoutProgressText>
        </CheckoutProgressStatus>

        <ProgressBar />

        <CheckoutProgressStatus>
          <RadioButtonUncheckedRoundedIcon sx={{ color: "#596e2e" }} />
          <CheckoutProgressText>Address</CheckoutProgressText>
        </CheckoutProgressStatus>

        <ProgressBar />

        <CheckoutProgressStatus>
          <RadioButtonUncheckedRoundedIcon sx={{ color: "#596e2e" }} />
          <CheckoutProgressText>Payment</CheckoutProgressText>
        </CheckoutProgressStatus>

      </CheckoutProgressDiv>

      <CheckoutContainer>
        <CartItemsContainer>
          <CartOfferContainer>
            <div>
              <img style={{width: '24px'}} src="./generic-offer.avif" alt="offer-info"/>
              Available offers
            </div>
            <div>
              <p>10% Instant Discount on HDFC Bank Credit Card EMI on a min spend of ₹ 600/- *TCA</p>
            </div>
          </CartOfferContainer>
          <ProductDivider/>
          <CartitemsDiv>
            {cartItems.length > 0 ? cartItems.map((item) => (
              <>
                <ProductCard key={item.id}
                  product={item}
                />
                <ProductDivider/>
              </>
            )) : `No Items in the Bag`}
          </CartitemsDiv>
        </CartItemsContainer>

        <BillingContainer>
          <CouponDiv>
            <h2>Coupons</h2>
            <div>
              <LocalOfferRoundedIcon sx={{fontSize: '20px', color: '#2b380e'}} />
              <p>Apply Coupons</p>
            </div>
            <div>
              <InputField/>
            </div>
          </CouponDiv>


          <div>Add Cutlury</div>
          <div>Price brakeup</div>
          <div>Place order</div>
        </BillingContainer>

      </CheckoutContainer>

    </CartPageContainer>
  );
};

export default CartCheckout;
