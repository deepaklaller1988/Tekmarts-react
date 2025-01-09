import { FaArrowRight } from "react-icons/fa6";
// import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa"
export const Footer = () => {
  return <div className="bg-[#f5f5f5]">
  
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
