// Footer.jsx
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section brand">
        <h2>GujaratSafar</h2>
        <p>
          Your companion to explore the vibrant culture, rich history, and breathtaking destinations across Gujarat. Discover the unseen.
        </p>
      </div>

      <div className="footer-section links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Top Destinations</a></li>
          <li><a href="#">Traveler Stories</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>

      <div className="footer-section contact">
        <h3>Connect With Us</h3>
        <p>support@gujaratsafar.in</p>
        <p>+91 98765 43210</p>
        <div className="social-icons">
          <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 GujaratSafar. All rights reserved.</p>
        <p>Built with <span className="heart">❤️</span> by Team GujaratSafar</p>
      </div>
    </footer>
  );
};

export default Footer;
