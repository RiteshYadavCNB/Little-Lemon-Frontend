
import { ProductCard } from "src/components/UtilityComponents/Cards/ProductCard";
import { CartItemsContainer, CartOfferContainer, ProductDivider, CartitemsDiv } from "./CartStyle";
import { useCartItemContext } from "src/Context/CartItemsContext";

export const CartItemsComponent = () => {

    const {cartItems} = useCartItemContext();

    return(
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
    );
};