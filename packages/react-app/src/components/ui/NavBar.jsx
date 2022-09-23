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
          <div className="flex w-full">
            <div className="text-2xl font-bold ml-4 lg:text-3xl pr-4 navBarText">
              <span>Web 3.0 Linktree</span>
            </div>
            <ul className="hidden md:flex space-x-4 items-center pl-2">
              <li>
                <Link to="/homemain" className="navBarText">Home</Link>
              </li>
              <li>
                <Link to="/about" className="navBarText">About</Link>
              </li>
              <li className="navBarText">Contact Us</li>
            </ul>
            <div className="hidden md:flex ml-auto space-x-4">
              <button>
                <Link to="/admin" className="navBarText">Admin (provisional)</Link>{" "}
              </button>
              <button className="navBarText">Login</button>
              <button className="pr-4 navBarText">Sign Up</button>
            </div>
            <div className="md:hidden flex flex-row px-2 ml-auto" onClick={handleClickNav}>
              {!nav ? <Bars3Icon className="w-12" /> : <XMarkIcon className="w-12" />}
            </div>
          </div>
        </div>
      </div>

      <div className={!nav ? "hidden" : "md:hidden SlideLeft flex flex-col"}>
        <ul className="mt-28 text-[32px]">
          <li className="border-b-2 border-zinc-300 w-full  text-center">
            <Link to="/homemain">Home</Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full text-center">
            <Link to="/about">About</Link>
          </li>
          <li className="border-b-2 border-zinc-300 w-full text-center">
            <Link to="/admin">Admin (provisional)</Link>
          </li>
          <button className="border-b-2 border-zinc-300 px-8 w-screen text-black  md:mx-auto">Sign In</button>
          <button className="border-b-2 border-zinc-300 px-8 w-screen md:mx-auto">Sign Up</button>
        </ul>
      </div>
    </div>
  );
};
