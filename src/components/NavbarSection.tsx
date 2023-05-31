import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { MdMenuOpen } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Nav: React.FC = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [activeNav,setActiveNav]=useState('#')

  const toggleMenu = () => {
    console.log("Toggle button clicked");
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="relative p-5 bg-white shadow md:flex md:items-center md:justify-between">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">
          <Link href="">Logo</Link>
        </h1>
      </div>
      <div>
        <ul
          className={`lg:flex lg:items-center lg:static z-30 absolute bg-white w-full left-0 lg:w-auto lg:py-0 py-4 lg:pl-0 pl-7 lg:opacity-100 ${
            isMenuOpen ? "opacity-100  top-[70px]" : "opacity-0 top-[-400px]"
          } transition-all ease-in duration-500`}
        >
          <li className="mx-4 lg:mx-2 my-6 md:my-0">
          <Link href="/" passHref>
            <p
              className={`text-xl hover:text-blue-600 duration-500 ${
                router.pathname === "/" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Home
            </p>
          </Link>
        </li>
        <li className="mx-4 lg:mx-2 xl:mx-5 my-6 md:my-0">
          <Link href="/Services" passHref>
            <p
              className={`text-xl hover:text-blue-600 duration-500 ${
                router.pathname === "/Services" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Services
            </p>
          </Link>
        </li>
        <li className="mx-4 lg:mx-2 xl:mx-5 my-6 md:my-0">
          <Link href="/Industries" passHref>
            <p
              className={`text-xl hover:text-blue-600 duration-500 ${
                router.pathname === "/Industries" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Industries
            </p>
          </Link>
        </li>
        <li className="mx-4 lg:mx-2 xl:mx-5 my-6 md:my-0">
          <Link href="/How_It_Works" passHref>
            <p
              className={`text-xl hover:text-blue-600 duration-500 ${
                router.pathname === "/How_It_Works" ? "text-blue-600 font-bold" : ""
              }`}
            >
              How It Works
            </p>
          </Link>
        </li>
        <li className="mx-4 lg:mx-2 xl:mx-5 my-6 md:my-0">
          <Link href="/Why" passHref>
            <p
              className={`text-xl hover:text-blue-600 duration-500 ${
                router.pathname === "/Why" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Why
            </p>
          </Link>
        </li>
        <li className="mx-4 lg:mx-2 xl:mx-5 my-6 md:my-0">
          <Link href="/Contact_us" passHref>
            <p
              className={`text-xl hover:text-blue-600 duration-500 ${
                router.pathname === "/Contact_us" ? "text-blue-600 font-bold" : ""
              }`}
            >
              Contact us
            </p>
          </Link>
        </li>
          <li className="mx-4 lg:mx-2 xl:mx-5 my-6 md:my-0">
            <Link
              href="#"
              className="text-xl hover:text-blue-800 text-blue-600 font-bold duration-500 sm:hidden"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2 float-right -mt-8 sm:mt-0 ">
        <Link
          href=""
          className="mx-5 text-lg sm:text-xl font-semibold text-blue-600 hidden sm:block  hover:text-blue-950"
        >
          Login
        </Link>
        <button className="rounded-full bg-blue-600 px-3 py-1 text-lg sm:text-xl sm:py-2 text-white border hover:text-blue-700 hover:bg-white hover:border-blue-700">
          Plans & Pricing
        </button>
        <span
          className="text-3xl cursor-pointer mx-2  lg:hidden block "
          onClick={toggleMenu}
        >
          {!isMenuOpen ? (
            <MdMenuOpen name="menu" className="ease-in duration-700" />
          ) : (
            <RxCross2 name="menu" className="ease-in duration-700" />
          )}
        </span>
      </div>
    </nav>
  );
};

export default Nav;
