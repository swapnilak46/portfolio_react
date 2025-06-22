import React from 'react';

const FitnessFooter = () => {
    return (
        <footer style={{
            background: 'black !important',
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-text">
                            <p>&copy; 2023 Fitness Instructor. All rights reserved.</p>
                            <p>Designed by <a href="https://www.example.com" target="_blank" rel="noopener noreferrer">Your Company</a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="social-icons">
                            <a href="#"><i className="bg-color text-dark fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="bg-color text-dark fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="bg-color text-dark fa fa-linkedin fa-lg"></i></a>
                            <a href="#"><i className="bg-color text-dark fa fa-pinterest fa-lg"></i></a>
                            <a href="#"><i className="bg-color text-dark fa fa-rss fa-lg"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FitnessFooter;
