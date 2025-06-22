// GreyHomePage.jsx
// Main page component for the migrated index-grey.html
// Assembles all major sections as modular React components

import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import QuoteSection from "../components/QuoteSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import ResumeSection from "../components/ResumeSection";
import FunFactsSection from "../components/FunFactsSection";
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

const GreyHomePage = () => {
  // This component serves as the container for all the sections of the page
  // Each section is implemented as a separate component for modularity
  
  return (
    <div className="no-bottom no-top" id="content">
      {/* Float social media text */}
      <div className="float-text">
        <div className="de_social-icons">
          <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
          <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
          <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
        </div>
        <span>Follow Me for AI & Fullstack Insights</span>
      </div>
      
      {/* Modal container for external content */}
      <div id="de_modal">
        <button className="button-close"></button>
        <div className="d-modal-loader"></div>
      </div>
      
      <div id="top"></div>
      
      {/* Page preloader */}
      <div id="preloader">
        <div className="preloader1"></div>
      </div>
      
      {/* Header component with navigation */}
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection />
      
      {/* Quote Section */}
      <QuoteSection />
      
      {/* Services Section */}
      <ServicesSection />
      
      {/* Portfolio Section */}
      <PortfolioSection />
      
      {/* Resume Section */}
      <ResumeSection />
      
      {/* Fun Facts Section */}
      <FunFactsSection />
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Contact Section */}
      <ContactSection />
      
      {/* Back to top button */}
      <a href="#" id="back-to-top"></a>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GreyHomePage;
