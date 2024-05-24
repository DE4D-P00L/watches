import { FaLinkedin, FaFacebookSquare } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import WatchBannerImage from "../../assets/watch01.png";

const Hero = () => {
  return (
    <main className="grid-layout-mobile md:grid-layout min-h-[calc(100dvh-60px)] max-w-[1600px] mx-auto">
      <div>
        <ul className="flex flex-col justify-center items-center h-full gap-10 text-3xl">
          <li>
            <a href="">
              <FaSquareInstagram />
            </a>
          </li>
          <li>
            <a href="">
              <FaSquareXTwitter />
            </a>
          </li>
          <li>
            <a href="">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href="">
              <FaFacebookSquare />
            </a>
          </li>
        </ul>
      </div>
      <section className="flex flex-col md:flex-row p-5">
        <div className="flex-1 grid place-content-center">
          <div className="space-y-4 max-w-[40ch]">
            <h1 className="font-bold text-5xl">Time for what matters most.</h1>
            <p className="text-gray-500 text-xl font-thin">
              Elevate your everyday with a watch designed for adventure, style,
              and purpose
            </p>
            <p className="font-semibold text-[#f06d48] text-lg">₹4999</p>
            <div className="flex-col sm:flex-row flex gap-2 sm:items-center">
              <button className="px-7 py-2 bg-gray-300">Discover</button>
              <button className="uppercase px-7 py-4 bg-black text-white shadow-2xl">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 grid place-content-center p-2">
          <img src={WatchBannerImage} alt="" className="bg-[#f06d48] p-5" />
        </div>
      </section>
      <div className="flex flex-col justify-center items-center">
        <span>05</span>
        <div className="h-[200px] flex w-[1px] bg-slate-300"></div>
        <span>01</span>
      </div>
    </main>
  );
};
export default Hero;
