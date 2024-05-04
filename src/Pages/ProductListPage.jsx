import React, { useState, useEffect } from 'react';
import ProductCard from '../Components/ProductCard';

const ProductListPage = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const urlParams = new URLSearchParams(window.location.search);
    const name = urlParams.get('name');
    const email = urlParams.get('email');



    useEffect(() => {
        // Fetch products from backend and set state
        // Example: fetchProducts();
        // setProducts(placeholderProducts);
        // setFilteredProducts(placeholderProducts);
    }, []);

    useEffect(() => {
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [products, searchTerm]);

    return (
        <div>
            <h1>Product List</h1>
            <input
                type="text"
                placeholder="Search by name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="container mt-4">
                <div className="row">
                    {filteredProducts.map(product => (
                        <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <h1>Welcome to the Main Page</h1>
                <p>Hello, {name}!</p>
                <p>Email: {email}</p>
            </div>
        </div>
    );
}

export default ProductListPage;
