import React from 'react';

const FunFacts = () => {
    return (
        <section id="section-fun-facts" aria-label="section" className="jarallax">
            <div className="de-gradient-edge-top"></div>
            <img src="images-fitness-instructor/background/2.jpg" className="jarallax-img" alt="" />
            <div className="container">
                <div className="row">
                    <div className="col-md-4 wow fadeIn" data-wow-delay="0s">
                        <div className="de_count text-center">
                            <h3 className="timer" data-to="25" data-speed="2500">0</h3>
                            <span>Awards Winning</span>
                        </div>
                    </div>

                    <div className="col-md-4 wow fadeIn" data-wow-delay=".25">
                        <div className="de_count text-center">
                            <h3 className="timer" data-to="10" data-speed="2500">0</h3>
                            <span>Years of Experiences</span>
                        </div>
                    </div>

                    <div className="col-md-4 wow fadeIn" data-wow-delay=".5s">
                        <div className="de_count text-center">
                            <h3 className="timer" data-to="12" data-speed="2500">0</h3>
                            <span>Certificates</span>
                        </div>
                    </div>

                </div>
            </div>
            <div className="de-gradient-edge-bottom"></div>
        </section>
    );
};

export default FunFacts;
