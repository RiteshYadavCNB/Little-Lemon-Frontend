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

import { useCartItemContext } from "src/context/CartItemsContext";
import { useState, useEffect } from "react";
import { BillingComponent }  from "./BillingComponent";
import { CartItemsComponent } from "./CartItemsContainer";
import { AddressComponent } from "./AddressComponent";
import { PaymentComponent } from "./PaymentComponent";

import { useSelector, useDispatch } from "react-redux";
import { addItemToCart, applyCoupon, updateBill, resetOrder, generateOrderId, updateContactDetails, updateAddressDetails, updatePayment } from "src/redux/slices/orderSlice";

// ---Cart Page---

const Cart = () => {

  const { cartItems, clearCart } = useCartItemContext();
  const [ checkOutStage, setCheckOutStage ] = useState(0);
  const [ orderStatus, setOrderStatus ] = useState(false);

  // fetch coupon list from db --- pass it to billing component
  const [ couponList, setCouponList ] = useState([]);

  // contact details
  const [contact, setContact] = useState({
    name: "",
    mobile: ""
  });

  // address details
  const [address, setAddress] = useState({
    building: "",
    locality: "",
    pinCode: 0,
    tag: ""
  });

  // cart
  const [ cart, setCart] = useState([]);

  // selected coupon
  const [selectedCoupon, setSelectedCoupon] = useState({
    couponCode: null,
    discount: 0
  });

  // bill
  const [ bill, setBill] = useState({ billedItems: [],
  itemTotal: 0,
  itemDiscount: 0,
  couponDiscount: 0,
  deliveryFee: 0,
  taxFee: 0,
  payableAmount: 0
  });

  // retrieve orderId from Redux if exists
  const existignOrder = useSelector(state => state.order.orderId);
  const dispatch = useDispatch();

  // set cart
  useEffect(() => {
      if(cartItems){
          const items = cartItems.map(({_id, name, price, quantity}) => ({_id, name, price, quantity}));
          setCart(items);
      }
  }, [cartItems]);

  // update bill state
  useEffect(() => {
    // total price
    const total = cart.reduce((sum, item)=> (sum + (item.price * item.quantity)), 0);

    // total discount
    const discountPrice = cart.reduce((total, item) => {
        return total + (item.price*item.quantity)*0.2;
    }, 0);

    // Discounted Price
    const discountedPrice = total - discountPrice - selectedCoupon.discount;

    // delivery fee
    const calcDeliveryFee = discountedPrice > 250 ? 0 : 30;

    // billed amount
    const billedAmount = discountedPrice + calcDeliveryFee;

    // taxes
    const tax = billedAmount * 0.05;

    // payable amount
    const payableBill = billedAmount + tax;

    // set bill state
    setBill((prev) => ({
        ...prev, billedItems: [ ...prev.billedItems, ...cart ],
        itemTotal: total,
        itemDiscount: discountPrice,
        couponDiscount: selectedCoupon.discount,
        deliveryFee: calcDeliveryFee,
        taxFee: tax,
        payableAmount: payableBill
    }))
  },[cart, selectedCoupon]);

  //manage checkoutstage
  const handleCheckoutStage = () => {
    if (checkOutStage < steps.length) {
      setCheckOutStage((prev) => prev + 1);
      if (checkOutStage === 2) {
        clearCart();
        setOrderStatus(true);
      }
    }
  };

  // checkout button
  const handleCheckoutButton = () => {
    handleCheckoutStage();
    if(checkOutStage === 0){
      // update redux order slice
      if(existignOrder) dispatch(resetOrder())
        dispatch(generateOrderId());
        dispatch(applyCoupon(selectedCoupon));
        dispatch(updateBill(bill));
        dispatch(addItemToCart(cart));
    }
    if(checkOutStage === 1){
      dispatch(updateContactDetails(contact));
      dispatch(updateAddressDetails(address));
    }
  };

  // get progress icon

  const getProgressIcon = (index) => {
    if (index < checkOutStage){
      return <CheckCircleRoundedIcon sx={{ color: "#596e2e" }} />;
    } else if (index === checkOutStage) {
      return <AdjustRoundedIcon sx={{ color: "#596e2e" }} />;
    }
    return <RadioButtonUncheckedRoundedIcon sx={{ color: "#596e2e" }} />;
  };

  // handle contact state
  const handleContact = (e) => {
      if(e.target.name === "name") setContact((prev) => ({...prev, name: e.target.value}))
      if(e.target.name === "mobile") setContact((prev) => ({...prev, mobile: e.target.value}))
  };

  // handle address state
  const handleAddress = (e) => {
    if(e.target.name === "building") setAddress((prev) => ({...prev, building: e.target.value}))
    if(e.target.name === "locality") setAddress((prev) => ({...prev, locality: e.target.value}))
    if(e.target.name === "pinCode") setAddress((prev) => ({...prev, pinCode: e.target.value}))
    if(e.target.name === "tag") setAddress((prev) => ({...prev, tag: e.target.value}))
  };

  //Checkout Stage array

  const steps = [
    { key: "Cart", component: <CartItemsComponent />},
    { key: "Address", component: <AddressComponent handleContact={handleContact} handleAddress={handleAddress} />},
    { key: "Payment", component: <PaymentComponent payableAmount={bill.payableAmount}/>}
  ];

  return (
    <CartPageContainer>

      {
        cartItems.length > 0 && checkOutStage < 3 &&
        <CheckoutProgressDiv>
          {steps.map((step, index) => (
            <>
              {index < steps.length &&
              <CheckoutProgressStatus key={step.key}>
                {getProgressIcon(index)}
                <CheckoutProgressText>{step.key}</CheckoutProgressText>
              </CheckoutProgressStatus>}
              {index < steps.length - 1 && <ProgressBar />}
            </>
        ))}
        </CheckoutProgressDiv>
      }

      <CheckoutContainer>
        {checkOutStage <= 2 && cartItems.length > 0 && steps[checkOutStage].component}
        <BillingComponent bill={bill} orderStatus={orderStatus} checkOutStage={checkOutStage} handleCheckoutButton={handleCheckoutButton} />
      </CheckoutContainer>


    </CartPageContainer>
  );
};

export default Cart;
