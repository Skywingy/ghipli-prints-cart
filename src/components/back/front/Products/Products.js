import React from 'react';
import './Products.css';
import styled from 'styled-components';

const Products = ({productItems, handleAddProduct}) => {
    return (
        <div className='products'>
            {productItems.map((productItem) => (
                <CardWrapper className='card' key={productItem.id}>
                        <Image className='image' src={productItem.image} alt={productItem.title}></Image>    
                        <br></br>      
                        <Title className='title'>{productItem.title}</Title>
                        <p className='quote'>{productItem.quote}</p>
                        <Button className='addToCart' onClick={()   =>handleAddProduct(productItem)}>Add to cart</Button>
                </CardWrapper>
            ))}
        </div>
    )
}
const CardWrapper = styled.div`
    display: flex;
    flex-direction: column;
    color: #414241;
    background-color: snow;
    width: 350px;
    border-radius: 2px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 3px 10px;
    transition: transform 0.3s;
    cursor: pointer;
    &:hover {
    transform: scale(1.05);
}
`
const Image = styled.img`
    padding: 1.2rem;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
`

const Button = styled.button`
margin: auto;
margin-bottom: 50px;
cursor: pointer;
text-transform: uppercase;
display: block;
`
const Title = styled.h2`
padding: 0 1.2rem 0 1.2rem
`

export default Products
