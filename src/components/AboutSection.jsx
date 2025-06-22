// AboutSection.jsx
// About Me section with skill progress circles
import React, { useEffect } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
// Import the WOW constructor from wow.js package
import WOW from "wow.js";
// Import animate.css for animations
import "animate.css";
import "../assets/css/about-fix.css"; // Import custom styles for progress circles

const AboutSection = () => {
  // Initialize WOW.js for scroll animations
  useEffect(() => {
    const wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 100,
      mobile: true,
      live: true,
    });
    wow.init();
  }, []);
  // Progress circle configurations - these styles are applied directly to the CircleProgressBar components below
  // Using inline styles for each component instance instead of a shared variable

  return (
    <section id="section-about">
      <div className="container relative">
        <div className="row">
          <div className="col-md-12 text-center wow fadeInUp">
            <h2>About Me</h2>
            <div className="space-border"></div>
          </div>
          <div className="col-md-8 offset-md-2 text-center wow fadeInUp">
            <p>
              I am an AI Developer and Fullstack Freelancer with a passion for
              building intelligent, scalable, and impactful digital solutions. My
              expertise spans artificial intelligence, machine learning, and modern
              web development. I thrive on solving complex problems and delivering
              high-quality products for clients worldwide. My portfolio includes
              AI-powered web apps, automation tools, and end-to-end SaaS platforms.
              I am always eager to collaborate on innovative projects and push the
              boundaries of technology.
            </p>
          </div>
          <div className="spacer-single"></div>
          {/* Skill circles using CircleProgressBar component */}{" "}
          <div
            className="col-lg-3 position-relative wow fadeIn"
            data-wow-delay=".2s"
          >
            <div className="position-relative">
              <div
                className="progressbar"
                data-animate="true"
                data-percent="95"
              >
                <CircularProgressbar
                  value={95}
                  text={`95%`}
                  styles={{
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      stroke: "#333",
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      strokeWidth: 4,
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      stroke: "#f7f7f7",
                      strokeLinecap: "round",
                      strokeWidth: 4,
                    },
                    // Customize the text
                    text: {
                      fill: "#333",
                      fontSize: "16px",
                      fontWeight: "bold",
                    },
                  }}
                />
                <h4>Python / AI</h4>
              </div>
            </div>
          </div>{" "}
          <div
            className="col-lg-3 position-relative wow fadeIn"
            data-wow-delay=".4s"
          >
            <div className="position-relative">
              <div
                className="progressbar"
                data-animate="true"
                data-percent="90"
              >
                <CircularProgressbar
                  value={90}
                  text={`90%`}
                  styles={{
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      stroke: "#333",
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      strokeWidth: 4,
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      stroke: "#f7f7f7",
                      strokeLinecap: "round",
                      strokeWidth: 4,
                    },
                    // Customize the text
                    text: {
                      fill: "#333",
                      fontSize: "16px",
                      fontWeight: "bold",
                    },
                  }}
                />
                <h4>React / Node.js</h4>
              </div>
            </div>
          </div>{" "}
          <div
            className="col-lg-3 position-relative wow fadeIn"
            data-wow-delay=".6s"
          >
            <div className="position-relative">
              <div
                className="progressbar"
                data-animate="true"
                data-percent="85"
              >
                <CircularProgressbar
                  value={85}
                  text={`85%`}
                  styles={{
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      stroke: "#333",
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      strokeWidth: 4,
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      stroke: "#f7f7f7",
                      strokeLinecap: "round",
                      strokeWidth: 4,
                    },
                    // Customize the text
                    text: {
                      fill: "#333",
                      fontSize: "16px",
                      fontWeight: "bold",
                    },
                  }}
                />
                <h4>Cloud & DevOps</h4>
              </div>
            </div>
          </div>{" "}
          <div
            className="col-lg-3 position-relative wow fadeIn"
            data-wow-delay=".8s"
          >
            <div className="position-relative">
              <div
                className="progressbar"
                data-animate="false"
                data-percent="80"
              >
                <CircularProgressbar
                  value={80}
                  text={`80%`}
                  styles={{
                    // Customize the path, i.e. the "completed progress"
                    path: {
                      stroke: "#333",
                      strokeLinecap: "round",
                      transition: "stroke-dashoffset 0.5s ease 0s",
                      strokeWidth: 4,
                    },
                    // Customize the circle behind the path, i.e. the "total progress"
                    trail: {
                      stroke: "#f7f7f7",
                      strokeLinecap: "round",
                      strokeWidth: 4,
                    },
                    // Customize the text
                    text: {
                      fill: "#333",
                      fontSize: "16px",
                      fontWeight: "bold",
                    },
                  }}
                />
                <h4>UI/UX & Product</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
