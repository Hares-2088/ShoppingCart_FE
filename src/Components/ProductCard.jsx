import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCard = ({ product, onAddToCart }) => {
    return (
        <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <button className="btn btn-primary" onClick={() => onAddToCart(product.id)}>
                    <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;


