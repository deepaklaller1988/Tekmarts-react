import React, { useState } from "react";
import { GoHome } from "react-icons/go";
import { MdOutlineEmail } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { IoCheckmarkSharp } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import MiniLoader from "../components/MiniLoader";
const ContactUs = () => {
  const [changeSubmitButton, setChangeSubmitButton] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlesubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setChangeSubmitButton(true);
    }, 2000);
  };

  return (
    <div className="bg-gray-100 py-16 px-6 md:px-20 lg:px-32 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 gap-14">
        {/* Left Section */}
        <div>
          <h4 className="font-semibold mb-2">Contact Us </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 leading-relaxed my-9 ">
            Need assistance? Contact us at support@example.com or call
            +123-456-7890. You can also fill out the contact form below, and our
            team will respond as soon as possible. We’re here to help with any
            inquiries or feedback. Your satisfaction is our priority, and we
            look forward to hearing from you!
          </p>
          <div className="space-y-8">
            {/* Location */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#fce765] p-4 rounded-lg text-white">
                <GoHome size={30} color="black" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Our Location
                </h4>
                <p className="text-gray-600 mt-1">
                  4193 Flat Rock Rd SUITE 200-566, Riverside, CA 92505
                </p>
              </div>
            </div>
            {/* Phone */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#fce765] p-4 rounded-lg text-white">
                <LuPhone size={30} color="black" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Phone Number
                </h4>
                <p className="text-gray-600 mt-1">(415) 498-0146</p>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-center space-x-6">
              <div className="bg-[#fce765] p-4 rounded-lg text-white">
                <MdOutlineEmail size={30} color="black" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  Email Address
                </h4>
                <p className="text-gray-600 mt-1">admin@tekmarts.com</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <form className="space-y-9" onSubmit={handlesubmit}>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fce765]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fce765]"
            />
            <input
              type="text"
              placeholder="Your Phone"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fce765]"
            />
            <textarea
              placeholder="Your Message"
              // rows="5"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#fce765]"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-[#fce765] text-black font-semibold py-3 rounded-lg flex justify-center"
            >
            {loading ? (
  <MiniLoader />
) : changeSubmitButton ? (
  <GiCheckMark color={"green"} size={30} />
) : (
  "Send Message"
)}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
