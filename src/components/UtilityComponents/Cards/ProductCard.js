import { useState } from "react";
import styled from "styled-components";
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

const ProductCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    width: 100%;
    gap: 16px;
    padding: 16px;
    border: 1px solid grey;
`;

const ProductInfo = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
`;

const ProductCategory = styled.img`
    width: 16px;
    height: 16px;
    object-fit: cover;
`;

const ProductTitle = styled.h1`
    font-size: 20px;
    font-weight: 600;
    color: #322f10;
`;

const ProductPrice = styled.p`
    font-size: 20px;
    font-weight: 500;
    color: darkgrey;
`;

const ProductDescription = styled.p`
    font-size: 15px;
    font-weight: 400;
    color: #c3c3c3;
`;

const ProductImgContainer = styled.div`
    position: relative;
    width: 100px;
    height: 100px;

    @media (max-width: 600px){
        width: 60px;
        height: 60px;
    }
`;

const ProductImg = styled.img`
    width: 100%;
    object-fit: cover;
`;

const AddOrder = styled.div`
    position: absolute;
    display: flex;
    width: 120px;
    height: 40px;
    bottom: -20px;
    align-item: center;
    justify-content: center;
    background: #ffffff;
    border: 1px solid #151c07;
    border-radius: 8px;
    drop-shadow: 0px 2px 12px 2px #151c0720;
    z-index: 10;
`;

const AddOrderButton = styled.button`
    width: 100%;
    font-family: Roboto;
    font-size: 18px;
    font-weight: 700;
    color: #475e17;
    text-align: center;
`;

const AddQuantity = styled.button`
    position: absolute;
    display: flex;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    left: 4px;
    top: 16%;
    background: none;
    border: none;
    cusror: pointer;
`;

const DeductQuantity = styled.button`
    position: absolute;
    display: flex;
    width: 24px;
    height: 24px;
    align-items: center;
    justify-content: center;
    right: 4px;
    top: 16%;
    background: none;
    border: none;
    cursor: pointer;
`;

const OrderQuantity = styled.div`
    display: flex;
    height: 100%;
    font-size: 16px;
    font-weight: 600;
    align-items: center;
    jsutify-content: center;
`;



export const ProductCard = ({category, dishName, price, description, imgsrc}) => {

    const [quantity, setQuantity] = useState(1);
    const [addOrderClick, setAddOrderClick] = useState(false);

    const handleOrder = (e) => {
        const currentQuantity = quantity;
        let newQuantity = 0;
        console.log("called handle");
        if (e === "Add"){
            newQuantity = currentQuantity + 1;
            setQuantity(newQuantity);
            console.log("called cndtn 1");
        };
        if (e === "Deduct"){
            newQuantity = currentQuantity - 1;
            setQuantity(newQuantity);
            console.log("called cndtn 2");
        };
    };

    return(
        <ProductCardContainer>
            <ProductInfo>
                {category === "veg" && <ProductCategory src="./veg.png" alt="veg"/>}
                {category === "non-veg" && <ProductCategory src="./non-veg.png" alt="non-veg"/>}
                <ProductTitle>{dishName ? dishName : "Dish Name"}</ProductTitle>
                <ProductPrice>{price ? price : "price"}</ProductPrice>
                <ProductDescription>{description ? description : "Product Description"}</ProductDescription>
            </ProductInfo>

            <ProductImgContainer>
                <ProductImg src={imgsrc} alt="product-image"/>
                <AddOrder>
                    { !addOrderClick ?
                        <>
                        <AddQuantity id="Add" onclick={(e)=>handleOrder(e.target.id)}>
                            <AddRoundedIcon />
                        </AddQuantity>
                        <OrderQuantity>{quantity}</OrderQuantity>
                        <DeductQuantity id="Deduct" onclick={(e)=>handleOrder(e.target.id)}>
                            <RemoveRoundedIcon />
                        </DeductQuantity>
                        </>
                        : <AddOrderButton onClick={()=>setAddOrderClick(true)}>ADD</AddOrderButton> }
                </AddOrder>
            </ProductImgContainer>

        </ProductCardContainer>
    );
};