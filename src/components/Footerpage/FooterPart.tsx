import React from "react";
import fpgIMG1 from "../../../public/images/Group 5.png";
import fpgIMG2 from "../../../public/images/Group 4.png";
import fpgIMG3 from "../../../public/images/Group 3.png";
import fpgIMG4 from "../../../public/images/Group 2.png";
import Footerpage from "./Newsletter";
import Link from "next/link";
import Image from "next/image";

const FooterPart: React.FC  = () => {
  return (
    <div className="lg:mt-20 md:mt-10 ">
      <Footerpage/>
    <div className=" bg-black md:pt-20 pt-10">
      
      <div className="container mx-auto  text-white">
        <div className="grid  gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 mt-10 py-10">
          <div className="pt-10 mx-4">
            <h2 className="text-[28px] font-bold">LOGO</h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet, consectectur adipiscing elit, sed do
              eiusmod tempor
            </p>
            <div className="flex flex-wrap mt-5">
              <Link href="#" className="pr-3">
                <Image src={fpgIMG1} alt="" />
              </Link>
              <Link href="#" className="px-3">
                <Image src={fpgIMG2} alt="" />
              </Link>
              <Link href="#" className="px-3">
                <Image src={fpgIMG3} alt="" />
              </Link>
              <Link href="#" className="px-3">
                <Image src={fpgIMG4} alt="" />
              </Link>
            </div>
          </div>
          <div className="pt-10 mx-4">
            <h2 className="text-[16px] font-bold border-b-2 border-blue-600 pb-3 relative max-w-[90px]">
              Quick Links
            </h2>
            <div className="flex flex-col pt-7 text-[14px]">
              <Link href="" className="pt-1">Home</Link>
              <Link href="" className="pt-1">Services</Link>
              <Link href="" className="pt-1">Industries</Link>
              <Link href="" className="pt-1">How It Works</Link>
              <Link href="" className="pt-1">Why</Link>
              <Link href="" className="pt-1">Contact us</Link>
            </div>
          </div>
          <div className="pt-10 mx-4">
            <h2 className="text-[16px] font-bold border-b-2 border-blue-600 pb-4 relative max-w-[94px]">
              Useful Links
            </h2>
            <div className="flex flex-col pt-7 text-[14px]">
              <Link href="" className="pt-1">Privacy Policy</Link>
              <Link href="" className="pt-1">Terms and Conditions</Link>
              <Link href="" className="pt-1">Disclaimer</Link>
              <Link href="" className="pt-1">Support</Link>
              <Link href="" className="pt-1">FAQ</Link>
            </div>
          </div>
          <div className="pt-10 mx-4">
            <h2 className="text-[16px] font-bold border-b-2 border-blue-600 pb-4 relative max-w-[90px]">
              Work Hours
            </h2>
            <div className="flex flex-col pt-7 text-[14px]">
              <h4 className="font-black pt-1">9 AM - 5 PM , Monday - Saturday</h4>
              <p className="pt-1 mx-w-[254px]">Lorem ipsum dolor sit amet, consectectur adipiscing elit, sed do eiusmod tempor</p>
              <div className="py-5">
            <button
              className="bg-blue-500 hover:bg-blue-700 rounded-full  text-white font-bold py-2 px-5 text-[16px] focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Call Us
            </button>
          </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default FooterPart;
