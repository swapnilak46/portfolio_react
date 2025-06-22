// ContactSection.jsx
// Contact form section with jarallax background with Formik and Yup validation
import React, { useEffect, useRef } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';
// Import the WOW constructor from wow.js package
import WOW from 'wow.js';
// Import animate.css for animations
import 'animate.css';

// Validation schema using Yup
const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(50, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^\+?[0-9\s\-()]+$/, 'Invalid phone number')
    .min(7, 'Phone number is too short')
    .required('Phone number is required'),
  message: Yup.string()
    .min(10, 'Message is too short')
    .required('Message is required')
});

const ContactSection = () => {
  // Ref for jarallax
  const jarallaxRef = useRef(null);
  
  // Initializing jarallax and WOW.js
  useEffect(() => {
    // Initialize jarallax for background effect
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

  // Handle form submission
  const handleSubmit = (values, { setSubmitting, resetForm, setStatus }) => {
    setStatus({ submitting: true, success: false, error: false });

    // In a real implementation, this would make an API call to send the form data
    // For this example, we'll simulate a successful submission after a delay
    setTimeout(() => {
      // Simulate successful submission
      setStatus({
        submitting: false,
        success: true,
        error: false
      });
      
      // Reset form after successful submission
      resetForm();
      setSubmitting(false);
    }, 1000);
    
    // To simulate an error instead:
    // setStatus({ submitting: false, success: false, error: true });
  };
  return (
    <section id="section-contact" className="jarallax" ref={jarallaxRef}>
      <div className="de-gradient-edge-top"></div>
      <img src="/images/background/l11.jpg" className="jarallax-img" alt="Background" />
      <div className="container z-index-1000">
        <div className="row">
          <div className="col-md-12 text-center wow fadeInUp">
            <h2>Contact Me</h2>
            <div className="space-border"></div>
          </div>
          <div className="col-lg-8 offset-lg-2 wow fadeInUp">
            <div className="contact_form_wrapper">
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  message: ''
                }}
                validationSchema={ContactFormSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, status }) => (
                  <Form 
                    name="contactForm" 
                    id="contact_form" 
                    className="form-border"
                  >
                    <div className="row">
                      <div className="col-md-4">
                        <div className="field-set">
                          <Field
                            type="text" 
                            name="name" 
                            id="name" 
                            className="form-control" 
                            placeholder="Your Name"
                          />
                          <ErrorMessage name="name" component="div" className="error-message" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="field-set">
                          <Field
                            type="email" 
                            name="email" 
                            id="email" 
                            className="form-control" 
                            placeholder="Your Email"
                          />
                          <ErrorMessage name="email" component="div" className="error-message" />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="field-set">
                          <Field
                            type="text" 
                            name="phone" 
                            id="phone" 
                            className="form-control" 
                            placeholder="Your Phone"
                          />
                          <ErrorMessage name="phone" component="div" className="error-message" />
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="field-set">
                        <Field
                          as="textarea"
                          name="message" 
                          id="message" 
                          className="form-control" 
                          placeholder="Your Message"
                        ></Field>
                        <ErrorMessage name="message" component="div" className="error-message" />
                      </div>
                      <div id="submit" className="mt10">
                        <input 
                          type="submit" 
                          id="send_message" 
                          value={isSubmitting ? 'Sending...' : 'Send Message'} 
                          className="btn-main"
                          disabled={isSubmitting}
                          style={{   color: "white", backgroundColor: '#333', border: '1px solid #ccc' }}
                        />
                      </div>

                      {status && status.success && (
                        <div id="success_message" className="success">
                          Your message has been sent successfully. Refresh this page if you want to send more messages.
                        </div>
                      )}
                      {status && status.error && (
                        <div id="error_message" className="error">
                          Sorry there was an error sending your form.
                        </div>
                      )}                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="spacer-double"></div>
            <div className="row text-center wow fadeInUp">
              <div className="col-md-4">
                <div className="wm-1"></div>
                <h6>Email Me</h6>
                <p>contact@aidev-johndoe.com</p>
              </div>
              <div className="col-md-4">
                <div className="wm-1"></div>
                <h6>Call Me</h6>
                <p>+1 555 123 4567</p>
              </div>
              <div className="col-md-4">
                <div className="wm-1"></div>
                <h6>Location</h6>
                <p>Remote / San Francisco, CA, USA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
