import React from "react";
import hpg5IMG1 from "../../../public/images/Group 51.png";
import Image from "next/image";

const Homepage5: React.FC  = () => {
  return (
    <div className="bg-gray-100 lg:max-h-[530px] sm:h-max my-10 mb-20">
      <div className="container mx-auto flex flex-wrap ">
        <div className="flex-1 order-2 md:order-1 sm:order-1 py-10 px-10 md:px-10 md:py-5">
          <h2 className="md:text-[37px] sm:text-[33px] text-[30px] lg:text-[42px] py-5  sm:w-auto md:max-w-[469px]  text-blue-500 font-bold ">
            Live Chat Helps convert your leads
          </h2>
          <h3 className="sm:w-auto md:max-w-[471px] text-[20px] py-5 ">
            Your web visitors chat with real people not bots. A personal touch
            touch makes the difference.
          </h3>
          <div className="py-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 rounded-full  text-white font-bold py-2 px-5 text-[16px] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Learn More..
            </button>
          </div>
        </div>
        <div className="order-1 md:order-2 sm:order-2">
          <div className="flex-1 relative  h-auto sm:w-auto">
            <Image className="rounded " src={hpg5IMG1} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage5;
