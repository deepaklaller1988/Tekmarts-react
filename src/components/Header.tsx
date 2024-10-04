import { RiMenuFold3Line } from "react-icons/ri";
export const Header = () => {
  return <div className="fixed z-20 w-full top-0">
    {/* bg-white shadow-sm */}
    <div className="max-w-[1460px] m-auto px-4">
      <div className="w-full flex items-center justify-between gap-4 py-4">
        <a href="#"><img className="max-w-[180px] block" src="images/logo.png" alt="logo" /></a>
        <span className="hidden cursor-pointer"><RiMenuFold3Line/></span>
        <nav className="flex gap-4 items-center">
          <span className="flex gap-8 items-center">
            <a href="" className="font-semibold text-[16px] text-gray-500 hover:text-black transition">Home</a>
            <a href="" className="font-semibold text-[16px] text-gray-500 hover:text-black transition">About Us</a>
            <a href="" className="font-semibold text-[16px] text-gray-500 hover:text-black transition">Services</a>
            <a href="" className="font-semibold text-[16px] text-gray-500 hover:text-black transition">Products</a>
            <a href="" className="font-semibold text-[16px] text-gray-500 hover:text-black transition">Software Solutions</a>
            <a href="" className="font-semibold text-[16px] text-gray-500 hover:text-black transition">Contact Us</a>
          </span>
          <span className="flex items-center gap-4">
            <div className="font-regular text-gray-500">|</div>
            <button className="gradient text-[16px] rounded-full text-white transition py-1 px-4 whitespace-nowrap">Tekmarts CAREERS</button>
          </span>
        </nav>
      </div>
    </div>
  </div>;
};
