import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import FoodItem from '../components/FoodItem';
import foodData from '../data/foodData';
import { useCart } from '../context/CartContext';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const { getCartCount } = useCart();
  
  // Filter food items based on active category and search term
  const filteredItems = foodData.filter(item => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  return (
    <>
      {/* Menu header section */}
      <section className="ok">
        <div className="contain">
          <div className="row">
            <div className="section-title">
              <h2>Our Menu</h2>
              <p>
                Our menu is like falling into a world of foodie fantasies. A culinary adventure waiting to be explored, 
                with new flavors and taste around every corner. It's the perfect place to find your new favorite dish
              </p>
            </div>
          </div>
          <div className="search">
            <input 
              type="text" 
              placeholder="search for food" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div>
              <div className="j">
                <Link to="/cart">
                  <FontAwesomeIcon icon={faCartShopping} /> ({getCartCount()})
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Category navigation */}
      <section className="slide">
        <div className="discover">
          <h2>Discover</h2>
          <div className="all">
            <ul>
              <li>
                <a 
                  className={activeCategory === 'all' ? 'al' : ''} 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory('all');
                  }}
                >
                  All
                </a>
              </li>
              <li>
                <a 
                  className={activeCategory === 'meals' ? 'al' : ''} 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory('meals');
                  }}
                >
                  Meals
                </a>
              </li>
              <li>
                <a 
                  className={activeCategory === 'swallow' ? 'al' : ''} 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory('swallow');
                  }}
                >
                  Swallow
                </a>
              </li>
              <li>
                <a 
                  className={activeCategory === 'soups' ? 'al' : ''} 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory('soups');
                  }}
                >
                  Soups
                </a>
              </li>
              <li>
                <a 
                  className={activeCategory === 'extras' ? 'al' : ''} 
                  href="#" 
                  onClick={(e) => {
                    e.preventDefault();
                    setActiveCategory('extras');
                  }}
                >
                  Extras
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Food items display */}
      <div className="food">
        <div className="swallow">
          <h2>{activeCategory === 'all' ? 'All Items' : activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}</h2>
          <section className="menuu">
            {filteredItems.map(food => (
              <div key={food.id} className="row menu-tab-content active">
                <FoodItem food={food} />
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Menu;
