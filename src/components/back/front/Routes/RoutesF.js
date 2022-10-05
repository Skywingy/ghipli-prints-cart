import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Products from '../Products/Products';
import Contact from '../Contact/Contact';
import Cart from '../Cart/Cart';
import Home from '../Home/Home';
import './RoutesF.css';

const RoutesF = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    return (
        <div className='container'>
            <Routes>
                <Route path='/' exact element={<Home/>} />   
                <Route path='/product' exact element={<Products 
                productItems={productItems} 
                handleAddProduct={handleAddProduct}/>} />
                <Route path='/cart' exact element={<Cart 
                cartItems={cartItems} 
                handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct}
                handleCartClearance={handleCartClearance} />}/>
                <Route path='/contact' exact element={<Contact/>} />     
                
            </Routes>
        </div>
    )
}

export default RoutesF
