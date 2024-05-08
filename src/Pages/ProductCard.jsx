import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ProductCard = ({ product, handleAddToCart }) => {
    return (
        <Card className="product-card bg-info">
            <Card.Img variant="top" src={product.image} alt={product.name} className="product-card mt-3" />
            <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="price">Price: ${product.price.toFixed(2)}</Card.Text>
                <Button variant="primary" onClick={() => handleAddToCart(product)}>
                    <FontAwesomeIcon icon={faCartPlus} className="mr-2" />
                    Add to Cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;


