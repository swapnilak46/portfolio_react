import React from 'react';

const Quote = () => {
    return (
        <section id="section-my-quote" aria-label="section" className="jarallax no-top no-bottom" data-video-src="mp4:images-fitness-instructor/video.mp4">
            <div className="de-gradient-edge-top"></div>
            <div className="v-center">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-10 offset-md-1">
                            <blockquote className="q-big wow fadeIn" data-wow-duration="3s">
                                <i className="d-big icon_quotations"></i>
                                In the gym, you face a battle within yourself, a struggle to push past your limits, to challenge your body and mind, and to transform yourself into the best version possible.
                                <span className="d-quote-by">Sophia Martinez</span>
                            </blockquote>
                            <div className="spacer-double"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="de-gradient-edge-bottom"></div>
        </section>
    );
};

export default Quote;
