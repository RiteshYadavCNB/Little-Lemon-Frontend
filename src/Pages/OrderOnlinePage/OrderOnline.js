import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import { OrderOnlinePage, ProductContainer, ProductDivider } from "./OrderOnlineStyle";
import { useEffect, useState } from "react";


const OrderOnline = () => {

const [products, setProducts] = useState([]);

useEffect(() => {
    async function getProducts() {
        try{
            const response = await fetch("https://little-lemon-backend-3y4f.onrender.com/api/products");

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    };
    getProducts();
},[]);


return(
    <OrderOnlinePage>

        <ProductContainer>
            {products.map(product => {
                return (
                    <>  <ProductCard key={product.id}
                            product={product}
                        />
                        <ProductDivider/>
                    </>
                );
            })}
        </ProductContainer>

    </OrderOnlinePage>
);
};

export default OrderOnline;