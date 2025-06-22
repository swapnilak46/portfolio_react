import React from 'react';

const WhatIDo = () => {
    const services = [
        { icon: 'icon_check', title: 'Personal Trainer', description: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.' },
        { icon: 'icon_check', title: 'Fitness Coach', description: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.' },
        { icon: 'icon_check', title: 'Athletic Trainer', description: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.' },
        { icon: 'icon_check', title: 'Nutrition Specialist', description: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.' },
        { icon: 'icon_check', title: 'Physical Therapist', description: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.' },
        { icon: 'icon_check', title: 'Corporate Wellness', description: 'Ex velit cupidatat magna voluptate deserunt quis et dolor adipisicing elit culpa ad exercitation proident irure deserunt irure.' },
    ];

    return (
        <section id="section-services" className="no-bottom">
            <div className="container relative">
                <div className="row">
                    <div className="col-md-12 text-center wow fadeInUp">
                        <h2 className="id-color">What I Do</h2>
                        <div className="space-border no-bottom"></div>
                    </div>
                    <div className="col-lg-12">
                        <div className="carousel-3 owl-carousel owl-theme">
                            {services.map((service, index) => (
                                <div className="item" key={index}>
                                    <div className="de_3d-box">
                                        <div className="d-inner">
                                            <i className={`${service.icon} id-color`}></i>
                                            <div className="text">
                                                <h3>{service.title}</h3>
                                                {service.description}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
