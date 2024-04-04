import pic from '../../assets/Gigi1.jpg'
import Nav from "../navbar/navbar";
import Cta from '../cta/cta';
import SocialHeader from '../social/social';
import './header.css'


export default function Header() {
    return (
        <>
            <section id='#'>
                <Nav />
                <header className="text-center justify-center px-10">
                    <div className="text-center px-10">
                        <h5 className="px-5 mt-20 text-2xl text-blue-900">Hi I'm</h5>
                        <h1 className="text-4xl font-bold text-blue-900">Dzidedi Aku Senaya</h1>
                        <h5 className="text-dark text-2xl text-blue-900">Software Engineer and Web Developer</h5>
                        <Cta />
                        <div className="grid grid-cols-1 md:grid-cols-3">
                            <SocialHeader />
                            <div className=" overflow-hidden  m-auto rounded-t-lg">
                                <img src={pic} className="h-100 w-100 rounded-es-3xl" alt="" />
                            </div>
                            <button className="rotate-90">
                                <a className="text-black font-bold text-dark"href="#about">Scroll down</a>
                            </button>

                        </div>
                    </div>

                </header>
            </section>
        </>
    )
}