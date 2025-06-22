import React from 'react';

const FitnessHero = () => {
    return (
        <section aria-label="section" className="jarallax no-top no-bottom text-light">
            <img src="images-fitness-instructor/background/1.jpg" className="jarallax-img" alt="" />
            <div className="v-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h6 className="wow fadeInUp" data-wow-delay=".4s"><span className="id-color">I Am Sophia Martinez</span></h6>
                            <div className="spacer-10"></div>
                            <div className="h1_big text-white wow fadeInUp" data-wow-delay=".6s">
                                <div className="typed-strings">
                                    <p>Personal Trainer</p>
                                    <p>Fitness Coach</p>
                                    <p>Athletic Trainer</p>
                                    <p>Nutrition Specialist</p>
                                    <p>Physical Therapist</p>
                                    <p>Corporate Wellness</p>
                                </div>
                                <div className="typed"></div>
                            </div>
                            <div className="spacer-20"></div>
                            <ul className="list_location wow fadeInUp" data-wow-delay=".8s">
                                <li><span>France</span>Bodin, Chauveau</li>
                                <li><span>USA</span>Louisiana, Bayerfurt</li>
                                <li><span>German</span>Hamburg, Dortmund</li>
                            </ul>
                        </div>
                        <div className="col-lg-4 sm-hide">
                            <div className="float-end">
                                <div className="de_count text-center wow fadeInRight" data-wow-delay=".2s">
                                    <h3 className="id-color">25</h3>
                                    <span>Awards Winning</span>
                                </div>
                                <div className="de_count text-center wow fadeInRight" data-wow-delay=".4s">
                                    <h3 className="id-color">10</h3>
                                    <span>Years Experience</span>
                                </div>
                                <div className="de_count text-center wow fadeInRight" data-wow-delay=".6s">
                                    <h3 className="id-color">12</h3>
                                    <span>Certificates</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a href="#section-about" className="mouse-icon-click scroll-to wow fadeInUp" data-wow-delay=".8s">
                <span className="mouse fadeScroll relative" data-scroll-speed="10">
                    <span className="scroll"></span>
                </span>
            </a>
            <div className="de-gradient-edge-bottom"></div>
        </section>
    );
};

export default FitnessHero;
