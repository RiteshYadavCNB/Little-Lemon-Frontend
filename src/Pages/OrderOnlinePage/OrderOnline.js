import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import { MainBody, OrderOnlinePage, PageTitle, ProductContainer, ProductDivider, ProductFilters, ProductSkeletonContainer, ProductView } from "./OrderOnlineStyle";
import { useEffect, useState, useRef } from "react";
import { ProductCardSkeleton } from "../../components/UtilityComponents/Cards/ProductCardSkeleton";
import MultiRangeSlider from "src/components/UtilityComponents/SliderInput/MultiRangeSlider";

const OrderOnline = () => {

// product data
const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);
const [apiCall, setApiCall] = useState(1);
// track if there are more products in the db
const [hasMore, setHasMore] = useState(true);
const observerRef = useRef(null);
// price range
const [minPrice, setMinPrice] = useState(200);
const [maxPrice, setMaxPrice] = useState(800);
// filtered products
const [filterProducts, setFilterProducts] = useState([]);

// GET products URL
const getProductsUrl = `${process.env.REACT_APP_GET_PRODUCTS_BASE_URL}?page=${page}&limit=5`;

// fetching products from backend
useEffect(() => {
    async function getProducts() {
        if(apiCall === 1){
            setApiCall(2);
            return;
        };
        if(!hasMore) return;

        try{
            const response = await fetch(getProductsUrl);

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
// if hasMore temporarily becomes false and new data arrives the observer never reattaches

// filters

// handle Price Range
const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
};

const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
};

// filter methods
// state obj to store filter values, list of parameters for each category
// function to itirate over the products array to match the keys from the filter object on button click


return(
    <OrderOnlinePage>

        <MainBody>

            <ProductFilters>
                <div className="filter">Filters</div>

                <div className="general-div">
                    <input className="search-box" type="textfield" maxLength={30} placeholder="search by name"/>
                </div>

                <div className="general-div">
                    <p>Price Range</p>
                    <MultiRangeSlider
                        min={200}
                        max={800}
                        step={100}
                        minVal={minPrice}
                        maxVal={maxPrice}
                        handleMaxVal={handleMaxChange}
                        handleMinVal={handleMinChange}
                    />
                </div>

                <div className="general-div">
                    <p>Meal Type</p>
                    <ul>
                        <li>
                            <input type="checkbox"/>
                            <span>veg</span>
                        </li>
                        <li>
                            <input type="checkbox"/>
                            <span>non-veg</span>
                        </li>
                    </ul>
                </div>

                <div className="general-div">
                    <p>Meal Course</p>
                    <ul>
                        <li>
                            <input type="checkbox"/>
                            <span>Appetizers</span>
                        </li>

                        <li>
                            <input type="checkbox"/>
                            <span>Salads</span>
                        </li>

                        <li>
                            <input type="checkbox"/>
                            <span>Sides</span>
                        </li>

                        <li>
                            <input type="checkbox"/>
                            <span>Soups</span>
                        </li>

                        <li>
                            <input type="checkbox"/>
                            <span>Main Course</span>
                        </li>

                        <li>
                            <input type="checkbox"/>
                            <span>Desserts</span>
                        </li>
                    </ul>
                </div>
            </ProductFilters>

            <ProductView>
                <PageTitle>Order Now</PageTitle>

                {products.length === 0 && hasMore &&
                 <ProductSkeletonContainer key={"product-card-skeleton"}>
                    <ProductCardSkeleton/>
                    <ProductCardSkeleton/>
                    <ProductCardSkeleton/>
                    <ProductCardSkeleton/>
                </ProductSkeletonContainer>}

                <ProductContainer>

                {products.length > 0 &&
                    products.map(product => (
                        <>
                            <ProductCard
                                product={product}
                            />
                            <ProductDivider/>
                        </>
                    ))
                }
                </ProductContainer>

                { products.length > 0 && hasMore && <div ref={observerRef} style={{height: "30px"}}/>}

            </ProductView>


        </MainBody>

    </OrderOnlinePage>
);
};

export default OrderOnline;