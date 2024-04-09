import { Link } from "react-router-dom";
import dziko from '../../assets/f3.png';
import dziko1 from '../../assets/ecologo1.png';
import car from '../../assets/CARPORT.mp4';

export default function Projects() {
    return (
        <>
            <section id="project">
                <h1 className="text-center font-bold text-2xl text-sky-900 mb-4"> Recent Projects</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 p-10 text-center gap-10">
                    <div className="shadow-2xl bg-sky-400 p-10">
                        <img src={dziko} className="w-32 mb-5" />
                        <h2 className="mb-5">Dziko App</h2>
                        <Link to="https://github.com/DzidediSenaya/dziko-app" target="_blank" className="bg-transparent text-sky-900 border-solid border-2 border-sky-900 rounded p-1">Github</Link>
                        <Link to="https://dziko-app.vercel.app/" target="_blank"  className="bg-sky-300 text-black p-1">Live Demo</Link>
                    </div>

                    <div className="shadow-2xl text-center bg-sky-200 p-10">
                        <img src={dziko1} className="w-32 text-center mb-5" />
                        <h2 className="text-black mb-5">Dziko html/css website</h2>
                        <Link to="https://github.com/DzidediSenaya/DZIKO" target="_blank" className="bg-transparent text-sky-900 border-solid border-2 border-sky-900 rounded p-1">Github</Link>
                        <Link to="https://dziko.vercel.app/" target="_blank" className="bg-sky-300 text-black p-1">Live Demo</Link>
                    </div>

                    <div className="shadow-2xl bg-sky-400 p-10">
                        <video src={car} className="w-32 mb-5" />
                        <h2 className="mb-5">Carport Landing Page</h2>
                        <Link to="https://github.com/DzidediSenaya/Carport_landing_page" target="_blank" className="bg-transparent text-sky-900 border-solid border-2 border-sky-900 rounded p-1">Github</Link>
                        <Link to="https://carport-landing-page.vercel.app/" target="_blank"  className="bg-sky-300 text-black p-1">Live Demo</Link>
                    </div>
                </div>
            </section>
        </>
    );
}
