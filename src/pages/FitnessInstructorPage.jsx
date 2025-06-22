import React from 'react';
import FitnessHeader from '../components/fitness/FitnessHeader';
import FitnessHero from '../components/fitness/FitnessHero';
import AboutFitness from '../components/fitness/AboutFitness';
import Quote from '../components/fitness/Quote';
import WhatIDo from '../components/fitness/WhatIDo';
import Gallery from '../components/fitness/Gallery';
import ResumeFitness from '../components/fitness/ResumeFitness';
import FunFacts from '../components/fitness/FunFacts';
import Blog from '../components/fitness/Blog';
import Contact from '../components/fitness/Contact';
import FitnessFooter from '../components/fitness/FitnessFooter';

const FitnessInstructorPage = () => {
    const menuItems = [
        { name: "Home", link: "#top" },
        { name: "About Me", link: "#section-about" },
        { name: "What I Do", link: "#section-services" },
        { name: "Gallery", link: "#section-gallery" },
        { name: "My Resume", link: "#section-resume" },
        { name: "Blog", link: "#section-blog" },
        { name: "Contact Me", link: "#section-contact" }
    ];

    const galleryItems = [
        {
            image: 'images-fitness-instructor/gallery/1.jpg',
            title: 'Healthier',
        },
        {
            image: 'images-fitness-instructor/gallery/2.jpg',
            title: 'Strength',
        },
        {
            image: 'images-fitness-instructor/gallery/3.jpg',
            title: 'Transform',
        },
        {
            image: 'images-fitness-instructor/gallery/4.jpg',
            title: 'Focus',
        },
        {
            image: 'images-fitness-instructor/gallery/5.jpg',
            title: 'Elevate',
        },
        {
            image: 'images-fitness-instructor/gallery/6.jpg',
            title: 'Flexibility',
        },
    ];    const blogPosts = [
        {
            title: "Effective Strategies for Strength Training",
            content: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
            date: "2 days ago"
        },
        {
            title: "How to Improve Your Endurance and Stamina",
            content: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
            date: "2 days ago"
        },
        {
            title: "Fueling Your Workouts for Optimal Performance",
            content: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
            date: "2 days ago"
        },
        {
            title: "A Beginner's Guide to Building Strength",
            content: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
            date: "2 days ago"
        },
        {
            title: "Tips to Stay Inspired and Committed",
            content: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
            date: "2 days ago"
        },
        {
            title: "My \"Aha Moment\" About Food",
            content: "Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...",
            date: "2 days ago"
        }
    ];

    return (        <div className="onepage dark-scheme">
            <div id="wrapper">
                <FitnessHeader logoSrc="images-fitness-instructor/logo.png" menuItems={menuItems} />
                <div className="no-bottom no-top" id="content">
                    <div id="top"></div>
                    <div id="preloader">
                        <div className="preloader1"></div>
                    </div>
                    <div className="float-text">
                        <div className="de_social-icons">
                            <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                            <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                            <a href="#"><i className="fa fa-instagram fa-lg"></i></a>
                        </div>
                        <span>Follow Me</span>
                    </div>
                    <div id="de_modal">
                        <button className="button-close"></button>
                        <div className="d-modal-loader"></div>
                    </div>
                    <FitnessHero />
                    <AboutFitness />
                    <Quote />
                    <WhatIDo />
                    <Gallery galleryItems={galleryItems} />
                    <ResumeFitness />
                    <FunFacts />
                    <Blog blogPosts={blogPosts} />
                    <Contact />
                </div>
                <a href="#" id="back-to-top"></a>
                <FitnessFooter />
            </div>
        </div>
    );
};

export default FitnessInstructorPage;
