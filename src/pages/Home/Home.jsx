import React from 'react';
import Banner from './Banner';
import About from './About';
import Stats from './Stats';
import Awards from './Awards';
import Education from './Education';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Stats></Stats>
            <Awards></Awards>
            <Education></Education>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default Home;