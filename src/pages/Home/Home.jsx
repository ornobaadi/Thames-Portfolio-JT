import React from 'react';
import Banner from './Banner';
import About from './About';
import Stats from './Stats';
import Awards from './Awards';
import Education from './Education';
import Contact from './Contact';
import Testimonials from './Testimonials';
import Services from './Services';
import Blog from './Blog';
import Experience from './Experience';
import Pricing from './Pricing';
import Portfolio from './Portfolio';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Stats></Stats>
            <Awards></Awards>
            <Experience></Experience>
            <Education></Education>
            <Portfolio></Portfolio>
            <Services></Services>
            <Testimonials></Testimonials>
            <Pricing></Pricing>
            <Contact></Contact>
            <Blog></Blog>
        </div>
    );
};

export default Home;