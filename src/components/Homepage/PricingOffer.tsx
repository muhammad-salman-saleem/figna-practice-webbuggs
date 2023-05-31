import React from "react";
import { FiCheck } from 'react-icons/fi';

const Homepage8: React.FC  = () => {
  return (
    <div className="container mx-auto px-10">
      <div className="   text-center justify-between my-4 mb-10">
        <h2 className="md:text-[37px] sm:text-[33px] text-[30px] lg:text-[42px] font-bold text-blue-500 my-3 ">
          SEE PRICING
        </h2>
        <h3 className="max-w-[371px] text-[18px] mx-auto  flex text-center">
          Find the right plan for your business.
        </h3>
      </div>
      <div className="grid  gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <div className="text-center items-center justify-between px-10 py-14 shadow appearance-none border rounded-2xl mt-2 md:mt-20 h-fit  hover:bg-blue-600 hover:text-white  hover:mt-0 ease-in duration-300 [&:hover_button]:bg-white [&:hover_button]:text-blue-600">
          <h2 className=" text-[22px] font-bold">Package One</h2>
          <div className="flex flex-wrap text-center items-center justify-center mt-3">
            <p className="">$ </p>
          <h3 className="text-[22px] font-bold">60 </h3> <p className="mt-2"> /Month</p>
          </div>
          <div className="py-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 rounded-full  text-white font-bold py-2 mb-6 px-5 text-[16px] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Contract Plan
            </button><hr />
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>300 CALLS PER MONTH</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>01 SUPPORT AGENT</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>02 MESSAGES READY</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>150 VOICEMAIL READY</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>50 SMS CALLS</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>SUPPORT 24/7</p>
            </div>
            
          </div>
        </div>
        <div className="text-center items-center justify-between px-10 py-14 shadow appearance-none border rounded-2xl mt-2 md:mt-20 h-fit  hover:bg-blue-600 hover:text-white  hover:mt-0 ease-in duration-300 [&:hover_button]:bg-white [&:hover_button]:text-blue-600">
          <h2 className=" text-[22px] font-bold">Package Two</h2>
          <div className="flex flex-wrap text-center items-center justify-center mt-3">
            <p className="">$ </p>
          <h3 className="text-[22px] font-bold">70 </h3> <p className="mt-2"> /Month</p>
          </div>
          <div className="py-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 rounded-full  text-white font-bold py-2 mb-6 px-5 text-[16px] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Contract Plan
            </button><hr />
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>600 CALLS PER MONTH</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>03 SUPPORT AGENT</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>02 MESSAGES READY</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>350 VOICEMAIL READY</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>150 SMS CALLS</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>SUPPORT 24/7</p>
            </div>
            
          </div>
        </div>
        <div className="text-center items-center justify-between px-10 py-14 shadow appearance-none border rounded-2xl mt-2 md:mt-20 h-fit  hover:bg-blue-600 hover:text-white  hover:mt-0 ease-in duration-300 [&:hover_button]:bg-white [&:hover_button]:text-blue-600">
          <h2 className=" text-[22px] font-bold">Package Three</h2>
          <div className="flex flex-wrap text-center items-center justify-center mt-3">
            <p className="">$ </p>
          <h3 className="text-[22px] font-bold">150 </h3> <p className="mt-2"> /Month</p>
          </div>
          <div className="py-5">
            <button
              className="bg-blue-500 hover:bg-blue-800 rounded-full  text-white font-bold py-2 mb-6 px-5 text-[16px] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Contract Plan
            </button><hr />
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>1000 CALLS PER MONTH</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>05 SUPPORT AGENT</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>06 MESSAGES READY</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>750 VOICEMAIL READY</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>550 SMS CALLS</p>
            </div>
            <div className="flex items-center justify-center mt-5">
            <FiCheck className="mr-2"/>
            <p>SUPPORT 24/7</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage8;
