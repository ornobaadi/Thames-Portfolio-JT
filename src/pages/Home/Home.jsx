import React from 'react';
import Banner from './Banner';
import About from './About';
import Stats from './Stats';
import Awards from './Awards';
import Education from './Education';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Stats></Stats>
            <Awards></Awards>
            <Education></Education>
        </div>
    );
};

export default Home;