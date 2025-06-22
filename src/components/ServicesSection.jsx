// ServicesSection.jsx
// Services/What I Do section with service cards
import React from 'react';

const ServicesSection = () => {
  return (
    <section id="section-services" className="no-bottom">
      <div className="container relative">
        <div className="row">
          <div className="col-md-12 text-center wow fadeInUp">
            <h2>What I Do</h2>
            <div className="space-border"></div>
          </div>
          <div className="spacer-single"></div>
          <div className="row">
            <div className="col-lg-4 wow fadeIn" data-wow-delay=".2s">
              <div className="de-card-v1">
                <div className="d-inner">
                  <i className="icon_genius id-color"></i>
                  <div className="text">
                    <h3>AI & Machine Learning</h3>
                    <p>
                      Custom AI solutions, predictive analytics, natural language processing, and computer vision for real-world business challenges. Expertise in Python, TensorFlow, PyTorch, and OpenAI APIs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay=".4s">
              <div className="de-card-v1">
                <div className="d-inner">
                  <i className="icon_tools id-color"></i>
                  <div className="text">
                    <h3>Fullstack Development</h3>
                    <p>
                      End-to-end web and mobile app development using React, Node.js, Next.js, and cloud-native technologies. Building scalable SaaS, REST APIs, and real-time applications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 wow fadeIn" data-wow-delay=".6s">
              <div className="de-card-v1">
                <div className="d-inner">
                  <i className="icon_camera_alt id-color"></i>
                  <div className="text">
                    <h3>Cloud & DevOps</h3>
                    <p>
                      Cloud architecture, CI/CD pipelines, and automation on AWS, GCP, and Azure. Deploying, monitoring, and scaling AI and web applications securely and efficiently.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
