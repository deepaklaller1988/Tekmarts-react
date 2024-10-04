import { FaArrowRight } from "react-icons/fa6";
import { FaLocationArrow } from "react-icons/fa";
export const Home = () => {
  return (
    <div className="w-full">
      <section className="w-full relative overflow-hidden h-[1000px]">
        <video className="grayscale opacity-70 w-full h-full object-cover" src="videodummy.mp4" loop autoPlay muted></video>
        <section className="absolute w-full h-full bg-white/90 top-0 left-0 z-10"></section>
        <section className="absolute z-10 top-0 w-full h-full pb-20">
          <div className="max-w-[1460px] m-auto px-4 h-full flex items-center justify-between gap-4">
            <div className="max-w-[800px] w-full h-full flex flex-col justify-center items-start">
              <h1 className="font-black text-[60px] flex gap-2 uppercase leading-none whitespace-nowrap">Welcome to <p className="font-light text-[60px]">Tekmarts</p></h1>
              <span className="text-[40px] text-[#666]">MORE THAN JUST SELLING ONLINE!</span>
              <p className="text-[#777] text-[30px] my-4">Your one-stop solution for innovative e-commerce and retail success.</p>
              <button className="flex items-center gap-4 bg-[#fce765] hover:bg-[#ffe64a] transition p-3 px-4 rounded-full font-semibold">Get Started to Know More <FaArrowRight /></button>
            </div>
            <img className="w-[467px] move relative" src="images/phone.png" />
          </div>
        </section>
      </section>
      <div className="w-full">
        <div className="max-w-[1200px] m-auto px-4">
          <section className="w-full bg-white rounded-lg -mt-28 relative z-10 text-center px-4 py-10 shadow-lg">
            <h2 className="text-black font-bold text-[30px]">We take care more than <b className="text-[#f4a530] text-[30px]">10,000+</b> customers</h2>
            <ul className="w-full flex items-center gap-4 place-content-evenly mt-10">
              <li className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition"><img className="block" src="images/chatgpt.png" alt="sponsors" /></li>
              <li className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition"><img className="block" src="images/figma.png" alt="sponsors" /></li>
              <li className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition"><img className="block" src="images/meta.png" alt="sponsors" /></li>
              <li className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition"><img className="block" src="images/yt.png" alt="sponsors" /></li>
              <li className="grayscale hover:grayscale-0 opacity-40 hover:opacity-100 transition"><img className="block" src="images/skype.png" alt="sponsors" /></li>
            </ul>
          </section>
        </div>
      </div>
      <div className="w-full py-20">
        <div className="max-w-[1460px] m-auto px-4">
        <section className="flex gap-8 justify-between items-center">
          <section>
            <h2 className="text-black text-[40px] font-bold">About Tekmarts</h2>
            <p className="text-[30px] text-[#777]">At Tekmarts, we are passionate about revolutionizing e-commerce. Our smart,
              environmentally friendly, and minimalist solutions are designed to help your business grow.</p>
            <button className="flex items-center gap-4 bg-[#fce765] hover:bg-[#ffe64a] transition p-3 px-4 mt-4 rounded-full font-semibold">Explore Our Journey <FaArrowRight /></button>
          </section>
          <span>
            <img className="max-w-[110px] rotateIn relative" src="images/arrow-move.png" alt="arrow" />
          </span>
          <section className="min-w-[380px]">
            <ul className="flex gap-6 flex-col">
              <li className="flex gap-4 items-start">
                <span className="mt-2 bg-black min-w-12 min-h-12 rounded-full text-white flex items-center justify-center"><FaLocationArrow className="w-5 h-5"/></span>
                <span>
                  <b className="text-black">Marketing Sales</b>
                  <p className="text-[#777777]">At Tekmarts, we are passionate about revolutionizing
                    e-commerce.</p>
                </span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="mt-2 bg-black min-w-12 min-h-12 rounded-full text-white flex items-center justify-center"><FaLocationArrow className="w-5 h-5"/></span>
                <span>
                  <b className="text-black">Marketing Sales</b>
                  <p className="text-[#777777]">At Tekmarts, we are passionate about revolutionizing
                    e-commerce.</p>
                </span>
              </li>
            </ul>
          </section>
          </section>
        </div>
      </div>
      <div className="w-full career pt-20 pb-80">
        <div className="max-w-[1460px] m-auto px-4">
          <section className="flex gap-4 justify-between items-center">
            <div>
              <h2 className="text-black text-[40px] font-bold">About Tekmarts</h2>
              <p className="text-[30px] text-black font-semibold">At Tekmarts, we are passionate about revolutionizing e-commerce. Our smart,
                environmentally friendly, and minimalist solutions are designed to help your business grow.</p>
            </div>
            <button className="min-w-[300px] flex items-center gap-4 bg-white hover:bg-[#ffe64a] transition p-3 px-4 rounded-full font-semibold">Explore Our Journey <FaArrowRight /></button>
          </section>
        </div>
      </div>
      <div className="w-full pb-[300px] bg-[#f5f5f5]">
        <div className="max-w-[1460px] m-auto px-4 relative">
          <ul className="-mt-[280px] flex gap-4 absolute left-0 w-full">
            <li className="relative top-0 hover:-top-[10px] shadow-md services bg-white hover:bg-[#4b4b4b] transition-[1s] rounded-xl p-6 py-10 flex flex-col gap-5 items-center text-center">
              <span className="transition bg-black w-[92px] h-[92px] rounded-full flex items-center justify-center"><img className="block transition" src="images/icons/sale-tag.png" alt="icons" /></span>
              <h3 className="text-black text-[22px] font-bold">Multi-Platform Sales</h3>
              <p className="text-[#777777]">We sell a wide range of products on TikTok, Amazon, Temu, and other major platforms, ensuring fast, reliable service for both consumers and businesses.</p>
            </li>
            <li className="relative top-0 hover:-top-[10px] shadow-md services bg-white hover:bg-[#4b4b4b] transition-[1s] rounded-xl p-6 py-10 flex flex-col gap-5 items-center text-center">
              <span className="transition bg-black w-[92px] h-[92px] rounded-full flex items-center justify-center"><img className="block transition" src="images/icons/b2b.png" alt="icons" /></span>
              <h3 className="text-black text-[22px] font-bold">B2B Solutions</h3>
              <p className="text-[#777777]">Our tailored B2B services connect manufacturers, distributors, and retailers, simplifying bulk orders and streamlining supply chains for smoother
                operations.</p>
            </li>
            <li className="relative top-0 hover:-top-[10px] shadow-md services bg-white hover:bg-[#4b4b4b] transition-[1s] rounded-xl p-6 py-10 flex flex-col gap-5 items-center text-center">
              <span className="transition bg-black w-[92px] h-[92px] rounded-full flex items-center justify-center"><img className="block transition" src="images/icons/logistics-delievry.png" alt="icons" /></span>
              <h3 className="text-black text-[22px] font-bold">Fulfillment & Logistics</h3>
              <p className="text-[#777777]">With our own warehouse and fulfillment center, we manage inventory and
                deliveries, ensuring on-time shipments with high accuracy for both direct and bulk orders.</p>
            </li>
            <li className="relative top-0 hover:-top-[10px] shadow-md services bg-white hover:bg-[#4b4b4b] transition-[1s] rounded-xl p-6 py-10 flex flex-col gap-5 items-center text-center">
              <span className="transition bg-black w-[92px] h-[92px] rounded-full flex items-center justify-center"><img className="block transition" src="images/icons/cart.png" alt="icons" /></span>
              <h3 className="text-black text-[22px] font-bold">E-Commerce Software Solutions</h3>
              <p className="text-[#777777]">Our proprietary software automates seller tasks, from influencer outreach to customer relationship management, optimizing the entire sales lifecycle.</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-white w-full py-20">
        <div className="max-w-[1460px] m-auto px-4">
          <section className="flex items-center justify-between gap-20">
            <div className="flex gap-4 min-w-[270px]">
              <span><img src="images/icons/amazon.png" alt="icons" /></span>
              <span><img src="images/icons/tiktok.png" alt="icons" /></span>
              <span><img src="images/icons/pint.png" alt="icons" /></span>
            </div>
            <div>
              <h2 className="font-black text-[60px] flex gap-2 uppercase leading-none whitespace-nowrap">SELL ON</h2>
              <span className="text-[40px] text-[#666] font-semibold uppercase">Everywhere</span>
              <p className="text-[#777] text-[30px] my-4">Become the next online success
                story — sell anything, anywhere, to anyone. Control everything from a single platform with centralized inventory, order management, and pricing.</p>
              <button className="flex items-center gap-4 bg-[#fce765] hover:bg-[#ffe64a] transition p-3 px-4 rounded-full font-semibold">Get Started to Know More <FaArrowRight /></button>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
