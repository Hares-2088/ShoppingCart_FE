import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary" onClick={() => onAddToCart(product.id)}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;

