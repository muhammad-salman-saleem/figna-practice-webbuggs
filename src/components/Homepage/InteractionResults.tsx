import React from "react";
import Image from "next/image";
import hpg72IMG from "../../../public/images/zetong-li-9G8K_nycv7s-unsplash.jpg";

const Homepage72: React.FC  = () => {
  return (
    <div>
      <div className="relative bg-black ">
        <Image
          src={hpg72IMG}
          alt="hpg72IMG"
          className="object-cover w-full h-[950px] md:h-[800px] lg:h-[440px]  opacity-40"
        />
        <div className="absolute inset-0  flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-3xl md:text-4xl mt-5 lg:text-5xl font-bold mb-4 md:mb-6 lg:mb-8">
            Real Interaction, Real Results.
          </h1>

          <div className="grid mt-2 gap-20 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center items-center justify-between px-8 appearance-none  ">
              <div className=" justify-center items-center py-4">
                <h1 className="text-[48px] font-bold">80%</h1>
              </div>

              <div className="w-[237px] mx-auto text-[18px] flex text-center justify-between">
                <p className="py-3">
                  of callers will hang up when they reach voicemail.1
                </p>
              </div>
            </div>
            <div className="text-center items-center justify-between px-8 shadow appearance-none ">
              <div className="flex  justify-center items-center py-4">
                <h1 className="text-[48px] font-bold">74%</h1>
              </div>
              <div className="w-[237px] mx-auto text-[18px] flex text-center justify-between">
                <p className="py-3">
                  of people who have have a bad phone experience would choose
                  another business next time. 2
                </p>
              </div>
            </div>
            <div className="text-center items-center justify-between px-8 shadow appearance-none ">
              <div className="flex  justify-center items-center py-4">
                <h1 className="text-[48px] font-bold">61%</h1>
              </div>
              <div className="w-[237px] mx-auto text-[18px] flex text-center justify-between">
                <p className="py-3">
                  of mobile users call a business when they’re ready to buy.2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage72;
