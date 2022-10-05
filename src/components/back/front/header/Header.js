import React from 'react';
import { Link } from 'react-router-dom';
import words from '../../../../assets/words.png';
import './Header.css';
import styled from 'styled-components';

export default function Header({cartItems}) {
    return (
        <div className='header'>
                    <StyleLink to='/' className='logo'>
                        <img src={words} alt='logo' width='220px' height='65px'></img>
                    </StyleLink>
            <ul className='header-links'>
                <li>
                    <StyleLink to='/' className='slide'>Home</StyleLink>
                </li>
                <li>
                    <StyleLink to='/product' className='slide'>Product</StyleLink>
                </li>
                <li>
                    <StyleLink to='/cart' className='slide'>Cart</StyleLink>
                    <span className='cart-length'>{cartItems.length === 0 ? '' : cartItems.length}</span>
                </li>
                <li>
                    <StyleLink to='/contact' className='slide'>Contact</StyleLink>
                </li>
                
            </ul>
    </div>
    )
}

const StyleLink = styled(Link)`
    text-decoration: inherit;
    &:focus, &:hover, &:visited,
    &:link, &:active {
    text-decoration: inherit;
    color: inherit;
    }
`;