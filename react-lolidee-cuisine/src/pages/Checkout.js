import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const { cartItems, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: 'card'
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would process the payment and order here
    console.log('Order submitted:', { items: cartItems, customer: formData, total: getTotalPrice() + 500 });
    
    // Navigate to confirmation page
    navigate('/confirm');
  };
  
  if (cartItems.length === 0) {
    return (
      <div className="empty-cart">
        <h3>Your cart is empty</h3>
        <p>You need to add items to your cart before checkout</p>
        <Link to="/menu" className="btn">Browse Menu</Link>
      </div>
    );
  }
  
  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      
      <div className="checkout-content">
        <div className="order-summary">
          <h3>Order Summary</h3>
          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item.id} className="summary-item">
                <div className="item-info">
                  <span>{item.name} x {item.quantity}</span>
                </div>
                <div className="item-price">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </div>
              </div>
            ))}
          </div>
          
          <div className="summary-totals">
            <div className="summary-row">
              <span>Subtotal</span>
              <span>₦{getTotalPrice().toLocaleString()}</span>
            </div>
            <div className="summary-row">
              <span>Delivery Fee</span>
              <span>₦500</span>
            </div>
            <div className="summary-row total">
              <span>Total</span>
              <span>₦{(getTotalPrice() + 500).toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        <div className="checkout-form">
          <h3>Delivery Information</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="address">Delivery Address</label>
              <textarea
                id="address"
                name="address"
                rows="3"
                value={formData.address}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <div className="form-group">
              <label>Payment Method</label>
              <div className="payment-options">
                <div className="payment-option">
                  <input
                    type="radio"
                    id="card"
                    name="paymentMethod"
                    value="card"
                    checked={formData.paymentMethod === 'card'}
                    onChange={handleChange}
                  />
                  <label htmlFor="card">Card Payment</label>
                </div>
                
                <div className="payment-option">
                  <input
                    type="radio"
                    id="cash"
                    name="paymentMethod"
                    value="cash"
                    checked={formData.paymentMethod === 'cash'}
                    onChange={handleChange}
                  />
                  <label htmlFor="cash">Cash on Delivery</label>
                </div>
              </div>
            </div>
            
            <button type="submit" className="btn">Complete Order</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
