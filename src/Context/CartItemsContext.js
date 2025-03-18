import { createContext, useState, useContext } from "react";

const CartItemContext = createContext();

export const CartItemProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    //update cart
    const updateCart = (product, quantity) => {
        setCartItems((prevCartItems) => {
            //checking if the item already exists
            const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem._id === product._id);

            if (existingItemIndex !== -1){
                //if item exists, update its quantity or remove if quantity is 0
                const updatedCartitems = [...prevCartItems];
                if (quantity > 0){
                    updatedCartitems[existingItemIndex].quantity = quantity;
                } else {
                    updatedCartitems.splice(existingItemIndex, 1); //remove item
                }
                return updatedCartitems;
            } else if (quantity > 0) {
                //if item does not exist, add it to the cart
                return [...prevCartItems, { ...product, quantity }];
            }
            return prevCartItems; //no changes for invalid case
        });
    };

    //clear cart
    const clearCart = () => {
        setCartItems([]);
    };


    return (
        <CartItemContext.Provider value={{cartItems, updateCart, clearCart}}>
            {children}
        </CartItemContext.Provider>
    )
};

// custom hook for cartItemContext

export const useCartItemContext = () => {
    return useContext(CartItemContext);
};

