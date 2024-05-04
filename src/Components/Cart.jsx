import React from 'react';

const Cart = ({ cartItems, onUpdateCartQty, onRemoveFromCart, onEmptyCart }) => {
    const handleEmptyCart = () => onEmptyCart();

    const renderEmptyMessage = () => (
        <p>Your cart is empty.</p>
    );

    const renderCart = () => (
        <div>
            {cartItems.map(item => (
                <div key={item.id} style={{ marginBottom: '20px' }}>
                    <h4>{item.name}</h4>
                    <div>
                        <img src={item.image} alt={item.name} style={{ width: '90px', height: '90px' }} />
                    </div>
                    <div>
                        <button onClick={() => onUpdateCartQty(item.id, item.quantity - 1)}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => onUpdateCartQty(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div>${item.price * item.quantity}</div>
                    <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                </div>
            ))}
            <div>
                <h3>Total: ${calculateTotal()}</h3>
                <button onClick={handleEmptyCart}>Empty Cart</button>
            </div>
        </div>
    );

    const calculateTotal = () => {
        return cartItems.reduce((acc, currentItem) => acc + currentItem.price * currentItem.quantity, 0).toFixed(2);
    };

    return (
        <div>
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? renderEmptyMessage() : renderCart()}
        </div>
    );
}

export default Cart;
