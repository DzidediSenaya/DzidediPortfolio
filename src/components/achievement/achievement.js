import AVTR1 from "../../assets/Gigi1.jpg";
import "./achievement.css";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const data = [
    {
        avatar: AVTR1,
        title: "Software Engineer, ALX Certified",
        year: 'April,2024',
        post: 'I collaborated on cloning the Airbnb site, which showcased teamwork and adaptability. I tackled programming challenges in Python, C, JavaScript, and CSS, demonstrating problem-solving skills. Additionally, I developed test suites and shell scripts to ensure software reliability. Furthermore, I mastered Vi, Emacs, and Vim for efficient code editing and configured virtual machines for development, optimizing workflows.'
    },

    {
        avatar: AVTR1,
        title: "Web Development Top Voice - LinkedIn",
        year: 'March,2024',
        post: 'Recognized as being in the top 4% of contributors to the web development space and collaborative articles on LinkedIn.'
    },
    {
        avatar: AVTR1,
        title: "Moreton Bay Regional Council Entrepreneurship & Innovation Web Development Job Simulation on Forage",
        year: 'February,2024',
        post: 'I completed a job simulation that involved website planning and creation. During this process, I created a sitemap and user flow using a diagram creation tool. Additionally, I utilized HTML and CSS to develop a landing page.'
    },
    {
        avatar: AVTR1,
        year: '2018',
        title: ' Outstanding Female Student | Dr. Hilla Limann Hall | University of Ghana',
        post: 'Recognized as the Most Outstanding Female Student in Dr. Hilla Limann Hall for exemplary leadership and all-round excellence.'
    },
    {
        avatar: AVTR1,
        year: '2016',
        title: 'AIESEC Rising Star of The Year',
        post: 'Awarded for outstanding commitment and dedication to the goals and vision of AIESEC Legon.'
    },
    {
        avatar: AVTR1,
        year: '2014',
        title: 'Winner, ALX New School Challenge',
        post: 'Won a group competition for innovation and originality of thought.'
    }
];

const Achievement = () => {
    return (
        <section id='achievements'>
            <h1 className="text-center font-bold text-2xl text-sky-900 mb-4">My Achievements</h1>
            <Swiper
                className='container-achievement'
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                pagination={{ clickable: true }}
                keyboard={{ enabled: true }} // Enable keyboard control
            >
                {data.map(({ avatar, title, post, year }, index) => {
                    return (
                        <SwiperSlide key={index} className='Achievement'>
                            <div className='achievement-img'>
                                <img src={avatar} alt={`Avatar ${index}`} />
                            </div>
                            <h5 className='achievement-title'>{title}</h5>
                            <small className='achievement-note'>{post}</small>
                            <small className='achievement-time'>{year}</small>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </section>
    );
}

export default Achievement;
