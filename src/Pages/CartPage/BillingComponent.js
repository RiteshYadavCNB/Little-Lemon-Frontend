
import { Link } from "react-router-dom";

import {
    BillingContainer,
    CheckoutContainer,
    CartitemsDiv,
    ProductDivider,
    Divider,
    CartItemsContainer,
    CartOfferContainer,
    CouponDiv,
    CouponCodeInput,
    CouponCodeButton,
    BillBreakUp,
    EmptyCartContainer,
    LinkStyle,
    CheckoutButton,
  } from "./CartCheckoutStyle";

import { ProductCard } from "src/components/UtilityComponents/Cards/ProductCard";
import { useCartItemContext } from "src/Context/CartItemsContext";
import LocalOfferRoundedIcon from '@mui/icons-material/LocalOfferRounded';
import { memo } from "react";




const BillingComponent = ({totalDiscount, deliveryFee, discountedPrice}) => {

const { cartItems } = useCartItemContext();
console.log(totalDiscount);
console.log(discountedPrice);

return (
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
                        <CheckoutButton>{`Place Order ₹ ${discountedPrice}`}</CheckoutButton>
                    </dl>

                    </BillBreakUp>

                </BillingContainer> :

                <EmptyCartContainer>
                    <img src="./emptyCart.gif" alt="emptycart"/>
                    <p>Oops! Your Cart is Empty</p>
                    <Link style={LinkStyle} to='/order-online'>Let's Add to Cart</Link>
                </EmptyCartContainer>
                }

            </CheckoutContainer>
    );
};

export default memo(BillingComponent);