import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cart from './Cart';

const CartPage = () => {
    // const [cartItems, setCartItems] = useState([]);

    // useEffect(() => {
    //     // Fetch cart items from the backend
    //     fetchCartItems();
    // }, []);

    // const fetchCartItems = async () => {

    // };

    // const handleUpdateCartQty = (productId, newQuantity) => {
    //     // Update cart item quantity
    // };

    // const handleRemoveFromCart = (productId) => {
    //     // Remove item from cart
    // };

    // const handleEmptyCart = () => {
    //     // Empty the cart
    // };

    return (
        <div>
            <h1>My Items</h1>
            {/* <Cart
                cartItems={cartItems}
                onUpdateCartQty={handleUpdateCartQty}
                onRemoveFromCart={handleRemoveFromCart}
                onEmptyCart={handleEmptyCart}
            /> */}
        </div>
    );
}

export default CartPage;


