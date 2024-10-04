import { useEffect, useState } from "react";
import { RiMenuFold3Line } from "react-icons/ri";

export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollPosition(newScrollYPosition);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed z-20 w-full top-0 py-4 duration-500 ${scrollPosition > 0 ? "bg-white shadow-sm py-2" : ""
        }`}
    >
      <div className="max-w-[1460px] m-auto px-4">
        <div className="w-full flex items-center justify-between gap-4">
          <a href="#">
            <img
              className="max-w-[180px] block"
              src="images/logo.png"
              alt="logo"
            />
          </a>
          <span className="mobileBurger cursor-pointer"
          onClick={()=>setShowMenu(!showMenu)}
          >
            <RiMenuFold3Line className="w-5 h-5" />
          </span>
          <nav className={`navMobile ${showMenu && "navMobileActive"} flex gap-4 items-center`}>
            <span className="flex gap-4 xl:gap-8 items-center">
              <a
                href=""
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                Home
              </a>
              <a
                href=""
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                About Us
              </a>
              <a
                href=""
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                Services
              </a>
              <a
                href=""
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                Products
              </a>
              <a
                href=""
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                Software Solutions
              </a>
              <a
                href=""
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                Contact Us
              </a>
            </span>
            <span className="flex items-center gap-4">
              <div className="font-regular text-gray-500">|</div>
              <button className="gradient text-[16px] rounded-full text-white transition py-1 px-4 whitespace-nowrap">
                Tekmarts CAREERS
              </button>
            </span>
          </nav>
        </div>
      </div>
    </div>
  );
};
