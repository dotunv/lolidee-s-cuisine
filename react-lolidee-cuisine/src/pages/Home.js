import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faMartiniGlassCitrus, faChessQueen, faStar, faHeart } from '@fortawesome/free-solid-svg-icons';
import { useCart } from '../context/CartContext';
import foodData from '../data/foodData';

const Home = () => {
  const { addToCart } = useCart();
  
  // Get featured items (first 6 items)
  const featuredItems = foodData.slice(0, 6);
  
  return (
    <>
      {/* Hero section */}
      <main className="home">
        <div className="homepage">
          <div className="text">
            <h2>Every Bite Tells A Story</h2>
            <p>
              Let's take a culinary journey around the world, one dish at a time, every dish is a chapter in our culinary 
              journey, every morsel is a testament to the efforts that goes into creating an unforgettable experience. Take a 
              bite, and let the story unfold.
            </p>
            <Link className="btn" to="/menu">Get Started</Link>
            <Link className="butn" to="/menu">Explore Menu</Link>
          </div>
        </div>
        <div className="slide">
          <img src="/images/homepage.jpg" alt="Delicious food" />
        </div>
      </main>
      
      {/* Icon section */}
      <div className="icon-container">
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faBowlFood} /></a>
          <h3>Quality food</h3>
          <p>Our commitment to quality ensures that every dish that leaves our kitchen is a masterpiece, bursting with flavor and passion</p>
        </div>
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faMartiniGlassCitrus} /></a>
          <h3>Food and drinks</h3>
          <p>Explore our extensive menu, featuring diverse range of options to satisfy any cravings.</p>
        </div>
        <div className="icons">
          <a href="#"><FontAwesomeIcon icon={faChessQueen} /></a>
          <h3>Expert chef</h3>
          <p>Our kitchen is a hub of creativity and expertise, we have chefs with years of experience and passion for innovation</p>
        </div>
      </div>
      
      {/* Our Specials section */}
      <section className="food">
        <div className="heading">
          <h2>Our Specials</h2>
          <p>Our Chef specials are the star of the show you won't want to miss them</p>
        </div>
        
        <section className="menuu">
          {featuredItems.slice(0, 3).map(item => (
            <div key={item.id} className="row menu-tab-content active">
              <div className="menu-item">
                <div className="menu-item-title">
                  <div className="love">
                    <FontAwesomeIcon icon={faHeart} />
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="menu-item-title-sub">
                    <div className="sub">
                      <h3>
                        {item.name} <FontAwesomeIcon icon={faStar} />
                        <h1 className="h">{item.rating}</h1>
                      </h3>
                      <h5>{item.description}</h5>
                    </div>
                    <div className="down">
                      <h3>₦{item.price.toLocaleString()}</h3>
                      <a className="btn" onClick={() => addToCart(item)}>Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        
        <section className="menuu">
          {featuredItems.slice(3, 6).map(item => (
            <div key={item.id} className="row menu-tab-content active">
              <div className="menu-item">
                <div className="menu-item-title">
                  <div className="love">
                    <FontAwesomeIcon icon={faHeart} />
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="menu-item-title-sub">
                    <div className="sub">
                      <h3>
                        {item.name} <FontAwesomeIcon icon={faStar} />
                        <h1 className="h">{item.rating}</h1>
                      </h3>
                      <h5>{item.description}</h5>
                    </div>
                    <div className="down">
                      <h3>₦{item.price.toLocaleString()}</h3>
                      <a className="btn" onClick={() => addToCart(item)}>Add to cart</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        
        <div className="btn">
          <Link to="/menu">Explore our menu</Link>
        </div>
      </section>
      
      {/* Tutorials section */}
      <div className="tutorials">
        <div className="tutorial-image">
          <img src="/images/images (69).jpeg" alt="Cooking tutorial" />
        </div>
        <div className="texy">
          <h2>You are what you eat</h2>
          <p>
            Learn various ways to prepare healthy meals through these tutorials and recipe.
            I'm always happy to provide tutorials and tips for anyone interested in learning
            more about cooking. join our online cooking class
          </p>
          <a className="btn" href="#">Click to join</a>
        </div>
      </div>
    </>
  );
};

export default Home;
