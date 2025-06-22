import React from 'react';

const Blog = ({ blogPosts }) => {
    return (
        <section id="section-blog" className="no-bottom">
            <div className="container relative">
                <div className="row">
                    <div className="col-md-12 text-center wow fadeInUp">
                        <h2 className="id-color">Recent Blog</h2>
                        <div className="space-border"></div>
                    </div>
                </div>
                <div id="carousel-blog" className="owl-carousel wow fadeInUp">
                    {blogPosts.map((post, index) => (
                        <div className="bloglist item" key={index}>
                            <div className="post-content">
                                <div className="post-text p-0">
                                    <h4 className="de_modal" data-url="single-blog.html">{post.title}</h4>
                                    <p className="mb-1">{post.content}</p>
                                    <div className="small id-color">{post.date}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
