import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline/";
//'bg-blue-100 rounded-2xl

export const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleClickNav = () => setNav(!nav);
  return (
    <div className="relative flex justify-center w-screen z-40 ">
      <div className="w-screen drop-shadow-lg navBarBG rounded-full  mx-8 lg:mx-[150px] z-50 mt-8">
        <div className="px-2 flex my-2 sm:my-5">
          <div className="flex w-full items-center justify-center flex-row">
            <div className="text-2xl font-bold ml-4 lg:text-3xl pr-4 navBarText">
              <span>Web 3.0 Link</span>
            </div>
            <div className="hidden md:flex space-x-4 pl-2 justify-center self-center">
              <button>
                <Link to="/" className="text-white text-2xl hover:text-white">
                  Home
                </Link>
              </button>
            </div>
            <div className="hidden md:flex ml-auto space-x-4">
              <button>
                <Link to="/admin" className="text-white text-2xl hover:text-white">
                  Admin
                </Link>
              </button>
              <button className="navBarText pr-4 text-2xl">Login Wallet</button>
            </div>
            <div className="md:hidden flex flex-row px-2 ml-auto" onClick={handleClickNav}>
              {!nav ? <Bars3Icon className="w-12" /> : <XMarkIcon className="w-12" />}
            </div>
          </div>
        </div>
      </div>

      <div className={!nav ? "hidden" : "md:hidden SlideLeft flex flex-col overscroll-none"}>
        <ul className="mt-[150px] text-[32px]">
          <li className="border-b-2 dividerColor w-full  text-center">
            <Link to="/" className="text-white">
              Home
            </Link>
          </li>
          <li className="border-b-2 dividerColor w-full text-center">
            <Link to="/admin" className="text-white">
              Admin
            </Link>
          </li>
          <button className="border-b-2 dividerColor px-8 w-screen text-white  md:mx-auto">Login Wallet</button>
        </ul>
      </div>
    </div>
  );
};
