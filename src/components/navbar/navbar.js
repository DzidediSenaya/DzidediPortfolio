import React, { useState } from "react";
import { HashLink } from "react-router-hash-link";
import './navbar.css';

export default function Nav() {
    const [activeNav, setActiveNav] = useState('#');

    return (
        <div className="navbar"> {/* Add navbar class to the surrounding div */}
            <nav>
                <HashLink to="#home" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}>Home</HashLink>
                <HashLink to="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>About</HashLink>
                <HashLink to="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>Experience</HashLink>
                <HashLink to="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}>Skills</HashLink>
                <li><HashLink smooth to="#project" className="hover:text-gray-300">Projects</HashLink></li>
                <li><HashLink smooth to="#posts" className="hover:text-gray-300">Posts</HashLink></li>
                <li><HashLink smooth to="#contact" className="hover:text-gray-300">Contact</HashLink></li>
            </nav>
        </div>
    );
}
