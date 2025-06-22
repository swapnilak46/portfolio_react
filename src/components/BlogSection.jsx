// BlogSection.jsx
// Blog section with carousel of blog posts
import React, { useState } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Modal from 'react-modal';
// Import the WOW constructor from wow.js package
import WOW from 'wow.js';
// Import animate.css for animations
import 'animate.css';
import '../assets/css/blog-modal.css';

// Set the app element for react-modal
Modal.setAppElement('#root');

const BlogSection = () => {
  // State for modal
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  
  // Carousel options
  const owlOptions = {
    items: 3,
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: { items: 1 },
      600: { items: 2 },
      1000: { items: 3 }
    }
  };
  // Handler for blog item clicks that would open a modal
  const openBlogModal = (post) => {
    setSelectedPost(post);
    setModalIsOpen(true);
  };
  
  // Close modal handler
  const closeModal = () => {
    setModalIsOpen(false);
  };
  
  // Effect to initialize WOW.js
  React.useEffect(() => {
    const wow = new WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 100,
      mobile: true,
      live: true
    });
    wow.init();
  }, []);
  // Blog post data
  const blogPosts = [
    {
      id: 1,
      imageUrl: '/images/blog/1.jpg',
      title: 'Building a Custom AI Chatbot for Business Automation',
      excerpt: 'A step-by-step guide to designing, training, and deploying a conversational AI chatbot using Python and OpenAI APIs for real-world business needs.',
      detailUrl: 'single-blog-ai-chatbot.html',
      category: 'AI Development',
      date: 'June 20, 2025'
    },
    {
      id: 2,
      imageUrl: '/images/blog/2.jpg',
      title: 'Scaling SaaS with Serverless & Cloud Functions',
      excerpt: 'How to architect and deploy scalable SaaS platforms using AWS Lambda, Google Cloud Functions, and modern DevOps practices.',
      detailUrl: 'single-blog-saas-cloud.html',
      category: 'Cloud & DevOps',
      date: 'June 19, 2025'
    },
    {
      id: 3,
      imageUrl: '/images/blog/3.jpg',
      title: 'End-to-End Machine Learning with React & FastAPI',
      excerpt: 'Integrating machine learning models into fullstack web apps using React for the frontend and FastAPI for the backend.',
      detailUrl: 'single-blog-ml-fullstack.html',
      category: 'Fullstack',
      date: 'June 18, 2025'
    },
    {
      id: 4,
      imageUrl: '/images/blog/4.jpg',
      title: 'Natural Language Processing in Production',
      excerpt: 'Best practices for deploying NLP models, handling large-scale text data, and building robust language-based applications.',
      detailUrl: 'single-blog-nlp.html',
      category: 'NLP',
      date: 'June 17, 2025'
    },
    {
      id: 5,
      imageUrl: '/images/blog/5.jpg',
      title: 'AI for E-commerce: Personalization & Recommendation',
      excerpt: 'Leveraging AI to boost sales and user engagement in e-commerce platforms through personalized recommendations and search.',
      detailUrl: 'single-blog-ecommerce-ai.html',
      category: 'AI in Business',
      date: 'June 16, 2025'
    },
    {
      id: 6,
      imageUrl: '/images/blog/6.jpg',
      title: 'From Data to Insights: Real-World ML Projects',
      excerpt: 'Case studies and lessons learned from delivering machine learning projects for healthcare, finance, and retail clients.',
      detailUrl: 'single-blog-ml-projects.html',
      category: 'Case Study',
      date: 'June 15, 2025'
    }
  ];

  return (
    <section id="section-blog" className="no-bottom">
      <div className="container relative">
        <div className="row">
          <div className="col-md-12 text-center wow fadeInUp">
            <h2>Recent Blog</h2>
            <div className="space-border"></div>
          </div>
        </div>
          {/* Using OwlCarousel component for the blog slider */}
        <OwlCarousel
          id="carousel-blog"
          className="owl-carousel wow fadeInUp"
          {...owlOptions}
        >
          {blogPosts.map(post => (
            <div className="bloglist item" key={post.id}>
              <div className="post-content">
                <div className="post-image">
                  <div 
                    className="de_modal" 
                    onClick={() => openBlogModal(post)}
                    data-url={post.detailUrl}
                  >
                    <img alt={post.title} src={post.imageUrl} className="lazy grayscale" />
                  </div>
                </div>                <div className="post-text">
                  <div className="post-meta">
                    <span className="post-category">{post.category}</span>
                    <span className="post-date">{post.date}</span>
                  </div>
                  <h4 
                    className="de_modal" 
                    onClick={() => openBlogModal(post)}
                    data-url={post.detailUrl}
                  >
                    {post.title}
                  </h4>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </div>
          ))}
        </OwlCarousel>
        
        {/* Modal for displaying blog post details */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Blog Post Modal"
          className="blog-modal"
          overlayClassName="blog-modal-overlay"
        >          {selectedPost && (
            <div className="blog-modal-content">
              <button onClick={closeModal} className="blog-modal-close">×</button>
              <h2>{selectedPost.title}</h2>
              <div className="blog-meta">
                <span className="blog-category">{selectedPost.category}</span>
                <span className="blog-date">{selectedPost.date}</span>
              </div>
              <img src={selectedPost.imageUrl} alt={selectedPost.title} className="blog-modal-image" />
              <p>{selectedPost.excerpt}</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum, nisi a finibus semper, libero eros faucibus nulla, et tincidunt sem erat vel arcu. Fusce at dolor ac libero fermentum euismod. Cras posuere fermentum ex. Suspendisse potenti.</p>
              <p>Vestibulum hendrerit, libero at pretium scelerisque, odio leo molestie sapien, quis rhoncus mauris quam non lectus. Integer facilisis, nulla non ultrices tempor, neque mauris aliquam nisi, sit amet faucibus sem odio in est.</p>
              <div className="blog-tags">
                <span>Tags:</span>
                <a href="#">design</a>
                <a href="#">creative</a>
                <a href="#">web</a>
              </div>
            </div>
          )}
        </Modal>
      </div>
    </section>
  );
};

export default BlogSection;
