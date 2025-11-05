import React from 'react';
import Hero from './HomeComponent/Hero';
import Skills from '../Skills/Skills';
import About from '../About/About'
import Projects from '../Projects/Projects';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';


const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
        </div>

    );
};

export default Home;