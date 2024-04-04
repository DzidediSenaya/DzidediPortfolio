import { useState } from "react";
import { TfiEmail } from "react-icons/tfi";
import { FaWhatsapp } from "react-icons/fa";
import './contact.css'

export default function Contact() {
    const [test, SetTest] = useState('');

    const handleOnClick = () => {
        // speck ({text:text})
    };

    return (
        <div className="flex justify-center"> 
            <section id="contact" className="mt-10 ml-5 w-full max-w-4xl">
                <h1 className="text-center font-bold text-3xl text-sky-900 mt-0">Contact Me</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-40 text-center ml-30 pl-30">
                        {/* Email */}
                        <div className="bg-slate-950 hover:bg-slate-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 border-solid border-2 border-sky-200 rounded p-1">
                            <h1 className="m-auto"><TfiEmail /></h1>
                            <h2 className="text-2xl font-bold">Email</h2>
                            <h4>dzidedisenaya@gmail.com</h4>
                            <li><button onClick={() => window.location = 'mailto:dzidedisenaya@gmail.com'} className=" text-sky-300 hover:cursor-pointer p-4 ">Send a Message</button></li>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-slate-950 hover:bg-slate-800 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 border-solid border-2 border-sky-200 rounded p-1 mb-0">
                            <h1 className="m-auto"><FaWhatsapp /></h1>
                            <h2 className="text-2xl font-bold">WhatsApp</h2>
                            <a href="https://api.whatsapp.com/send?phone=233279649184" target="_blank" className="text-sky-300">Send a Message</a>
                    </div>
                </div>
            </section>
        </div>
    );
}
