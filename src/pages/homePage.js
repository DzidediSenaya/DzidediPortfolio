import React from 'react';
import Header from '../components/header/header';
import Skills from '../components/skills/skills';
import Footer from '../components/footer/footer';
import Experience from './experiencePage';
import Achievement from '../components/achievement/achievement';
import About from '../components/about/about';
import Posts from '../components/posts/posts';
import Projects from '../components/project/project.js';
import Contact from '../components/contact/contact.js';

function Home() {
    return (
        <section id='home'>
            <div>
                <Header />
                <About />
                <Skills />
                <Projects/>
                <Achievement />
                <Experience />
                <Posts />
                <Contact/>
                <Footer />

            </div>
        </section>
    );
}

export default Home;