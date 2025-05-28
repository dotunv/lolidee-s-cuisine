import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

const Confirmation = () => {
  const { cartItems, getTotalPrice } = useCart();
  
  // Generate a random order number
  const orderNumber = Math.floor(100000 + Math.random() * 900000);
  
  // Clear cart after successful order
  useEffect(() => {
    // In a real application, you would only clear the cart after confirming the order was processed
    localStorage.removeItem('cart');
    // Force a page reload to update the cart state
    // In a production app, you would use a better state management approach
    setTimeout(() => {
      window.location.reload();
    }, 5000);
  }, []);
  
  return (
    <div className="confirmation-container">
      <div className="confirmation-content">
        <FontAwesomeIcon icon={faCheckCircle} className="success-icon" />
        <h2>Order Confirmed!</h2>
        <p>Thank you for your order. Your order has been received and is being processed.</p>
        
        <div className="order-details">
          <h3>Order Details</h3>
          <p><strong>Order Number:</strong> #{orderNumber}</p>
          <p><strong>Order Date:</strong> {new Date().toLocaleDateString()}</p>
          <p><strong>Order Total:</strong> ₦{(getTotalPrice() + 500).toLocaleString()}</p>
          
          <div className="order-items">
            <h4>Items Ordered:</h4>
            <ul>
              {cartItems.map(item => (
                <li key={item.id}>
                  {item.name} x {item.quantity} - ₦{(item.price * item.quantity).toLocaleString()}
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <p className="delivery-note">
          Your order will be delivered within 30-45 minutes. You will receive a call from our delivery person when they are nearby.
        </p>
        
        <div className="confirmation-actions">
          <Link to="/" className="btn">Return to Home</Link>
          <Link to="/menu" className="btn">Order More</Link>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
