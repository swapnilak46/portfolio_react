// HeroSection.jsx
// Hero banner section converted from the original static HTML with Typed.js integration
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';

const HeroSection = () => {
  // Refs for the typed text animation and jarallax
  const typedEl = useRef(null);
  const typedStringsEl = useRef(null);
  const jarallaxRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js for the text typing animation
    let typed = null;
    
    if (typedEl.current && typedStringsEl.current) {
      const options = {
        stringsElement: typedStringsEl.current,
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
        backDelay: 1500
      };
      
      typed = new Typed(typedEl.current, options);
    }
      // Initialize Jarallax for the parallax background effect
    const jarallaxElement = jarallaxRef.current;
    if (jarallaxElement) {
      jarallax(jarallaxElement, {
        speed: 0.2,
        imgPosition: '50% 0%',
        imgSize: 'cover'
      });
    }
    
    // Cleanup function to destroy instances when component unmounts
    return () => {
      if (typed) {
        typed.destroy();
      }
      
      if (jarallaxElement) {
        jarallax(jarallaxElement, 'destroy');
      }
    };
  }, []);

  const scrollToAbout = (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#section-about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section 
      ref={jarallaxRef}
      aria-label="section" 
      className="jarallax no-top-md no-bottom sm-pt-120 overflow-hidden"
    >
      <img src="/images/background/l11.jpg" className="jarallax-img" alt="Background" />
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h5 className="s1 wow fadeInUp" data-wow-delay=".4s">Welcome to My Portfolio</h5>
            <div className="spacer-10"></div>
            <div className="h1 wow fadeInUp" data-wow-delay=".6s">
              Hi, I'm <span className="id-color">John Doe</span><br /><span style={{padding:"5px"}}>an</span>
              <div className="typed-strings" ref={typedStringsEl}>
                <p>AI Developer.</p>
                <p>Fullstack Engineer.</p>
                <p>Machine Learning Specialist.</p>
                <p>Cloud Solutions Architect.</p>
              </div>
              <div className="typed" ref={typedEl}></div>
            </div>
            <ul className="list_location wow fadeInUp" data-wow-delay=".8s">
              <li><span>USA</span>Remote / San Francisco, CA</li>
              <li><span>India</span>Mumbai</li>
              <li><span>Europe</span>Berlin, Germany</li>
            </ul>
            <div className="spacer-10"></div>
            <a 
              className="btn-main wow fadeInUp resume-btn" 
              data-wow-delay=".6s" 
              href="#section-resume"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                background: 'linear-gradient(90deg, #333 60%, #555 100%)',
                color: '#fff',
                border: 'none',
                borderRadius: '30px',
                padding: '12px 32px',
                fontWeight: 600,
                fontSize: '1.1rem',
                boxShadow: '0 4px 16px rgba(0,0,0,0.10)',
                transition: 'background 0.3s, box-shadow 0.3s',
                cursor: 'pointer',
                textDecoration: 'none',
                marginTop: '18px',
                letterSpacing: '0.5px',
              }}
            >
              View My Resume
              <span style={{
                display: 'inline-block',
                marginLeft: '6px',
                fontSize: '1.3em',
                transition: 'transform 0.2s',
              }}>&rarr;</span>
            </a>
          </div>
          <div className="col-md-6">
            <img src="/images/misc/8.png" className="img-fluid wow fadeInUp" data-wow-delay=".8s" alt="Profile" />
          </div>
        </div>
      </div>
      <a href="#section-about" className="mouse-icon-click scroll-to wow fadeInUp" data-wow-delay=".8s" onClick={scrollToAbout}>
        <span className="mouse fadeScroll relative" data-scroll-speed="10">
          <span className="scroll"></span>
        </span>
      </a>
      <div className="de-gradient-edge-bottom"></div>
    </section>
  );
};

export default HeroSection;
