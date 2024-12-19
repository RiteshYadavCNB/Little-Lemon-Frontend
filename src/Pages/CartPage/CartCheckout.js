import { Link } from "react-router-dom";
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
  Divider,
  ProgressBar,
  CartItemsContainer,
  CartOfferContainer,
  CouponDiv,
  CouponCodeInput,
  CouponCodeButton,
  BillBreakUp,
  EmptyCartContainer,
  LinkStyle,
  CheckoutButton,
  ButtonContainer,
} from "./CartCheckoutStyle";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import { useCartItemContext } from "src/Context/CartItemsContext";
import { useEffect, useState } from "react";


const CartCheckout = () => {

  const { cartItems } = useCartItemContext();
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ totalDiscount, setTotalDiscount ] = useState(0);
  const [ discountedPrice, setDiscountedPrice ] = useState(0);
  const [ deliveryFee, setDeliveryFee ] = useState(0);

  //Total Price

  useEffect(()=>{
    const total = cartItems.reduce((sum, item)=> sum + item.price * item.quantity, 0);
    setTotalPrice(total);
  },[cartItems]);

  //Total discount

  useEffect(()=>{
    let discountprice = cartItems.reduce((total, item) => {
      return total + item.price*item.quantity*0.2;
  }, 0);
    setTotalDiscount(discountprice);
  },[cartItems]);

  //Discounted Price

  useEffect(()=>{
    setDiscountedPrice(()=> totalPrice - totalDiscount);
  },[totalPrice, totalDiscount]);

  //Delivery Fee

  useEffect(()=>{
    if (totalPrice > 250){
      setDeliveryFee(0);
    } else {
      setDeliveryFee(30);
    }
  },[totalPrice]);

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
              <h2>Available Offers</h2>
            </div>
            <div>
              <p>10% Instant Discount on HDFC Bank Credit Card EMI on a min spend of ₹ 600/- *TCA</p>
            </div>
          </CartOfferContainer>
          <ProductDivider/>
          <CartitemsDiv>
            {cartItems.length > 0 && cartItems.map((item) => (
              <>
                <ProductCard key={item.id}
                  product={item}
                />
                <ProductDivider/>
              </>
            ))}
          </CartitemsDiv>
        </CartItemsContainer>

        { cartItems.length > 0 ?

          <BillingContainer>

            <CouponDiv>
              <div>
                <LocalOfferRoundedIcon sx={{fontSize: '20px', color: '#2b380e'}} />
                <h2>Apply Coupon Code</h2>
              </div>
              <div>
                <CouponCodeInput placeholder='enter coupon code' />
                <CouponCodeButton>Apply</CouponCodeButton>
              </div>
            </CouponDiv>

            <BillBreakUp>

              <h2>Price Details</h2>

              <Divider />

              {cartItems.map((item)=>
                <div key={item.id}>
                  <span>{item.name}</span>
                  <span>{`₹ ${item.price * item.quantity}`}</span>
                </div>
              )}

              <div>
                <span>Discount</span>
                <span>{`- ₹ ${totalDiscount}`}</span>
              </div>

              <div>
                <span>Delivery Fee</span>
                <span>{`- ₹ ${deliveryFee}`}</span>
              </div>

              <Divider />

              <div>
                <span>Total Amount</span>
                <CheckoutButton>{`Place Order ₹ ${discountedPrice}`}</CheckoutButton>
              </div>

            </BillBreakUp>

          </BillingContainer> :

          <EmptyCartContainer>
            <img src="./emptyCart.gif" alt="emptycart"/>
            <p>Oops! Your Cart is Empty</p>
            <Link style={LinkStyle} to='/order-online'>Let's Add to Cart</Link>
          </EmptyCartContainer>
        }

      </CheckoutContainer>

    </CartPageContainer>
  );
};

export default CartCheckout;
