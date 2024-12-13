import { createContext, useState, useContext } from "react";

const CartItemContext = createContext();

export const CartItemProvider = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    //update cart
    const updateCart = (id, name, price, quantity) => {
        setCartItems((prevCartItem) => {
            //checking if the item already exists
            const existingItemIndex = prevCartItem.findIndex(item => item.id === id);

            if (existingItemIndex !== -1){
                //if item exists, update its quantity
                const updatedCartitems = [...prevCartItem];
                updatedCartitems[existingItemIndex].quantity += quantity;
                return updatedCartitems;
            } else {
                //if item does not exist, add it to the cart
                return [...prevCartItem, {id, name, price, quantity}];
            };
        });
    };

    // function to remove an item from the cart
    const removeFromCart = (id) => {
        setCartItems((prevCartItems) => prevCartItems.filter(item => item.id !== id));
    };



    return (
        <CartItemContext.Provider value={{cartItems, updateCart, removeFromCart}}>
            {children}
        </CartItemContext.Provider>
    )
};

export const useCartItemContext = () => {
    return useContext(CartItemContext);
};

