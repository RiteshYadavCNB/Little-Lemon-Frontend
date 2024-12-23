
import {
  CartPageContainer,
  CheckoutContainer,
  CheckoutProgressDiv,
  CheckoutProgressStatus,
  CheckoutProgressText,
  ProgressBar,
} from "./CartStyle";

import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import RadioButtonUncheckedRoundedIcon from "@mui/icons-material/RadioButtonUncheckedRounded";
import { useCartItemContext } from "src/Context/CartItemsContext";
import { useEffect, useState } from "react";
import { BillingComponent }  from "./BillingComponent";
import { CartItemsComponent } from "./CartItemsContainer";
import { AddressComponent } from "./AddressComponent";
import { PaymentComponent } from "./PaymentComponent";


const Cart = () => {

  const { cartItems } = useCartItemContext();
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ totalDiscount, setTotalDiscount ] = useState(0);
  const [ discountedPrice, setDiscountedPrice ] = useState(0);
  const [ deliveryFee, setDeliveryFee ] = useState(0);
  const [ checkOutStage, setCheckOutStage ] = useState(0);

  //Checkout Stage array

  const steps = [
    { key: "cartreview", component: <CartItemsComponent/>},
    { key: "address", component: <AddressComponent/>},
    { key: "payment", component: <PaymentComponent/>}
  ];


  //manage checkoutstage

  const handleCheckoutStage = () => {
    if (checkOutStage < steps.length -1) {
      setCheckOutStage((prev) => prev + 1);
    }
  }

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
        {steps[checkOutStage].component}
        <BillingComponent checkOutStage={checkOutStage} totalDiscount={totalDiscount} deliveryFee={deliveryFee} discountedPrice={discountedPrice} handleCheckoutStage={handleCheckoutStage} />
      </CheckoutContainer>


    </CartPageContainer>
  );
};

export default Cart;
