import React, { FC } from "react";
import { FiChevronDown } from 'react-icons/fi';


const Homepage7: FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap py-10">
        <div className="flex-1 m-10 ">
          <h3 className="text-[18px]">EVERY QUESTION AS AN ANSWER</h3>
          <h2 className="max-w-[378px] text-blue-600 md:text-[37px] sm:text-[33px] text-[30px] lg:text-[42px] font-bold mt-3">
            Frequently Asked Questions
          </h2>
          <p className="text-[18px] mt-3 max-w-[516px]">From smarter software to specialized agent training, our multi-channel expertise encourages.</p>
        </div>
        <div className="flex-1 m-10">
          <div className="max-w-[635px] bg-blue-100 p-3 rounded-full px-5 mt-3 items-center justify-between">
            <h3 className=""> What is a 24/7 call answering service?</h3> 
            <FiChevronDown className="float-right -mt-5 text-blue-600"/>
          </div>
          <div className="max-w-[635px] bg-slate-300 rounded-2xl hidden">
          <p className=" mx-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi expedita nihil aut similique fugit mollitia architecto cum molestias natus vel?</p>
          </div>
          
          <div className="max-w-[635px] bg-blue-100 p-3 rounded-full px-5 mt-3">
            <h3> How should a call answering service answer my calls?</h3>
            <FiChevronDown className="float-right -mt-5 text-blue-600"/>
          </div>
          <div className="max-w-[635px] bg-blue-100 p-3 rounded-full px-5 mt-3">
            <h3> Who is answering my phone and website chats?</h3>
            <FiChevronDown className="float-right -mt-5 text-blue-600"/>
          </div>
          <div className="max-w-[635px] bg-blue-100 p-3 rounded-full px-5 mt-3">
            <h3> How much does an answering service cost? Is billing...</h3>
            <FiChevronDown className="float-right -mt-5 text-blue-600"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage7;
