import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { useCart } from '../context/CartContext';

const FoodItem = ({ food }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(food);
  };

  return (
    <div className="menu-item">
      <div className="menu-item-title">
        <div className="love">
          <FontAwesomeIcon icon={faHeart} />
          <img src={food.image} alt={food.name} />
        </div>
        <div className="menu-item-title-sub">
          <div className="sub">
            <h3>
              {food.name} <FontAwesomeIcon icon={faStar} />
              <h1 className="h">{food.rating}</h1>
            </h3>
            <h5>{food.description}</h5>
          </div>
          <div className="down">
            <h3>₦{food.price.toLocaleString()}</h3>
            <a className="btn" onClick={handleAddToCart}>Add to cart</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;

