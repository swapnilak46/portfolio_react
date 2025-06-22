import React from 'react';

const Gallery = ({ galleryItems }) => {
    return (
        <section id="section-gallery" className="no-bottom">
            <div className="container relative">
                <div className="row">
                    <div className="col-md-12 text-center wow fadeInUp">
                        <h2 className="id-color">Gallery</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                <div id="gallery" className="row g-4 sequence">
                    {galleryItems.map((item, index) => (
                        <div className="col-md-4 mb-0 item" key={index}>
                            <a className="image-popup-gallery wow" href={item.image}>
                                <div className="card-image-1 mod-e" data-tilt>
                                    <div className="d-text text-center">
                                        <h3>{item.title}</h3>
                                    </div>
                                    <img src={item.image} className="img-fluid" alt="" />
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
