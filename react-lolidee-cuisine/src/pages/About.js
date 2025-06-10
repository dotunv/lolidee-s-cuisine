import React from 'react';

const About = () => {
  return (
    <>
      <div className="about-container">
        <div className="about-header">
          <h1>About Us</h1>
          <p>Learn more about Lolidee's Cuisine and our journey</p>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img src="/images/images (69).jpeg" alt="About Lolidee's Cuisine" />
          </div>
          <div className="about-text">
            <h2>Our Story</h2>
            <p>
              Lolidee's Cuisine was born out of a passion for authentic Nigerian cuisine. 
              Our founder, Lolidee, started this journey with a simple goal: to share the rich, 
              flavorful dishes of Nigeria with the world.
            </p>
            <p>
              What began as a small home kitchen has now grown into a beloved culinary destination, 
              where every dish is prepared with love, using traditional recipes and the freshest ingredients.
            </p>
            <p>
              At Lolidee's Cuisine, we believe that food is more than just sustenance—it's a way to connect, 
              to celebrate, and to share our cultural heritage. Every bite tells a story, and we're excited 
              to share our stories with you.
            </p>
          </div>
        </div>
        
        <div className="our-mission">
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide authentic, high-quality Nigerian cuisine that delights our customers 
            and introduces them to the rich culinary traditions of Nigeria. We are committed to using fresh, 
            locally-sourced ingredients and traditional cooking methods to create dishes that are both delicious 
            and culturally authentic.
          </p>
        </div>
        
        <div className="our-team">
          <h2>Meet Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/images/sub-image.jpg" alt="Team Member" />
              <h3>Lolidee Johnson</h3>
              <p>Founder & Head Chef</p>
            </div>
            <div className="team-member">
              <img src="/images/sub-image.jpg" alt="Team Member" />
              <h3>Adeola Williams</h3>
              <p>Executive Chef</p>
            </div>
            <div className="team-member">
              <img src="/images/sub-image.jpg" alt="Team Member" />
              <h3>Tunde Bakare</h3>
              <p>Sous Chef</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

