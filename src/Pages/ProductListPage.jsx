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
        // Fetch products from the server
        // Example: fetchProducts();
        // setProducts(responseData);
    }, []);

    useEffect(() => {
        // Filter products based on search term
        const filtered = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }, [products, searchTerm]);

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
                {filteredProducts.map(product => (
                    <div key={product.id} className="col-sm-12 col-md-6 col-lg-4 mb-3">
                        <ProductCard product={product} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductListPage;

