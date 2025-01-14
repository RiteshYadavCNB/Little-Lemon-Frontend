
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
import AdjustRoundedIcon from '@mui/icons-material/AdjustRounded';

import { useCartItemContext } from "src/Context/CartItemsContext";
import { useEffect, useState } from "react";
import { BillingComponent }  from "./BillingComponent";
import { CartItemsComponent } from "./CartItemsContainer";
import { AddressComponent } from "./AddressComponent";
import { PaymentComponent } from "./PaymentComponent";
import { OrderConfirmation } from "./ConfirmationComponent";


const Cart = () => {

  const { cartItems } = useCartItemContext();
  const [ totalPrice, setTotalPrice ] = useState(0);
  const [ totalDiscount, setTotalDiscount ] = useState(0);
  const [ discountedPrice, setDiscountedPrice ] = useState(0);
  const [ deliveryFee, setDeliveryFee ] = useState(0);
  const [ checkOutStage, setCheckOutStage ] = useState(0);


  //Checkout Stage array

  const steps = [
    { key: "Cart", component: <CartItemsComponent/>},
    { key: "Address", component: <AddressComponent/>},
    { key: "Payment", component: <PaymentComponent/>},
    { key: "confirmation", component: <OrderConfirmation/>}
  ];

  // get progress icon

  const getProgressIcon = (index) => {
    if (index < checkOutStage){
      return <CheckCircleRoundedIcon sx={{ color: "#596e2e" }} />;
    } else if (index === checkOutStage) {
      return <AdjustRoundedIcon sx={{ color: "#596e2e" }} />;
    }
    return <RadioButtonUncheckedRoundedIcon sx={{ color: "#596e2e" }} />;
  };

  // in the above function we are mapping steps array and for each index we are checking whether the
  // checkoutStage is equal to it more than it or less than it and based on that we are returning an icon

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

      {
        cartItems.length > 0 && checkOutStage < 3 &&
        <CheckoutProgressDiv>
          {steps.map((step, index) => (
            <>
              {index < steps.length - 1 &&
              <CheckoutProgressStatus key={step.key}>
                {getProgressIcon(index)}
                <CheckoutProgressText>{step.key}</CheckoutProgressText>
              </CheckoutProgressStatus>}
              {index < steps.length - 2 && <ProgressBar />}
            </>
        ))}
        </CheckoutProgressDiv>
      }

      <CheckoutContainer>
        {cartItems.length > 0 && steps[checkOutStage].component}
        <BillingComponent steps={steps} checkOutStage={checkOutStage} totalDiscount={totalDiscount} deliveryFee={deliveryFee} discountedPrice={discountedPrice} handleCheckoutStage={handleCheckoutStage} />
      </CheckoutContainer>


    </CartPageContainer>
  );
};

export default Cart;
