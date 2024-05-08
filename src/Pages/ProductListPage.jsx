import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios library
import ProductCard from './ProductCard';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [productId, setProductId] = useState('');

    useEffect(() => {
        // Fetch products from the server when the component mounts
        fetchProducts();
    }, []);

    useEffect(() => {
        // Filter products based on search term
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [products, searchTerm]);

    // Function to fetch products from the server
    const fetchProducts = async () => {
        try {
            // Make GET request to fetch all items
            const response = await axios.get('http://localhost:8001/api/ext/getItems');
            // Set the fetched products in state
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    // Function to handle adding an item to the cart
    const handleAddToCart = async (item) => {
        try {
            // Retrieve user information from session storage
            const userString = sessionStorage.getItem("user");
            if (!userString) {
                console.error('User information not found in session storage');
                return;
            }
            const user = JSON.parse(userString);

            // Make POST request to add item to cart
            await axios.post('http://localhost:8001/api/ext/add-to-cart', {
                user_id: user.id,
                item_id: item.id,
                quantity: 1, // You can adjust this if needed
            });

            console.log('Item added to cart successfully');
        } catch (error) {
            console.error('Error adding item to cart:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Product List</h1>
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <input
                        type="text"
                        className="form-control mb-3"
                        placeholder="Search by name..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="row">
                {filteredProducts.map(item => (
                    <div key={item.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <ProductCard product={item} handleAddToCart={handleAddToCart} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListPage;
