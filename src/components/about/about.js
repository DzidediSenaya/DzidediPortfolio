import React from 'react';
import './about.css';
import image from '../../assets/GIGI.jpg'
import { FaAward } from 'react-icons/fa';



function About() {
    return (
        <section id='about'>
            <h1 className="text-center font-bold text-2xl text-sky-900">About Me</h1>


            <div className='container about__container'>
                <div className='about__me'>
                    <div className='about__me-image'>
                        <img src={image} alt='about image' />
                    </div>
                </div>

                <div className='about__content'>
                    <div className="py-50 px-50">
                        <article className='about__card'>
                            <FaAward className='about__icon' />
                            <p>Full Stack Developer with a strong foundation in C, Python, and JavaScript. Proficient in React framework and adept in version control with Git. Demonstrated capability in creating interactive web applications and command line tools. Passionate about leveraging technology to solve real-world problems.</p>
                        </article>

                       
                    </div>
                    <a href='#contact' className='btn text-black'>Let's Talk</a>
                </div>
            </div>

        </section>
    );
}

export default About;