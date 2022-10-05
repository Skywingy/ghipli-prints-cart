import React from 'react';
import './Cart.css';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
    return (
        <div className='Cart'>
            <div className='cart-header'>Cart Items </div>
            <div className='clear-cart'>
                {cartItems.length >= 1 && (
                    <button className='clear-button' onClick={handleCartClearance}>Clear Cart</button>
                )}
            </div>
            {cartItems.length === 0 && <div className='empty msg'>Your Cart is empty</div>}
            <div>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-list">
                        <img 
                        className='cart-list-image'
                        src={item.image} 
                        alt={item.title}></img>
                        <div className='cart-list-name'>{item.title}</div>
                        <div className='cart-list-price'>${item.price}</div>
                        <div className='cart-list-funct'>
                            <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                            <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>
                        </div>
                        <div className='quantity'>{item.quantity}</div>
                        
                        
                    </div> 
                ))}
            </div>
            <div className='Total'>
                            Total Price
                            <div>${totalPrice}</div>
            </div>
        </div>
    )
}

export default Cart
