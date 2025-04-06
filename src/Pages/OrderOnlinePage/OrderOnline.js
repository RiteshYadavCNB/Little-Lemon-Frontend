import { ProductCard } from "../../components/UtilityComponents/Cards/ProductCard";
import { FilterPopupOptions, FilterSelections, MainBody, MobileFilterButton, MobileFilterContainer,
    MobileFilterMain,
    MobileFilterPopup, MobileFilterPopupHeader, MobileFilterSearch, OrderOnlinePage, PageTitle, ProductContainer, ProductDivider, 
    ProductFilters, ProductSkeletonContainer, ProductView } from "./OrderOnlineStyle";
import { useEffect, useState, useRef, useCallback, useMemo } from "react";
import React from "react";
import { ProductCardSkeleton } from "../../components/UtilityComponents/Cards/ProductCardSkeleton";
import MultiRangeSlider from "src/components/UtilityComponents/SliderInput/MultiRangeSlider";
import TuneRoundedIcon from '@mui/icons-material/TuneRounded';
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

const OrderOnline = () => {

// product data
const [products, setProducts] = useState([]);
const [page, setPage] = useState(1);
const [apiCall, setApiCall] = useState(1);

// track if there are more products in the db
const [hasMore, setHasMore] = useState(true);
const observerRef = useRef(null);

// ref for debouncing search param
const debounceFilterSearchRef = useRef(null);

// filter states
// product search params
const [searchParam, setSearchParam] = useState("");
// price range
const [minPrice, setMinPrice] = useState(100);
const [maxPrice, setMaxPrice] = useState(800);
// meal types
const [mealTypes, setMealTypes] = useState([]);
// meal category
const [mealCategories, setMealCategory] = useState([]);
// filtered products
const [filterProducts, setFilterProducts] = useState(products);

// ---Mobile--- max-width: 720px
// Mobile Filter Pop-up state
const [mobileFilterPopupState, setMobileFilterPopupState] = useState(false);
// Filter Option State
const [selectedFilterOption, setSelectedFilterOption] = useState("pricerange");
// Filter Options
const filterOptions = useMemo(() => ["Price Range", "Meal Type", "Meal Category"], []);
// meal categories
const mealCategorySelections = useMemo(() => ["Appetizers", "Salads", "Sides", "Soups", "Main Course", "Desserts"], []);
// default focus on first filter option
const filterOptionRef = useRef([]);
// focused filter option
const [focusedIndex, setFocusedIndex] = useState(0);

// restoring focus to filter option when a click outsidde the filter option is detected
// focus is lost once we click outside the filter options list
useEffect(() => {
    // check if popup is open
    if(!mobileFilterPopupState) return;

    const handleClickOutside = (e) => {
        // check if the click is inside the filter options
        const isInsideFilterOptions = filterOptionRef.current.some(
            (el) => el && el.contains(e.target)
        );

        // if clicked outside, immediately refocus without delay
        if (!isInsideFilterOptions && filterOptionRef.current[focusedIndex]) {
            filterOptionRef.current[focusedIndex].focus();
        }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
        document.removeEventListener("click", handleClickOutside);
    };
},[mobileFilterPopupState, focusedIndex]);

// filtering products in filterPrdocuts array
useEffect(()=>{
    setFilterProducts(products.filter((product)=>
        (searchParam === "" || product.name.toLowerCase().includes(searchParam)) &&
        product.price > minPrice &&
        product.price < maxPrice &&
        (mealTypes.length === 0 || mealTypes.includes(product.mealType)) &&
        (mealCategories.length === 0 || mealCategories.includes(product.category))
    ));
},[searchParam, minPrice, maxPrice, mealTypes, mealCategories, products]);

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

            setProducts((prev) => [...prev, ...data.products]);
            setHasMore(data.hasMore);

        } catch (error) {
            console.error("Error fetching products: ", error);
        }
    }

    getProducts();
},[page, apiCall]);

// Observer may trigger multiple API call on first load
// --- to avoid explicity stop the first call ---
// observer callback function
const observerCallbackFunction = (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting && hasMore){
        setPage((prev) => prev + 1);
    }
}

// intersection observer mount
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

// ---filter functions---
// set Mobile Filter Pop-up state
const handleFilterPopup = () => {
    setMobileFilterPopupState((prev) => !prev);
    filterOptionRef.current[focusedIndex].focus();
    const currentFilterOption = filterOptions[focusedIndex].toLowerCase().split(' ').join("");
    setSelectedFilterOption(currentFilterOption);
}

// set Mobile Filter Option State
const handleFilterOption = (e) => {
    const filterOption = e.target.textContent.toLowerCase().split(' ').join("");
    const index = filterOptions.indexOf(e.target.textContent);
    if (focusedIndex !== index) setFocusedIndex(index);
    // defer state update
    requestAnimationFrame(() => {
        setSelectedFilterOption(filterOption);
    });
}

// handle search queries through deboucing
const handleSearchQuery = useCallback((e) => {
    // convert query to lower case for case-insensitive search
    let updatedSearchQuery = e.target.value.toLowerCase();
    // clear prev timeOut
    if (debounceFilterSearchRef.current) clearTimeout(debounceFilterSearchRef.current);
    // new timeOut
    debounceFilterSearchRef.current = setTimeout(() => {
        setSearchParam(updatedSearchQuery);
    }, 1000);
},[]);

