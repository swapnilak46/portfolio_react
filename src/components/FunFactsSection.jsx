// FunFactsSection.jsx
// Fun facts counter section with jarallax background
import React, { useEffect, useRef, useState } from 'react';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';
import CountUp from 'react-countup';
// Import the WOW constructor from wow.js package
import WOW from 'wow.js';
// Import animate.css for animations
import 'animate.css';

const FunFactsSection = () => {
  // State to track if counters are visible
  const [countersVisible, setCountersVisible] = useState(false);
  
  // Ref for the section
  const sectionRef = useRef(null);
  const jarallaxRef = useRef(null);
  
  useEffect(() => {
    // Initialize jarallax for the background effect
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
    
    // Set up Intersection Observer to detect when the counters are visible
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    // Cleanup function
    return () => {
      observer.disconnect();
      if (jarallaxElement) {
        jarallax(jarallaxElement, 'destroy');
      }
    };
  }, []);
  return (
    <section 
      id="section-fun-facts" 
      ref={(el) => {
        sectionRef.current = el;
        jarallaxRef.current = el;
      }}
      aria-label="section" 
      className="jarallax no-top no-bottom"
    >
      <div className="de-gradient-edge-top"></div>
      <img src="/images/background/l11.jpg" className="jarallax-img" alt="Background" />
      <div className="container">        <div className="row">
          <div className="col-md-3 wow fadeIn" data-wow-delay="0">
            <div className="de_count text-center">
              <h3 className="timer" data-to="8240" data-speed="2500">
                <CountUp
                  start={0}
                  end={8240}
                  duration={2.5}
                  separator="," 
                  delay={0.5}
                  enableScrollSpy
                />
              </h3>
              <span>Hours Coding AI & Web Apps</span>
            </div>
          </div>

          <div className="col-md-3 wow fadeIn" data-wow-delay=".25s">
            <div className="de_count text-center">
              <h3 className="timer" data-to="60" data-speed="2500">
                <CountUp
                  start={0}
                  end={60}
                  duration={2.5}
                  delay={0.7}
                  enableScrollSpy
                />
              </h3>
              <span>AI & Fullstack Projects</span>
            </div>
          </div>

          <div className="col-md-3 wow fadeIn" data-wow-delay=".5s">
            <div className="de_count text-center">
              <h3 className="timer" data-to="40" data-speed="2500">
                <CountUp
                  start={0}
                  end={40}
                  duration={2.5}
                  delay={0.9}
                  enableScrollSpy
                />
              </h3>
              <span>Happy Clients</span>
            </div>
          </div>

          <div className="col-md-3 wow fadeIn" data-wow-delay=".75s">
            <div className="de_count text-center">
              <h3 className="timer" data-to="8" data-speed="2500">
                <CountUp
                  start={0}
                  end={8}
                  duration={2.5}
                  delay={1.1}
                  enableScrollSpy
                />
              </h3>
              <span>Industry Awards</span>
            </div>
          </div>
        </div>
      </div>
      <div className="de-gradient-edge-bottom"></div>
    </section>
  );
};

export default FunFactsSection;
