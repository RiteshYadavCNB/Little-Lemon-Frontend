import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import { OrderOnlinePage, ProductContainer, ProductDivider } from "./OrderOnlineStyle";
import { useEffect, useState, useRef } from "react";
import { ProductCardSkeleton } from "../../components/UtilityComponents/Cards/ProductCardSkeleton";

const OrderOnline = () => {

// product data
const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);
const [apiCall, setApiCall] = useState(1);
// track if there are more products in the db
const [hasMore, setHasMore] = useState(true);
const observerRef = useRef(null);


// fetching products from backend
useEffect(() => {
    async function getProducts() {
        if(apiCall === 1){
            setApiCall(2);
            return;
        };
        if(!hasMore) return;

        try{
            const response = await fetch(`https://little-lemon-backend-3y4f.onrender.com/api/products?page=${page}&limit=5`);

            if(!response.ok){
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            if(page >= 1){

            }
            setProducts((prev) => [...prev, ...data.products]);
            setHasMore(data.hasMore);

        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    }

    getProducts();
},[page, apiCall]);

// useEffect runs immediately before component renders.
// the first API call happens automatically, and then the observer may also trigger another req
// may cause double API call on first load --- to avoid explicity stop the first call


const observerCallbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && hasMore){
        setPage((prev) => prev + 1);
    }
}

// observer will trigger API calls even when there are no more products to load
// put check hasMore state to stop unnecessary API calls

useEffect(() => {
    if (!observerRef.current || !hasMore) return;

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 1.0
    };

    const observer = new IntersectionObserver(observerCallbackFunction, options);

    observer.observe(observerRef.current);

    return () => observer.disconnect();
}, [products.length]);

// issue -- observer is diconnected as soon as hasMore changes
// if hasMore temporarily becomes false and new data arrives the observer never reattaches.


return(
    <OrderOnlinePage>

        {products.length === 0 && hasMore &&
        <>
            <ProductCardSkeleton/>
            <ProductCardSkeleton/>
            <ProductCardSkeleton/>
            <ProductCardSkeleton/>
            <ProductCardSkeleton/>
        </>
        }

        <ProductContainer>
            {products.map(product => {
                return (
                    <>  <ProductCard
                            product={product}
                        />
                        <ProductDivider/>
                    </>
                );
            })}
        </ProductContainer>

        { products.length > 0 && hasMore && <div ref={observerRef} style={{height: "30px"}}/>}

    </OrderOnlinePage>
);
};

export default OrderOnline;