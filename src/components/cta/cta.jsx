import CV from "../../assets/cv.pdf";
import './cta.css';

export default function Cta() {
  return (
    <>
      <div className="flex gap-2 text-center justify-center mt-5">
        <button className="">
          <a
            href={CV}
            download
            className="download text-center text-sky-300 bg-blue-900 px-3 py-2 rounded-2xl"
          >
            Download CV
          </a>
        </button>
        <button className="text-center text-black bg-sky-300 px-2 py-1 rounded-2xl">
          <a href="#contact">Let's Talk</a>
        </button>
      </div>
    </>
  );
}
