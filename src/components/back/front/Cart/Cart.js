import React from 'react';
import './Cart.css';
import box from '../../../../assets/box.png'
const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance }) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0)
    return (
        <div className='Cart'>
            {cartItems.length !== 0 && <div className='cart-header'>Your Cart </div>}
            
            
            {cartItems.length === 0 && <div className='empty msg'>Your Cart is empty</div>}
            {cartItems.length === 0 && <div className='emptyLogo'><img src={box} alt="logo"></img></div>}
            <div className='item'>
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-list">
                        <div className='left'>
                        <img 
                        className='cart-list-image'
                        src={item.image} 
                        alt={item.title}></img>
                        </div>
                        <div className='right'>
                            <div className='up'>
                                <div className='cart-list-name'>{item.title}</div>
                            </div>
                            <div className='down'>
                                <div className='cart-list-price'>${item.price}</div>
                                <div className='cart-list-funct'>
                                <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}> - </button>
                                <div className='quantity'>{item.quantity}</div>
                                <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                                </div>
                        </div>
                        </div>
                        
                        
                    </div> 
                ))}
            </div>
            {cartItems.length !== 0 && <div className='Total'>
                            Total: ${totalPrice}
            </div>}

            <div className='clear-cart'>
                {cartItems.length >= 1 && (
                    <button className='clear-button' onClick={handleCartClearance}>Clear Cart</button>
                )}
            </div>
            <div className='checkout-cart'>
                {cartItems.length >= 1 && (
                    <button className='clear-button' onClick={handleCartClearance}>checkout</button>
                )}
            </div>

            
            
        </div>
    )
}

export default Cart
