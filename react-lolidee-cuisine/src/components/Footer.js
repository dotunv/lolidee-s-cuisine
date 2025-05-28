import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer>
      <div className="footer" id="footer">
        <div className="container">
          <div className="phase">
            <h2>Lolidee's Cuisine</h2>
          </div>
          <p>Every bite tells a story. Experience the best of Nigerian cuisine with our carefully crafted dishes.</p>
        </div>
        <div className="about">
          <h3>About</h3>
          <ul>
            <li>About us</li>
            <li>Blog</li>
            <li>Cart</li>
            <li>Content</li>
          </ul>
        </div>
        <div className="categories">
          <h3>Categories</h3>
          <ul>
            <li>Swallow</li>
            <li>Soups</li>
            <li>Extras</li>
            <li>Snacks</li>
          </ul>
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>No 14, Osuntokun street, Bodija, Ibadan</li>
            <li>+23470986547</li>
            <li>info@gmail.com</li>
          </ul>
          <div className="social-links">
            <li>
              <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            </li>
            <li>
              <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
            </li>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

