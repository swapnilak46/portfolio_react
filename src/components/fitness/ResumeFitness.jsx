import React from 'react';

const ResumeFitness = () => {
    const experiences = [
        { year: '2014 - now', title: 'Founder & Director', company: 'Martinez Fitness', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.' },
        { year: '2010 - 2014', title: 'Atlhetic Trainer', company: 'Four Seasons Hotel', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.' },
        { year: '2008 - 2010', title: 'Fitness Coach', company: 'Pullman Hotel', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.' },
    ];

    const education = [
        { year: '2008 - 2012', title: 'Specialty Certifications', company: 'New York University', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.' },
        { year: '2004 - 2008', title: 'Certified Personal Trainer', company: 'University of London', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.' },
        { year: '2006 - 2004', title: 'Practical Experience', company: 'University of Sydney', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi tempora perferendis vero officia enim impedit voluptatem dignissimos, veniam ratione est alias rerum aperiam, nam aliquam reprehenderit iste dolor.' },
    ];

    return (
        <section id="section-resume">
            <div className="container relative">
                <div className="row">
                    <div className="col-md-12 text-center wow fadeInUp">
                        <h2 className="id-color">My Resume</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                <div className="row gh-5">
                    <div className="col-lg-6 wow fadeInUp">
                        <div className="p-4">
                            <h3 className="s_border">Experiences</h3>
                            <ul className="d_timeline">
                                {experiences.map((item, index) => (
                                    <li className="d_timeline-item" key={index}>
                                        <h3 className="d_timeline-title s2">{item.year}</h3>
                                        <p className="d_timeline-text"><span className="d_title">{item.title}</span><span className="d_company">{item.company}</span>{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp">
                        <div className="p-4">
                            <h3 className="s_border">Education</h3>
                            <ul className="d_timeline">
                                {education.map((item, index) => (
                                    <li className="d_timeline-item" key={index}>
                                        <h3 className="d_timeline-title s2">{item.year}</h3>
                                        <p className="d_timeline-text"><span className="d_title">{item.title}</span><span className="d_company">{item.company}</span>{item.description}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ResumeFitness;
