import { Link } from "react-router-dom";

import {
    BillingContainer,
    Divider,
    CouponDiv,
    CouponCodeInput,
    CouponCodeButton,
    BillBreakUp,
    EmptyCartContainer,
    LinkStyle,
    CheckoutButton,
  } from "./CartStyle";

import { useCartItemContext } from "src/Context/CartItemsContext";
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';



export const BillingComponent = ({steps, checkOutStage, totalDiscount, deliveryFee, discountedPrice, handleCheckoutStage}) => {

const { cartItems } = useCartItemContext();

const handleCheckoutButton = () => {
    handleCheckoutStage();
    console.log(steps[checkOutStage].key);
}

return (
        <>
        { cartItems.length > 0 ?

        <BillingContainer>

            {checkOutStage === 0 && <CouponDiv>
            <div>
                <LocalOfferRoundedIcon sx={{fontSize: '20px', color: '#2b380e'}} />
                <h2>Apply Coupon Code</h2>
            </div>
            <div>
                <CouponCodeInput placeholder='enter coupon code' />
                <CouponCodeButton>Apply</CouponCodeButton>
            </div>
            </CouponDiv>}

            <BillBreakUp>

            <h2>Price Details</h2>

            <Divider />

            {cartItems.map((item)=>
                <dl key={item.id}>
                <dt>{item.name}</dt>
                <dd>{`₹ ${item.price * item.quantity}`}</dd>
                </dl>
            )}

            <dl>
                <dt>Discount</dt>
                <dd>{`- ₹ ${totalDiscount}`}</dd>
            </dl>

            <dl>
                <dt>Delivery Fee</dt>
                <dd>{`- ₹ ${deliveryFee}`}</dd>
            </dl>

            <Divider />

            <dl>
                <dt>Total Amount</dt>
                {steps[checkOutStage]?.key === "confirmation" ? <dt>{discountedPrice}</dt> : <CheckoutButton onClick={() => handleCheckoutButton()}>{`Continue ₹ ${discountedPrice}`}</CheckoutButton>}
            </dl>

            </BillBreakUp>

        </BillingContainer> :

        <EmptyCartContainer>
            <img src="./emptyCart.gif" alt="emptycart"/>
            <p>Oops! Your Cart is Empty</p>
            <Link style={LinkStyle} to='/order-online'>Let's Add to Cart</Link>
        </EmptyCartContainer>
        }

        </>
    );
};