// handle Price Range
// ***implement debouncing
const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxPrice - 100);
    setMinPrice(value);
};

const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minPrice + 100);
    setMaxPrice(value);
};

// handle meal type change
const handleMealTypeChange = (e) => {
    // check if event.target.value has a valid value
    if(e.target.value === 0) return;
    const mealType = e.target.value;
    setMealTypes(prev =>
        prev.includes(mealType) ? prev.filter(type => type !== mealType) : [...prev, mealType]
    );
}

// handle meal category change
const handleMealCategoryChange = (e) => {
    // check if event.target.value has a valid value
    if(e.target.value === 0) return;
    const mealCategory = e.target.value;
    setMealCategory(prev =>
        prev.includes(mealCategory) ? prev.filter(category => category !== mealCategory) : [...prev, mealCategory]
    );
}

// Component
return(
    <OrderOnlinePage>

        <MainBody>
            {/* ---Desktop Filter--- */}
            <ProductFilters>
                <div className="filter">Filters</div>

                <div className="general-div">
                    <input className="search-box" type="textfield" maxLength={30} placeholder="search by name" onChange={handleSearchQuery}/>
                </div>

                <div className="general-div">
                    <p>Price Range</p>
                    <MultiRangeSlider
                        min={100}
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
                    <ul onClick={handleMealTypeChange}>
                        <li>
                            <input type="checkbox" value="veg"/>
                            <span>veg</span>
                        </li>
                        <li>
                            <input type="checkbox" value="non-veg"/>
                            <span>non-veg</span>
                        </li>
                    </ul>
                </div>

                <div className="general-div">
                    <p>Meal Course</p>
                    <ul onClick={handleMealCategoryChange}>
                        <li>
                            <input type="checkbox" value="Appetizers" />
                            <span>Appetizers</span>
                        </li>

                        <li>
                            <input type="checkbox" value="Salads" />
                            <span>Salads</span>
                        </li>

                        <li>
                            <input type="checkbox" value="Sides" />
                            <span>Sides</span>
                        </li>

                        <li>
                            <input type="checkbox" value="Soups" />
                            <span>Soups</span>
                        </li>

                        <li>
                            <input type="checkbox" value="Main Course" />
                            <span>Main Course</span>
                        </li>

                        <li>
                            <input type="checkbox" value="Desserts" />
                            <span>Desserts</span>
                        </li>
                    </ul>
                </div>
            </ProductFilters>

            {/* ---Mobile Filter--- */}
            <MobileFilterContainer>

                <MobileFilterSearch>
                <input className="search-box" type="textfield" maxLength={30} placeholder="search by name" onChange={handleSearchQuery}/>
                </MobileFilterSearch>

                <MobileFilterButton onClick={handleFilterPopup}>
                    <TuneRoundedIcon sx={{fontSize: 20}}/>
                    <span>Filters</span>
                </MobileFilterButton>

            </MobileFilterContainer>

            {/* ---Mobile Filter Pop-up--- */}
            <MobileFilterPopup $display={mobileFilterPopupState}>
                <MobileFilterPopupHeader>
                    <p>Filters</p>
                    <CancelRoundedIcon onClick={handleFilterPopup}/>
                </MobileFilterPopupHeader>

                <MobileFilterMain>
                    <FilterPopupOptions>
                        <ul onClick={handleFilterOption} >
                            {filterOptions.map((option, index) => (
                                <li
                                    key={index}
                                    ref={(el) => (filterOptionRef.current[index] = el)}
                                    tabIndex={index === focusedIndex ? "0" : "-1"}
                                >{option}</li>
                            ))}
                        </ul>
                    </FilterPopupOptions>

                    <FilterSelections>
                        {selectedFilterOption === "pricerange" &&
                            <MultiRangeSlider
                                min={100}
                                max={800}
                                step={100}
                                minVal={minPrice}
                                maxVal={maxPrice}
                                handleMaxVal={handleMaxChange}
                                handleMinVal={handleMinChange}
                            />
                        }

                        {selectedFilterOption === "mealtype" &&
                            <ul onClick={handleMealTypeChange}>
                                <li tabIndex={0}>
                                    <input type="checkbox" value="veg" />
                                    <span>veg</span>
                                </li>

                                <li tabIndex={0}>
                                    <input type="checkbox" value="non-veg"/>
                                    <span>non-veg</span>
                                </li>
                            </ul>
                        }

                        {selectedFilterOption === "mealcategory" &&
                            <ul style={{gap: '4px'}} onClick={handleMealCategoryChange}>
                                {mealCategorySelections.map((selection, index) => (
                                    <li
                                        key={index}
                                        tabIndex={0}
                                    >
                                        <input type="checkbox" value={selection} checked={mealCategories.includes(selection)}/>
                                        <span>{selection}</span>
                                    </li>
                                ))}
                            </ul>
                        }
                    </FilterSelections>
                </MobileFilterMain>
            </MobileFilterPopup>

            {/* ---Product View--- */}
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

                {filterProducts.length > 0 &&
                    filterProducts.map(product => (
                        <React.Fragment key={product.id}>
                            <ProductCard
                                product={product}
                            />
                            <ProductDivider/>
                        </React.Fragment>
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