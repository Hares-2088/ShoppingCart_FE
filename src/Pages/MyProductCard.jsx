import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MyProductCard = ({ product, handleRemoveFromCart }) => {
    return (
        <Card className="product-card bg-info">
            <Card.Img variant="top" src={product.item.image} alt={product.item.name} className="product-card mt-3" />
            <Card.Body>
                <Card.Title>{product.item.name}</Card.Title>
                <Card.Text>{product.item.description}</Card.Text>
                <Card.Text className="price">Price: ${product.item.price?.toFixed(2)}</Card.Text>
                <Button variant="danger" onClick={() => handleRemoveFromCart(product)}>
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Remove from Cart
                </Button>
            </Card.Body>
        </Card>
    );
};
export default MyProductCard;


