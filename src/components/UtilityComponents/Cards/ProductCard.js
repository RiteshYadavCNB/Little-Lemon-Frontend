import { useEffect, useState } from "react";
import styled from "styled-components";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { useCartItemContext } from "src/Context/CartItemsContext";

const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    width: 100%;
    gap: 30px;
    margin-bottom: 20px;

    @media(max-width: 768px){
        gap: 16px;
    }
`;

const ProductInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const ProductType = styled.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`;

const ProductTitle = styled.h1`
    font-size: 20px;
    font-weight: 700;
    color: #322f10;

    @media(max-width: 600px){
        font-size: 18px;
    }
`;

const ProductPrice = styled.p`
    font-size: 20px;
    font-weight: 700;
    color:rgb(60, 87, 3);
`;

const GeneralDiv = styled.div`
    display: flex;
    width: 100%;
    gap: 12px;
    align-items: center;
    margin: 8px 0px;
    color:rgb(51, 51, 51);
`;

const ProductCategory = styled.p`
    font-size: 14px;
    font-weight: 500;
    color: #645e21;
    padding: 2px 8px;
    border: 1px solid #645e21;
    border-radius: 8px;

    @media(max-width: 600px){
        font-size: 12px;
    }
`;

const ProductStatus = styled.p`
    width: max-content;
    font-size: 14px;
    font-weight: 500;
    padding: 4px 12px;
    color: ${(props) => props.color};
    background: ${(props)=> props.bgColor};
    border-radius: 8px;

    @media(max-width: 600px){
        font-size: 12px;
    }
`;

const ProductDescription = styled.p`
    font-size: 15px;
    font-weight: 500;
    color: #4E4E4E;

    @media(max-width: 600px){
        font-size: 13px;
    }
`;

const ProductImgContainer = styled.div`
    position: relative;
    display: flex;
    width: 160px;
    height: 140px;
    padding: 6px;
    border-radius: 20px;
    background: linear-gradient(rgb(255, 255, 255, 0.1) -8%,
                    rgb(223, 223, 224, 0.5) 40%,
                    rgb(0, 0, 0, 0.5) 100%);

    @media (max-width: 600px){
        width: 140px;
        height: 120px;
    }
`;

const ProductImg = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 16px;
`;

const AddOrder = styled.div`
    position: absolute;
    display: flex;
    width: 120px;
    height: 40px;
    bottom: -20px;
    left: 50%;
    transform: translate(-50%, 0%);
    align-items: center;
    justify-content: space-between;
    padding: 0px 12px;
    background: #ffffff;
    border: 1px solid #645e2130;
    border-radius: 8px;
    box-shadow: inset 0px 0px 8px 1px #645e2120;
    filter: drop-shadow(0px 8px 12px #00000012);
    z-index: 10;
`;

const AddOrderButton = styled.button`
    width: 100%;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    color: #475e17;
    background: none;
    border: none;
    cursor: pointer;
`;

const ChangeQuantity = styled.button`
    width: 24px;
    height: 24px;
    background: #ffffff;
    border: none;
    cursor: pointer;
`;

const OrderQuantity = styled.div`
    display: flex;
    width: 30px;
    height: 80%;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    justify-content: center;
    background: #fdf7ba70;
    border-radius: 50%;
`;



export const ProductCard = ({ product }) => {


    const {id, mealType, category, name, price, description, image, availability} = product;

    const { cartItems, updateCart } = useCartItemContext();
    const existingProduct = cartItems.find((item) => item.id === id);
    const quantity = existingProduct?.quantity || 0;


    const handleAdd = () => updateCart(product, quantity + 1);
    const handleRemove = () => updateCart(product, quantity - 1);



    return(
        <ProductCardContainer>
            <ProductInfo>
                {mealType === "veg" && <ProductType src="./veg.png" alt="veg"/>}
                {mealType === "non-veg" && <ProductType src="./non-veg.png" alt="non-veg"/>}
                <ProductTitle>{name ? name : "Dish Name"}</ProductTitle>
                <ProductPrice>{price ? `₹ ${price}` : "price"}</ProductPrice>
                <GeneralDiv>
                    {category && <ProductCategory>{category}</ProductCategory>}
                    {availability ? <ProductStatus color="#008000" bgColor="#D0F0C0">Pan on Stove</ProductStatus> :
                        <ProductStatus color="#800000" bgColor="#fd5c6340">Out of Stock</ProductStatus>}
                </GeneralDiv>
                <ProductDescription>{description || "Product Description"}</ProductDescription>
            </ProductInfo>

            <ProductImgContainer>
                <ProductImg src={image} alt="product-image"/>
                <AddOrder>
                    { quantity > 0 ?
                        <>
                            <ChangeQuantity id="Deduct" onClick={handleRemove}>
                                <RemoveRoundedIcon sx={{color: '#7e7629'}} />
                            </ChangeQuantity>

                            <OrderQuantity>{ quantity }</OrderQuantity>

                            <ChangeQuantity id="Add" onClick={handleAdd}>
                                <AddRoundedIcon sx={{color: '#7e7629'}}/>
                            </ChangeQuantity>
                        </> :
                        <AddOrderButton id="AddProduct" onClick={handleAdd}>ADD</AddOrderButton>}
                </AddOrder>
            </ProductImgContainer>

        </ProductCardContainer>
    );
};