import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios library
import MyProductCard from './MyProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [userId, setUserId] = useState(null);

    useEffect(() => {
        // Retrieve user information from session storage
        const userString = sessionStorage.getItem("user");
        if (!userString) {
            console.error('User information not found in session storage');
            return;
        }
        const user = JSON.parse(userString);
        setUserId(user.id);
    }, []);

    useEffect(() => {
        if (userId) {
            // Fetch cart items for the current user when the component mounts
            fetchCartItems();
        }
    }, [userId]);

    // Function to fetch cart items for the current user
    const fetchCartItems = async () => {
        try {
            // Make GET request to fetch cart items for the current user
            const response = await axios.get(`http://localhost:8001/api/ext/user-cart/${userId}`);
            // Set the fetched cart items in state
            setCartItems(response.data);
        } catch (error) {
            console.error('Error fetching cart items:', error);
        }
    };

    const handleRemoveFromCart = async (item) => {
        try {
            // Make POST request to remove item from cart
            await axios.post(`http://localhost:8001/api/ext/remove-from-cart/${userId}/${item.item.id}`);
            
            window.location.reload();

            console.log('Item removed from cart successfully');
        } catch (error) {
            console.error('Error removing item from cart:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">My Cart</h1>
            {cartItems.length === 0 ? (
                <div className="text-center">
                    <FontAwesomeIcon icon={faShoppingCart} size="4x" className="mt-3"/>
                    <h1>Your cart is empty</h1>
                </div>
            ) : (
                <div className="row">
                    {cartItems.map(item => (
                        <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                            <MyProductCard product={item} handleRemoveFromCart={handleRemoveFromCart}/>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CartPage;
