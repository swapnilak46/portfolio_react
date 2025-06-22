// PortfolioSection.jsx
// Portfolio section with gallery items and modal functionality
import React from 'react';

const PortfolioSection = () => {
  // In a real implementation, we would have a state and handler for modal functionality
  // For now, we'll just include placeholders where this logic would go
  
  const openModal = (url) => {
    // This would open the modal with content from the specified URL
    console.log(`Would open modal with content from: ${url}`);
    // In a real implementation, we would fetch the content or use a modal component
  };

  return (
    <section id="section-portfolio" className="no-bottom">
      <div className="container relative">
        <div className="row">
          <div className="col-md-12 text-center wow fadeInUp">
            <h2>Portfolio</h2>
            <div className="space-border"></div>
          </div>
        </div>
        <div id="gallery" className="row sequence">
          <div className="col-md-4 item">
            <div 
              className="de_modal wow" 
              
             
            >
              <div className="card-image-1 mod-c" data-tilt>
                <div className="d-text">
                  <h3>AI Chatbot Platform</h3>
                  <h5 className="d-tag">AI / SaaS</h5>
                </div>
                <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80" className="img-fluid" alt="AI Chatbot Platform" />
              </div>
            </div>
          </div>
          <div className="col-md-4 item">
            <div 
              className="de_modal wow" 
        
             
            >
              <div className="card-image-1 mod-c" data-tilt>
                <div className="d-text">
                  <h3>ML Analytics Dashboard</h3>
                  <h5 className="d-tag">Machine Learning</h5>
                </div>
                <img src="https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=600&q=80" className="img-fluid" alt="ML Analytics Dashboard" />
              </div>
            </div>
          </div>
          <div className="col-md-4 item">
            <div 
              className="de_modal wow" 
             
              
            >
              <div className="card-image-1 mod-c" data-tilt>
                <div className="d-text">
                  <h3>Cloud Automation Suite</h3>
                  <h5 className="d-tag">Cloud / DevOps</h5>
                </div>
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80" className="img-fluid" alt="Cloud Automation Suite" />
              </div>
            </div>
          </div>
          <div className="col-md-4 item">
            <div 
              className="de_modal wow" 
            
             
            >
              <div className="card-image-1 mod-c" data-tilt>
                <div className="d-text">
                  <h3>NLP Text Analyzer</h3>
                  <h5 className="d-tag">NLP / AI</h5>
                </div>
                <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80" className="img-fluid" alt="NLP Text Analyzer" />
              </div>
            </div>
          </div>
          <div className="col-md-4 item">
            <div 
              className="de_modal wow" 
              
             
            >
              <div className="card-image-1 mod-c" data-tilt>
                <div className="d-text">
                  <h3>AI-Powered E-commerce</h3>
                  <h5 className="d-tag">Fullstack</h5>
                </div>
                <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80" className="img-fluid" alt="AI-Powered E-commerce" />
              </div>
            </div>
          </div>
          <div className="col-md-4 item">
            <div 
              className="de_modal wow" 
          
              
            >
              <div className="card-image-1 mod-c" data-tilt>
                <div className="d-text">
                  <h3>Vision Recognition System</h3>
                  <h5 className="d-tag">Computer Vision</h5>
                </div>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" className="img-fluid" alt="Vision Recognition System" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
