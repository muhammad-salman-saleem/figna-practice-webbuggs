import React, { useState } from "react";
import hpg3IMG1 from "../../../public/images/Group 43.png";
import Image from "next/image";

interface FormContactData {
  yName: string;
  phoneNO: string;
  email: string;
  compney: string;
}

const Homepage3: React.FC = () => {
  const [formData, setFormData] = useState<FormContactData>({
    yName: "",
    phoneNO: "",
    email: "",
    compney: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ): void => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <div className=" my-20 mt-40 bg-gray-200 ">
      <div className=" flex  flex-wrap container mx-auto">
        <div className="basis-80 flex-1 relative min-h-[33rem]  h-auto sm:w-auto">
          <Image className="absolute bottom-0 px-3" src={hpg3IMG1} alt="" />
        </div>
        <div className="basis-80 flex-1 text-start justify-start px-5">
          <h2 className="md:text-[37px] sm:text-[33px] text-[30px] lg:text-[42px] pt-8 pb-4 font-bold text-blue-600 ">
            HERE HOW WE SOUND.
          </h2>
          <p className="text-[22px]">
            To hear how we could answer your calls, Enter your details and call
            us for free.
          </p>
          <form
            className="bg-transparent p-sm-4  px-0 pt-6 pb-8 mb-4 flex flex-wrap -mx-2 items-center"
            onSubmit={handleSubmit}
          >
            <div className="w-1/2 px-2 mb-4">
              <input
                className="bg-transparent border-black border rounded-full w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="yName"
                name="yName"
                placeholder="Name"
                value={formData.yName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <input
                className="bg-transparent border-black border rounded-full w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-1/2 px-2 mb-4">
              <input
                className="bg-transparent border-black border rounded-full w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                type="number"
                id="phoneNO"
                name="phoneNO"
                placeholder="Phone No."
                value={formData.phoneNO}
                onChange={handleChange}
                required
              />
            </div>
            <div className="w-1/2 px-2 mb-4">
              <input
                className="bg-transparent border-black border rounded-full w-full py-3 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="text"
                id="compney"
                name="compney"
                placeholder="Company name"
                value={formData.compney}
                onChange={handleChange}
                required
              />
            </div>

            <div className="w-full px-3 text-center md:text-right">
    <button
      className="bg-blue-500 hover:bg-blue-700 rounded-full text-white font-bold py-2 px-12 text-[16px] focus:outline-none focus:shadow-outline"
      type="submit"
    >
      Send
    </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Homepage3;
