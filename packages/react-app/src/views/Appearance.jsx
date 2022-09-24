import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline/";

export default function Appearance() {
  const [prev, setPrev] = useState(false);
  const handleClickPrev = () => setPrev(p => !p);
  return (
    <div className="adminBG w-screen h-screen flex flex-col lgs:flex-row overflow-hidden">
      <section className="adminNavBar lgs:h-full lgs:w-[2.5%] h-[6%] flex lgs:justify-items-center lgs:flex-col">
        <button>
          <Link to="/homemain">
            <HomeIcon className="lgs:w-[80%] w-10 text-white pl-2 pt-2" />
          </Link>
        </button>
      </section>
      <div className="lgs:h-full lgs:w-[55%] flex flex-col h-[84%]">
        <div className="lgs:h-[68px] lgs:w-screen flex lgs:flex-row flex-col h-[10%]">
          <div className="lgs:h-full lgs:w-[50%] flex h-2/3">
            <ul className="flex flex-row space-x-2 pl-6 lg:text-[28px] items-center pt-6 text-lg">
              <li className="NavBarBtn hover:rounded-[1.1rem] px-6">
                <Link to="/admin" className="text-white hover:text-white">
                  Links
                </Link>
              </li>
              <li className="NavBarBtn hover:rounded-[1.1rem] px-6">
                <Link to="/appearance" className="text-white hover:text-white">
                  Appearance
                </Link>
              </li>
            </ul>
          </div>
          <div className="lgs:h-full lgs:w-[45%] order-first lgs:order-last flex h-1/3 px-4 items-center lgs:justify-end  text-white text-[20px]">
            <Link to="/" className="text-white">
              Wallet: Mylink/fire
            </Link>
          </div>
        </div>
        <div className="lgs:h-full lgs:w-screen flex lgs:flex-row h-full">
          <div className="lgs:h-full lgs:w-[65%] flex justify-center lgs:justify-start">
            <div className="flex-1 flex justify-center lgs:w-[60%] lgs:border-r-4 border-t-4 adminBorders">
              <div className="my-4 flex-1">
                <div className="space-x-24 flex mb-4 lgs:mb-0 flex-row w-screen lgs:w-full flex-1 justify-center lgs:space-x-18 lgs:mt-5"></div>
                <div className="w-screen h-[70%] psm:h-[80%] md:h-[85%] lg:h-[75%] lgs:w-full lgs:h-[88%] lgs:mt-8 overflow-y-auto overflow-x-hidden">
                  <div className="flex flex-1 w-screen flex-col lgs:w-full items-center">
                    <div className="flex flex-1 w-[80%] lgs:w-full flex-col lgs:space-y-8 space-y-4 items-center"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              !prev
                ? "lgs:h-full lgs:w-[32.5%] hidden lgs:inline border-t-4 adminBorders  text-white"
                : "SlideUp -translate-y-[115px]"
            }
          >
            Preview div
          </div>
        </div>
      </div>
      <div className=" lgs:hidden h-[8%] flex justify-center z-10 items-center">
        <button
          onClick={handleClickPrev}
          className="adminContentsBG rounded-[1.6rem] adminBorders border-x-[42px] text-[22px] h-[80%] font-bold"
        >
          Preview
        </button>
      </div>
    </div>
  );
}
