import { useEffect, useState } from "react";
import { RiMenuFold3Line } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import MiniLoader from "./MiniLoader";
export const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);
  const [showPopup,setShowPopup]=useState(false)
  const navigate = useNavigate();
  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollPosition(newScrollYPosition);
  };

  const scrollToSection = (id: string) => {
    navigate('/');
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element with id "${id}" not found.`);
      }
    }, 200);
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
          <a href="/">
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
                href="/"
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                Home
              </a>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("about-us");
                }}
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                About Us
              </a>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("services");
                }}
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                Services
              </a>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("products");
                }}
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                Products
              </a>
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("software-solutions");
                }}
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
              >
                Software Solutions
              </a>
              <Link
                className="font-semibold text-[16px] text-gray-500 hover:text-black transition"
                to={"/contact-us"}
              >
                Contact Us
              </Link>
            </span>
            <span className="flex items-center gap-4">
              <div className="font-regular text-gray-500">|</div>
              <button className="gradient text-[16px] rounded-full text-white transition py-1 px-4 whitespace-nowrap" onClick={()=>setShowPopup(true)} >
                Tekmarts CAREERS
              </button>
            </span>
          </nav>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-bold mb-4">Careers at Tekmarts</h2>
            <p className="mb-4">
       Sorry we are not hiring at this time 
            </p>
            <div className="flex gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Close
              </button>
             
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
