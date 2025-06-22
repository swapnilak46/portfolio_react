// QuoteSection.jsx
// Quote section with jarallax background
import React, { useEffect, useRef } from 'react';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';
// Import the WOW constructor from wow.js package
import WOW from 'wow.js';
// Import animate.css for animations
import 'animate.css';

const QuoteSection = () => {
  const jarallaxRef = useRef(null);
  
  useEffect(() => {
    // Initialize jarallax
    const jarallaxElement = jarallaxRef.current;
    if (jarallaxElement) {
      jarallax(jarallaxElement, {
        speed: 0.2,
        imgPosition: '50% 50%',
        imgSize: 'cover'
      });
    }
    
    // Initialize WOW.js for animations
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: true,
      live: true
    });
    wow.init();
    
    // Cleanup function
    return () => {
      if (jarallaxElement) {
        jarallax(jarallaxElement, 'destroy');
      }
    };
  }, []);
  
  return (    <section 
      id="section-my-quote" 
      ref={jarallaxRef}
      aria-label="section" 
      className="jarallax no-top no-bottom"
    >
      <div className="de-gradient-edge-top"></div>
      <img src="/images/background/l11.jpg" className="jarallax-img" alt="Background" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-10 offset-md-1">
            <blockquote className="q-big wow fadeIn" data-wow-duration="3s">
              <i className="d-big icon_quotations"></i>
              "The future belongs to those who build it. Every line of code is a step toward solving real-world problems with intelligence and creativity."
              <span className="d-quote-by">John Doe, AI Developer</span>
            </blockquote>
            <div className="spacer-double"></div>
          </div>
        </div>
      </div>
      <div className="de-gradient-edge-bottom"></div>
    </section>
  );
};

export default QuoteSection;
