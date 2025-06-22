// ResumeSection.jsx
// Resume section with experience and education timelines
import React from 'react';
import '../assets/css/resume-fix.css'; // Import custom CSS fixes for resume timeline

const ResumeSection = () => {
  return (
    <section id="section-resume">
      <div className="container relative">
        <div className="row">
          <div className="col-md-12 text-center wow fadeInUp">
            <h2>My Resume</h2>
            <div className="space-border"></div>
          </div>
        </div>
        <div className="row gh-5">
          <div className="col-lg-6 wow fadeInUp">
            <div className="p-4">
              <h3 className="s_border">Experiences</h3>
              <ul className="d_timeline">
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">2022 - Present</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Freelance AI Developer &amp; Fullstack Engineer</span>
                    <span className="d_company">Remote / Global Clients</span>
                    Designed, developed, and deployed AI-powered web applications, chatbots, and automation tools for startups and enterprises. Specialized in Python, TensorFlow, React, Node.js, and cloud platforms (AWS, GCP, Azure).
                  </p>
                </li>
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">2020 - 2022</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Fullstack Developer (AI &amp; SaaS)</span>
                    <span className="d_company">InnovateAI Solutions</span>
                    Led the development of SaaS products integrating machine learning models, REST APIs, and modern frontend frameworks. Delivered scalable solutions for e-commerce, healthcare, and finance sectors.
                  </p>
                </li>
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">2018 - 2020</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">Machine Learning Engineer</span>
                    <span className="d_company">TechBridge Analytics</span>
                    Built and optimized ML pipelines for NLP, computer vision, and predictive analytics projects. Collaborated with cross-functional teams to deliver data-driven products.
                  </p>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp">
            <div className="p-4">
              <h3 className="s_border">Education</h3>
              <ul className="d_timeline">
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">2016 - 2018</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">M.S. in Computer Science (AI Specialization)</span>
                    <span className="d_company">Stanford University</span>
                    Focused on artificial intelligence, deep learning, and large-scale data systems. Thesis: "End-to-End Deep Learning for Real-Time Language Translation".
                  </p>
                </li>
                <li className="d_timeline-item">
                  <h3 className="d_timeline-title">2012 - 2016</h3>
                  <p className="d_timeline-text">
                    <span className="d_title">B.Tech in Computer Engineering</span>
                    <span className="d_company">Indian Institute of Technology (IIT) Bombay</span>
                    Graduated with honors. Built multiple open-source projects in AI, web, and cloud computing.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
