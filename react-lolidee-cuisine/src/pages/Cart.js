import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faPlus, faMinus, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    removeFromCart, 
    increaseQuantity, 
    decreaseQuantity, 
    getCartCount,
    getTotalPrice
  } = useCart();
  
  return (
    <>
      {/* Cart header */}
      <div className="horder">
        <h2>My Cart</h2>
        <div className="g">
          <Link to="/cart">
            <FontAwesomeIcon icon={faCartShopping} /> Carts({getCartCount()})
          </Link>
        </div>
      </div>
      
      {/* Cart items */}
      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h3>Your cart is empty</h3>
          <p>Add some delicious items to your cart</p>
          <Link to="/menu" className="btn">Browse Menu</Link>
        </div>
      ) : (
        <>
          <section className="ord">
            <section className="order">
              {cartItems.map(item => (
                <div key={item.id} className="orders">
                  <div className="img">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="whole">
                    <div className="one">
                      <h3>{item.name}</h3>
                      <FontAwesomeIcon 
                        icon={faTrashCan} 
                        onClick={() => removeFromCart(item.id)}
                        style={{ cursor: 'pointer' }}
                      />
                    </div>
                    <div className="two">
                      <h3>₦{(item.price * item.quantity).toLocaleString()}</h3>
                      <div className="three">
                        <FontAwesomeIcon 
                          icon={faMinus} 
                          onClick={() => decreaseQuantity(item.id)}
                          style={{ cursor: 'pointer' }}
                        />
                        {item.quantity}
                        <FontAwesomeIcon 
                          icon={faPlus} 
                          onClick={() => increaseQuantity(item.id)}
                          style={{ cursor: 'pointer' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </section>
          
          {/* Order summary */}
          <section className="hub">
            <div className="delivery">
              <h2>Order Summary</h2>
            </div>
            <section className="process">
              <div className="sub">
                <h3>Subtotal</h3>
                <h3>₦{getTotalPrice().toLocaleString()}</h3>
              </div>
              <div className="del">
                <h3>Delivery Fee</h3>
                <h3>₦500</h3>
              </div>
              <div className="pay">
                <h3>Total Payment</h3>
                <h3>₦{(getTotalPrice() + 500).toLocaleString()}</h3>
              </div>
              <Link to="/checkout" className="btn">Process Order</Link>
            </section>
          </section>
        </>
      )}
    </>
  );
};

export default Cart;

