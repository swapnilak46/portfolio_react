import React from 'react';

const AboutFitness = () => {
    return (
        <section id="section-about">
            <div className="container relative">
                <div className="row">
                    <div className="col-md-12 text-center wow fadeInUp">
                        <h2 className="id-color">About Me</h2>
                        <div className="space-border"></div>
                    </div>
                    <div className="col-md-8 offset-md-2 text-center wow fadeInUp">
                        <p>Hi, I'm Sophia Martinez, a passionate and dedicated fitness instructor committed to helping others achieve their health and fitness goals. With 10 years of experience in the fitness industry, I believe in creating personalized and enjoyable workout experiences that empower individuals to reach their full potential.
                        </p>
                    </div>

                    <div className="row gx-5">
                        <div className="col-lg-6 position-relative wow fadeIn" data-wow-delay=".2s">
                            <div className="d-skills-bar">
                                <div className="d-bar">
                                    <div className="d-skill" data-value="80%">
                                        <div className="d-info">
                                            <span>Personal Trainer</span>
                                        </div>
                                        <div className="d-progress-line"><span className="d-fill-line"></span></div>
                                    </div>

                                    <div className="d-skill" data-value="70%">
                                        <div className="d-info">
                                            <span>Fitness Coach</span>
                                        </div>
                                        <div className="d-progress-line"><span className="d-fill-line"></span></div>
                                    </div>

                                    <div className="d-skill" data-value="82%">
                                        <div className="d-info">
                                            <span>Athletic Trainer</span>
                                        </div>
                                        <div className="d-progress-line"><span className="d-fill-line"></span></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 position-relative wow fadeIn" data-wow-delay=".2s">
                            <div className="d-skills-bar">
                                <div className="d-bar">
                                    <div className="d-skill" data-value="80%">
                                        <div className="d-info">
                                            <span>Nutrition Specialist</span>
                                        </div>
                                        <div className="d-progress-line"><span className="d-fill-line"></span></div>
                                    </div>

                                    <div className="d-skill" data-value="70%">
                                        <div className="d-info">
                                            <span>Physical Terapist</span>
                                        </div>
                                        <div className="d-progress-line"><span className="d-fill-line"></span></div>
                                    </div>

                                    <div className="d-skill" data-value="82%">
                                        <div className="d-info">
                                            <span>Corporate Wellness</span>
                                        </div>
                                        <div className="d-progress-line"><span className="d-fill-line"></span></div>
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

export default AboutFitness;
