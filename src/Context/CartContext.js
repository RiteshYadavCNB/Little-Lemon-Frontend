import { createContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [productCount, setproductCount] = useState(0);

    return(
        <CartContext.Provider value={{productCount, setproductCount}}>
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider};

