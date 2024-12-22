
import {
  CartPageContainer,
  CheckoutProgressDiv,
  CheckoutProgressStatus,
  CheckoutProgressText,
  ProgressBar,
} from "./CartCheckoutStyle";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import { useCartItemContext } from "src/Context/CartItemsContext";
import { useEffect, useState } from "react";
import  BillingComponent  from "./BillingComponent";


const CartCheckout = () => {

  const { cartItems } = useCartItemContext();
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ totalDiscount, setTotalDiscount ] = useState(0);
  const [ discountedPrice, setDiscountedPrice ] = useState(0);
  const [ deliveryFee, setDeliveryFee ] = useState(0);
  const [ checkOutStatus, setCheckOutStatus ] = useState(0);

  //Checkout Stage
  // we have discussed it with GPT follow on that 
  // we are trying to make step and conditionally rendered page
  // using array of stages refer GPT chat

  // const steps = [
  //   { key; "billing", component: }
  // ]

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

      <BillingComponent totalDiscount={totalDiscount} deliveryFee={deliveryFee} discountedPrice={discountedPrice}/>


    </CartPageContainer>
  );
};

export default CartCheckout;
