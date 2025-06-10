import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a server
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset submission status after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };
  
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out to us with any questions, feedback, or inquiries.</p>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <FontAwesomeIcon icon={faLocationDot} className="icon" />
            <div>
              <h3>Our Location</h3>
              <p>No 14, Osuntokun street, Bodija, Ibadan</p>
            </div>
          </div>
          
          <div className="info-item">
            <FontAwesomeIcon icon={faPhone} className="icon" />
            <div>
              <h3>Phone Number</h3>
              <p>+23470986547</p>
            </div>
          </div>
          
          <div className="info-item">
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <div>
              <h3>Email Address</h3>
              <p>info@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-image">
            <img src="/images/contact.jpg" alt="Contact Us" />
          </div>
        </div>
        
        <div className="contact-form">
          <h2>Send us a Message</h2>
          {formSubmitted && (
            <div className="success-message">
              Your message has been sent successfully! We'll get back to you soon.
            </div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
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
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

