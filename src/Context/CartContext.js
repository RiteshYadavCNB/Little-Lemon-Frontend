import { createContext, useContext, useState } from "react";

const CartContext = createContext();

//provider component

export const CartProvider = ({children}) => {
    const [productCount, setproductCount] = useState(0);

    //update the cart count
    const updateProductCount = (cartData) => {
        setproductCount(cartData);
    };

    return(
        <CartContext.Provider value={{productCount, updateProductCount}}>
            {children}
        </CartContext.Provider>
    );
};

//custom hook for consuming context

export const useCartContext = () => {
    return useContext(CartContext);
};

