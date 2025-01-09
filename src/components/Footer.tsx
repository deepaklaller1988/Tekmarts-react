import { FaArrowRight } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa"
export const Footer = () => {
  return <div className="bg-[#f5f5f5]">
    <div className="w-full py-20 border-b border-1 border-gray-500/20">
      <div className="max-w-[1460px] m-auto px-4">
      <section className="flex flex-col md:flex-row gap-4 text-center md:text-left justify-between items-center">
          <div>
          <h2 className="text-black text-[30px] md:text-[40px] font-bold">About Tekmarts</h2>
          <p className="text-[20px] sm:text-[25px] md:text-[30px]  text-black font-semibold">At Tekmarts, we are passionate about revolutionizing e-commerce. Our smart, environmentally friendly.</p>
          </div>
          <button className="text-[16px] sm:text-[20px] min-w-auto sm:min-w-[300px] flex items-center gap-4 bg-white hover:bg-[#ffe64a] transition p-3 px-4 rounded-full font-semibold">Explore Our Journey <FaArrowRight /></button>
        </section>
      </div>
    </div>
    <div className="w-full footer px-4 py-20 pb-32 flex items-center justify-center flex-col gap-6 text-center">
      <ul className="flex gap-2">
        {/* <li><a href="" className="block w-10 h-10 bg-black hover:bg-black/60 transition flex items-center justify-center text-white rounded-full"><FaFacebookF className="text-xl"/></a></li> */}
        <li><a  href="https://www.google.com" 
    target="_blank" 
    rel="noopener noreferrer"  className="block w-10 h-10 bg-black hover:bg-black/60 transition flex items-center justify-center text-white rounded-full"><FaLinkedinIn className="text-xl" /></a></li>
        {/* <li><a href="" className="block w-10 h-10 bg-black hover:bg-black/60 transition flex items-center justify-center text-white rounded-full"><FaInstagram className="text-xl" /></a></li> */}
      </ul>
<p className="font-semibold">© 2025 Tekmarts. All rights reserved.</p>
    </div>
  </div>;
};
