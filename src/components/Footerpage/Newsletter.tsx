import React from "react";

const Footerpage: React.FC  = () => {
  return (
    <div className="container  mx-auto relative md:-mb-32 -mb-28 ">
      <div className="flex flex-wrap p-5 lg:p-20 md:p-10 mt-10 md:-mb-20 border-2 mx-7 md:mx-40 bg-white shadow ">
        <div className="flex-1">
          <h2 className="text-blue-600 text-[16px] font-bold">
            Join Our Newsletter
          </h2>
          <p className="text-[14px] max-w-[415px] mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="flex-2 mt-5">
          <form action="" className="flex ">
            <input
              className="bg-transparent border-gray-400 border rounded-l-full w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              id="yName"
              name="yName"
              placeholder="Your Email"
              required
            />
            <input
              className=" bg-blue-600 border-blue-600 border rounded-r-full  py-3 px-5 text-white leading-tight focus:outline-none focus:shadow-outline"
              type="submit"
              id="submitName"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footerpage;
