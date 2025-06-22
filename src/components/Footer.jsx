// Footer.jsx
// Footer component with copyright and social media links
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <a href="/">
              <span className="copy">&copy; Copyright 2025 - John Doe, AI Developer & Fullstack Engineer</span>
            </a>
          </div>
          <div className="col-md-6">
            <div className="social-icons">
              <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
              <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
              <a href="#"><i className="fa fa-linkedin fa-lg"></i></a>
              <a href="#"><i className="fa fa-pinterest fa-lg"></i></a>
              <a href="#"><i className="fa fa-rss fa-lg"></i></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
