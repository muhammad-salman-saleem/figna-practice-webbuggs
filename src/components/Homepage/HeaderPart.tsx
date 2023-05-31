import React, { FC } from 'react';
import Image from 'next/image';
import headerIMG from '../../../public/images/Rectangle5.png';


import Homepage2 from "./WhyItWork";
import Homepage3 from "./HomeContact";
import Homepage4 from "./ClientsReviews";
import Homepage5 from "./LiveChat";
import HomePage62 from "./IntegrateEasy";
import Homepage72 from "./InteractionResults";
import Homepage7 from "./FaQuestions";
import Homepage8 from "./PricingOffer";



const HeaderPart: FC  = () => {
  return (
    <div>
      <div className="relative bg-black ">
        <Image
          src={headerIMG}
          alt="My headerIMG"
          className="object-cover w-full h-[664px] md:h-[800px] lg:h-screen opacity-40"
        />
        <div className="absolute inset-0  flex flex-col justify-center items-center text-center text-white">
          <h1 className="relative text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 lg:mb-8">
            The Answer is Connecting.
          </h1>
          <h2 className="relative top-8 text-xl max-w-[415px] md:text-2xl lg:text-[24px] mb-8 md:mb-10 lg:mb-12">
            Keep Your Business Human with 24/7* Live Answering.
          </h2>
          <div className=" relative top-8 flex space-x-6 justify-center">
            <button className="bg-blue-600 hover:bg-transparent rounded-full h-16  lg:h-14 px-6 md:px-8 lg:px-12 text-white text-[16px] font-semibold hover:border hover:border-blue-600 lg:text-2xl">
              Contact us
            </button>
            <button className="rounded-full hover:text-white w-fit hover:bg-blue-600 h-16 lg:h-14 px-6 md:px-8 lg:px-12 text-blue-600 border-[3px] font-semibold border-blue-600 text-[16px]">
            Plans & Pricings
            </button>
          </div>
        </div>
      </div>

      <Homepage2 />
      <Homepage3 />
      <Homepage4 />
      <Homepage5 />
      <HomePage62 />
      <Homepage72 />
      <Homepage7 />
      <Homepage8 />
    </div>
  );
};

export default HeaderPart;
