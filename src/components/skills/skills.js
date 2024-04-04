import React from 'react';
import { BiCheck } from 'react-icons/bi';

const Skills = () => {
    return (
        <section id='skills'>
        <div className="mt-4 mb-2">
        <h1 className="text-center font-bold text-2xl text-sky-900"> My Skills</h1>
            <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto px-4 py-8">
                {/* Front-end Development */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:border-blue-400">
                    <div className="bg-white py-4 rounded-t-lg">
                        <h2 className="text-blue-900 text-lg font-semibold text-center">Front-end Development</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">HTML5/CSS3</h3>
                                <p className="text-gray-300 text-sm">Proficient in creating well-structured, semantically correct HTML5 markup and styling with CSS3 for responsive and visually appealing web interfaces.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">JavaScript (ES6+)</h3>
                                <p className="text-gray-300 text-sm">Experienced in writing modular and efficient JavaScript code, utilizing ES6+ features for interactive web applications and enhancing user experience.</p>
                            </div>
                        </li>
                    </ul>
                </article>

                {/* Back-end Development */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:border-blue-400">
                    <div className="bg-blue-900 py-4 rounded-t-lg">
                        <h2 className="text-white text-lg font-semibold text-center">Back-end Development</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Node.js</h3>
                                <p className="text-gray-300 text-sm">Proficient in building scalable server-side applications using Node.js, with knowledge of frameworks such as Express.js.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Database Management</h3>
                                <p className="text-gray-300 text-sm">Skilled in designing and optimizing databases using MongoDB.</p>
                            </div>
                        </li>
                    </ul>
                </article>

              {/* UI/UX Design */}
<article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:border-blue-400">
    <div className="bg-blue-900 py-4 rounded-t-lg">
        <h2 className="text-white text-lg font-semibold text-center">UI/UX Design</h2>
    </div>
    <ul className="p-4 mb-4">
        <li className="flex items-start">
            <BiCheck className="text-blue-500 mt-1 mr-2 mb-1" />
            <div>
                <h3 className="text-white text-lg font-semibold">Responsive Design</h3>
                <p className="text-gray-300 text-sm mb-4">Experienced in implementing responsive design principles to ensure optimal user experience across various devices and screen sizes.</p>
            </div>
        </li>

        <li className="flex items-start">
            <BiCheck className="text-blue-500 mt-1 mr-2" />
            <div>
                <h3 className="text-white text-lg font-semibold">Interactive Prototyping</h3>
                <p className="text-gray-300 text-sm">Experienced in creating interactive prototypes and wireframes using tools like Figma to visualize design concepts and gather feedback from stakeholders. Capable of refining designs based on user feedback and usability testing results to optimize the user experience.</p>
            </div>
        </li>
    </ul>
</article>


                
                {/* Other Skills */}
                <article className="bg-gray-900 rounded-lg border border-blue-500 transition duration-400 ease-in-out hover:border-blue-400">
                    <div className="bg-white py-4 rounded-t-lg">
                        <h2 className="text-blue-900 text-lg font-semibold text-center">Soft Skills</h2>
                    </div>
                    <ul className="p-4">
                        <li className="flex items-start mb-4">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Teamwork</h3>
                                <p className="text-gray-300 text-sm">Collaborative and adaptable team player, dedicated to fostering a cohesive environment and achieving collective goals. Possesses a strong communication skill set to facilitate effective collaboration among team members, ensuring project success and synergy.</p>
                            </div>
                        </li>
                        <li className="flex items-start">
                            <BiCheck className="text-blue-500 mt-1 mr-2" />
                            <div>
                                <h3 className="text-white text-lg font-semibold">Critical Thinking</h3>
                                <p className="text-gray-300 text-sm">Equipped with strong analytical skills and a solution-oriented approach, capable of effectively evaluating challenges and devising strategic solutions. Demonstrated ability to think critically, assess situations from multiple perspectives, and make informed decisions to overcome obstacles and achieve desired outcomes.</p>
                            </div>
                        </li>
                    </ul>
                </article>
            </div>
            </div>
        </section>
    );
}

export default Skills;

