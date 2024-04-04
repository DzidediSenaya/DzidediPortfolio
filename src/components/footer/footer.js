import React from 'react';
import styles from './footer.module.css';
import { FaFacebookF, FaGithub } from 'react-icons/fa';
import { BsLinkedin } from "react-icons/bs";
import { AiOutlineGithub } from "react-icons/ai";
import { HashLink } from 'react-router-hash-link'; 

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <a href='#' className={styles.footer_logo}>My Portfolio</a>

            <ul className={styles.permalinks}>
                <li><HashLink smooth to="#home" className="hover:text-gray-300">Home</HashLink></li>
                <li><HashLink smooth to="#about" className="hover:text-gray-300">About</HashLink></li>
                <li><HashLink smooth to="#experience" className="hover:text-gray-300">Experience</HashLink></li>
                <li><HashLink smooth to="#skills" className="hover:text-gray-300">Skills</HashLink></li>
                <li><HashLink smooth to="#project" className="hover:text-gray-300">Projects</HashLink></li>
                <li><HashLink smooth to="#posts" className="hover:text-gray-300">Posts</HashLink></li>
               <li><HashLink smooth to="#contact" className="hover:text-gray-300">Contact</HashLink></li>
            </ul>
            
            <div className={styles.footer_socials}>
            <a href='https://www.facebook.com/dzidedi.senaya' target="_blank"><FaFacebookF /></a>
            <a href='https://www.linkedin.com/in/dzidedi-senaya-8432bb6b/' target="_blank"><BsLinkedin /></a>
            <a href='https://github.com/DzidediSenaya' target="_blank"><AiOutlineGithub /></a>
        </div>

            <div className={styles.footer_copyright}>
                <small>&copy;My Portfolio. All rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer;

