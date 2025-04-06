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
    DeliveryFee
  } from "./CartStyle";

import { useCartItemContext } from "src/context/CartItemsContext";
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import { OrderConfirmation } from "./ConfirmationComponent";

export const BillingComponent = ({ bill, orderStatus, checkOutStage, handleCheckoutButton}) => {

const { cartItems } = useCartItemContext();

return (
        <>
        { cartItems.length > 0 || orderStatus ?

        <BillingContainer>

            {checkOutStage >2 && <OrderConfirmation/>}

            {checkOutStage === 0 && <CouponDiv>
            <div>
                <LocalOfferRoundedIcon sx={{fontSize: '20px', color: '#2b380e'}} />
                <h2>Apply Coupon Code</h2>
            </div>
            <div>
                <CouponCodeInput placeholder='enter coupon code' value={"SAVE-100"} readOnly/>
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
                <dd>{`- ₹ ${bill.itemDiscount}`}</dd>
            </dl>

            <dl>
                <dt>Delivery Fee</dt>
                <DeliveryFee $decoration={bill.deliveryFee} color={bill.deliveryFee}>₹ 30</DeliveryFee>
            </dl>

            <dl>
                <dt>Taxes</dt>
                <dd>{`₹ ${bill.taxFee}`}</dd>
            </dl>

            <Divider />

            <dl>
                <dt>Total Amount</dt>
                { checkOutStage >2 ?
                    <dt style={{display: 'flex', flexDirection: 'row', gap: '16px'}}>
                        <p style={{fontSize:'12px',
                                letterSpacing: '0.5px',
                                padding: '4px 12px',
                                color: '#ffffff',
                                backgroundColor: 'green',
                                borderRadius: '30px'}}
                        >Paid</p>
                        ₹ {bill.payableAmount}
                    </dt> :
                    <CheckoutButton onClick={() => handleCheckoutButton()}>{`Continue ₹ ${bill.payableAmount}`}</CheckoutButton>}
            </dl>

            </BillBreakUp>

        </BillingContainer> :

        !orderStatus && <EmptyCartContainer>
            <img src="./emptyCart.gif" alt="emptycart"/>
            <p>Oops! Your Cart is Empty</p>
            <Link style={LinkStyle} to='/order-online'>Let's Add to Cart</Link>
        </EmptyCartContainer>
        }

        </>
    );
};